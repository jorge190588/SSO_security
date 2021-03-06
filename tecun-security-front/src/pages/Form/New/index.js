import React, { Component } from 'react';
import LoadingIndicator  from 'commons/LoadingIndicator';
import NotAuthorized from 'commons/NotAuthorized';
import Title from 'components/Title';
import Form from 'components/Form/FormTwoColumns';
import FormJSTools from 'components/Form/JStools';
import Alert from 'react-s-alert';
import ApiServices from 'services/ApiServices';

class New extends Component {      
    constructor(props) {       
        super(props);
        this.state = {
            controller: props.controller,
            loading: true,
            authorized:true,
            showList: props.showList,
            clean: true,
            elements: FormJSTools.cleanValuesToElements(props.elements),
            apiErrors:[]
        }
        
        this.saveAndClean = this.saveAndClean.bind(this);
        this.saveAndBack = this.saveAndBack.bind(this);
        this.handleShowList = this.handleShowList.bind(this);
        this.setSystemList = this.setSystemList.bind(this);
        this.setFormGroupList = this.setFormGroupList.bind(this);
        this.state.elements.system_id.handler= this.setFormGroupList;
    }
    
    saveAndClean=async(data)=>{ await this.save(data,false); }
    saveAndBack=async(data)=>{ await this.save(data,true); }

    async save(data, backToList){
       
        this.setState({loading: true});    
        try{
            const hasPermission = await ApiServices.userSecurity.hasPermission(this.state.controller,'create');
            if (hasPermission.error)   this.setState({ authorized: false,  loading: false  });
            else{
                const response = await ApiServices[this.state.controller].createRegister(data,this.state.elements);
                if (response.error)  {
                    if(response.error.code===304) {
                        Alert.error("Errores en los campos");
                        this.setState({ apiErrors:response.error.messageList, authorized: true,   loading: false, clean:false });
                    }else{
                        Alert.error(response.error.message);  
                        this.setState({ authorized: true,   loading: false, clean:false });
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

    async setFormGroupList(event){
        this.setState({loading: true});   
        ApiServices.formGroup.searchCriteria.clear();
        ApiServices.formGroup.searchCriteria.addEquals("system_id",event.target.value);
        const response =  await ApiServices.formGroup.listRegisterCriteria();
        (response.error) ? this.state.elements.formGroup_id.list=[] : this.state.elements.formGroup_id.list=response.data;
        this.setState({loading:false});   
    }

    async setSystemList(){
        ApiServices.system.searchCriteria.clear();
        const response =  await ApiServices.system.listRegister();
        (response.error) ? this.state.elements.system_id.list=[] : this.state.elements.system_id.list=response.data;
    }

    async componentDidMount() {
        try{
            this.setState({loading: true});
            const hasPermission = await ApiServices.userSecurity.hasPermission(this.state.controller,'create');    
            if (hasPermission.error){
                this.setState({ authorized: false,  loading: false  });
                Alert.error("Error !, intente de nuevo");                   
            }else{
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
                <Form   elements= {this.state.elements} 
                        saveAndClean={this.saveAndClean} 
                        saveAndBack={this.saveAndBack}
                        handleShowList={this.handleShowList} 
                        clean={this.state.clean}
                        apiErrors={this.state.apiErrors} />
            </div>
        )
    }
}

export default New;