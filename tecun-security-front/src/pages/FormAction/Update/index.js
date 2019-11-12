import React, { Component } from 'react';
import LoadingIndicator  from 'commons/LoadingIndicator';
import NotAuthorized from 'commons/NotAuthorized';
import Title from 'components/Title';
import Form from 'components/Form/FormTwoColumns';
import FormJSTools from 'components/Form/JStools';
import { hasPermission as userHasPermission} from 'services/User';
import { updateFormAction } from 'services/FormAction';
import { getFormList } from 'services/Form';
import { getActionList } from 'services/Action';
import Alert from 'react-s-alert';

class Update extends Component {      
    constructor(props) {       
        super(props);
        this.state = {
            controller: "formAction",
            loading: true,
            authorized:true,
            showList: props.showList,
            clean: true,
            id: props.rowData.id,
            elements:FormJSTools.setValuesToElements(props.elements, props.rowData)
        }
        
        this.save = this.save.bind(this);
        this.handleShowList = this.handleShowList.bind(this);
        this.setActionList = this.setActionList.bind(this);
        this.setFormList = this.setFormList.bind(this);
    }
    
    async save(data, backToList){
        data.id=this.state.id;
        this.setState({loading: true});    
        try{
            const hasPermission = await userHasPermission(this.state.controller,'update');    
            if (hasPermission.error)   this.setState({ authorized: false,  loading: false  });
            else{
                const newUser = await updateFormAction(data);
                if (newUser.error)  {
                    if(newUser.error.code===301)    this.setState({ elements:FormJSTools.setErrorsToElements(newUser, this.state.elements),  authorized: true,   loading: false, clean:false });
                    else{
                        this.setState({ authorized: true,   loading: false, clean:false });
                        Alert.error("Error !, intente de nuevo");                    
                    }
                }else{
                    Alert.success("Registro guardado");
                    this.setState({ elements:FormJSTools.cleanValuesToElements(this.state.elements), authorized: true,   loading: false, clean:true});
                    if (backToList) this.handleShowList();
                }
            }
        }catch(exception){
            (exception.status===404) ? Alert.error("Falla del sistema"): Alert.error("Intente de nuevo ");
            this.setState({ loading: false  });
        }
    }

    handleShowList(){
        this.state.showList();
    }

    async setFormList(){
        const response =  await getFormList();
        (response.error) ? this.state.elements.form_id.list=[] : this.state.elements.form_id.list=response.data.map((item,index)=>{ return {"id":item.id, "name": item.name+" - "+item.system.name} });
    }

    async setActionList(){
        const response =  await getActionList();
        (response.error) ?  this.state.elements.action_id.list=[] : this.state.elements.action_id.list=response.data;
    }

    async componentDidMount() {
        try{
            const hasPermission = await userHasPermission(this.state.controller,'update');    
            if (hasPermission.error){
                this.setState({ authorized: false,  loading: false  });
                Alert.error("Error !, intente de nuevo");                   
            }else{
                await this.setFormList();
                await this.setActionList();
                this.setState({ authorized: true,   loading: false, ...this.state.elements  });
            }
        }catch(exception){
            (exception.status===404) ? Alert.error("Falla del sistema"): Alert.error("Intente de nuevo ");
            this.setState({ authorized: false,  loading: false  });
        }
    }
    
    render() {
        if (!this.state.authorized){    return <NotAuthorized/> }

        return (
            <div>
                {this.state.loading ? (<LoadingIndicator/>): null}
                <Title title="Modificar usuario"/>
                <Form elements= {this.state.elements} save={this.save} handleShowList={this.handleShowList} clean={this.state.clean} />
            </div>
        )
    }
}

export default Update;