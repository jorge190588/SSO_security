import React, { Component } from 'react';
import LoadingIndicator  from 'commons/LoadingIndicator';
import NotAuthorized from 'commons/NotAuthorized';
import Title from 'components/Title';
import Form from 'components/Form/FormTwoColumns';
import FormJSTools from 'components/Form/JStools';
import { hasPermission as userHasPermission } from 'services/User';
import { createForm } from 'services/Form';
import { getFormGroupList } from 'services/FormGroup';
import { getSystemList } from 'services/System';
import Alert from 'react-s-alert';

class New extends Component {      
    constructor(props) {       
        super(props);
        this.state = {
            controller: "form",
            loading: true,
            authorized:true,
            showList: props.showList,
            clean: true,
            elements:   FormJSTools.cleanValuesToElements(props.elements)
        }
        
        this.save = this.save.bind(this);
        this.handleShowList = this.handleShowList.bind(this);
        this.setSystemList = this.setSystemList.bind(this);
        this.setFormGroupList = this.setFormGroupList.bind(this);
    }
    
    async save(data, backToList){
       
        this.setState({loading: true});    
        try{
            const hasPermission = await userHasPermission(this.state.controller,'create');    
            if (hasPermission.error)   this.setState({ authorized: false,  loading: false  });
            else{
                const newUser = await createForm(data,this.state.elements);
                if (newUser.error)  {
                    if(newUser.error.code===301)    this.setState({ elements: FormJSTools.setErrorsToElements(newUser, this.state.elements),  authorized: true,   loading: false, clean:false });
                    else{
                        this.setState({ authorized: true,   loading: false, clean:false });
                        Alert.error("Error !, intente de nuevo");                    
                    }
                }else{
                    Alert.success("Registro guardado");
                    this.setState({ elements: FormJSTools.cleanValuesToElements(this.state.elements), authorized: true,   loading: false, clean:true});
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

    async setFormGroupList(){
        const responseFormGroup =  await getFormGroupList();
        (responseFormGroup.error) ? this.state.elements.formGroup_id.list=[] : this.state.elements.formGroup_id.list=responseFormGroup.data.map((item,index)=>{ return {"id":item.id, "name": item.name+" - "+item.system.name} });
    }

    async setSystemList(){
        const responseSystem =  await getSystemList();
        (responseSystem.error) ?  this.state.elements.system_id.list=[] : this.state.elements.system_id.list=responseSystem.data;
    }

    async componentDidMount() {
        try{
            this.setState({loading: true});
            const hasPermission = await userHasPermission(this.state.controller,'create');    
            if (hasPermission.error){
                this.setState({ authorized: false,  loading: false  });
                Alert.error("Error !, intente de nuevo");                   
            }else{
                await this.setFormGroupList();
                await this.setSystemList();
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
                <Title title="Nuevo formulario"/>
                <Form elements= {this.state.elements} save={this.save} handleShowList={this.handleShowList} clean={this.state.clean} />
            </div>
        )
    }
}

export default New;