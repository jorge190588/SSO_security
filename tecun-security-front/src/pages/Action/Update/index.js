import React, { Component } from 'react';
import LoadingIndicator  from 'commons/LoadingIndicator';
import NotAuthorized from 'commons/NotAuthorized';
import Title from 'components/Title';
import Form from 'components/Form/FormTwoColumns';
import FormJSTools from 'components/Form/JStools';
import ApiServices from 'services/ApiServices';
import { hasPermission as userHasPermission} from 'services/User';
import { updateAction } from 'services/Action';
import { getMethodList } from 'services/Method';
import Alert from 'react-s-alert';

class Update extends Component {      
    constructor(props) {       
        super(props);
        this.state = {
            controller: props.controller,
            loading: true,
            authorized:true,
            showList: props.showList,
            clean: true,
            id: props.rowData.id,
            elements:FormJSTools.setValuesToElements(props.elements, props.rowData),
            apiErrors:[]
        }
        this.saveAndBack = this.saveAndBack.bind(this);
        this.handleShowList = this.handleShowList.bind(this);
        this.setMethodList = this.setMethodList.bind(this);
    }
    
    async setMethodList(){
        const response =  await getMethodList();
        (response.error) ?  this.state.elements.method_id.list=[] : this.state.elements.method_id.list=response.data;
    }

    saveAndBack=async(data)=>{ await this.save(data,true); }

    async save(data, backToList){
        data.id=this.state.id;
        this.setState({loading: true});    
        try{
            const hasPermission = await ApiServices.userSecurity.hasPermission(this.state.controller,'update');    
            if (hasPermission.error)   this.setState({ authorized: false,  loading: false  });
            else{
                const response = await ApiServices[this.state.controller].updateRegister(data);
                if (response.error)  {
                    if(response.error.code===304) {
                        Alert.error("Errores en los campos");
                        this.setState({ apiErrors:response.error.messageList, authorized: true,   loading: false, clean:false });
                    }else{
                        this.setState({ authorized: true,   loading: false, clean:false });
                        Alert.error(response.error.message);
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

    handleShowList(){ this.state.showList(); }
    
    async componentDidMount() {
        try{
            const hasPermission = await ApiServices.userSecurity.hasPermission(this.state.controller,'update');    
            if (hasPermission.error){
                this.setState({ authorized: false,  loading: false  });
                Alert.error("Error !, intente de nuevo");                   
            }else{
                this.setMethodList();
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
                <Title title="Modificar acción"/>
                <Form   elements= {this.state.elements} 
                        saveAndBack={this.saveAndBack}
                        handleShowList={this.handleShowList} 
                        clean={this.state.clean} 
                        apiErrors={this.state.apiErrors}/>
            </div>
        )
    }
}

export default Update;