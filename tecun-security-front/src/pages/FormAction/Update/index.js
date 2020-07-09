import React, { Component } from 'react';
import LoadingIndicator  from 'commons/LoadingIndicator';
import NotAuthorized from 'commons/NotAuthorized';
import Title from 'components/Title';
import Form from 'components/Form/FormTwoColumns';
import FormJSTools from 'components/Form/JStools';
import ApiServices from 'services/ApiServices';
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
            rowData: props.rowData,
            elements:FormJSTools.setValuesToElements(props.elements, props.rowData),
            apiErrors:[]
        }

        this.saveAndBack = this.saveAndBack.bind(this);
        this.handleShowList = this.handleShowList.bind(this);
        this.setActionList = this.setActionList.bind(this);
        this.setSystemList = this.setSystemList.bind(this);
        this.setFormGroupList = this.setFormGroupList.bind(this);
        this.setFormList = this.setFormList.bind(this);
        this.state.elements.system_id.handler=this.setFormGroupList;
        this.state.elements.formGroup_id.handler=this.setFormList;
    }
    
    saveAndBack=async(data)=>{ await this.save(data,true); }

    async save(data, backToList){
        data.id=this.state.id;
        this.setState({loading: true});    
        try{
            const hasPermission = await ApiServices.userSecurity.hasPermission(this.state.controller,'update');    
            if (hasPermission.error)   this.setState({ authorized: false,  loading: false  });
            else{
                const saveData = Object.assign({}, data);
                delete saveData["system_id"];
                delete saveData["formGroup_id"];
                const response = await ApiServices[this.state.controller].updateRegister(saveData);
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
 
    async setSystemList(){
        const response =  await  ApiServices.system.listRegister();
        (response.error) ?  this.state.elements.system_id.list=[] : this.state.elements.system_id.list=response.data;
        this.state.elements.formGroup_id.list=[];
        this.state.elements.form_id.list=[];
        this.setState({...this.state.elements});
    }

    setFormGroupList(event){
        this.setFormGroupListToElements(event.target.value);
    }

    async setFormGroupListToElements(id){
        this.setState({loading: true});
        ApiServices.formGroup.searchCriteria.clear();
        ApiServices.formGroup.searchCriteria.addEquals("system_id",id);
        const response =  await ApiServices.formGroup.listRegisterCriteria();
        (response.error) ?  this.state.elements.formGroup_id.list=[] : this.state.elements.formGroup_id.list=response.data;
        this.state.elements.form_id.list=[];
        this.setState({loading: false,...this.state.elements});
    }

    setFormList(event){
        this.setFormListToElements(event.target.value);
    }

    async setFormListToElements(id){
        this.setState({loading: true});
        ApiServices.form.searchCriteria.clear();
        ApiServices.form.searchCriteria.setOperator("and");
        ApiServices.form.searchCriteria.addEquals("formGroup_id",id);
        const response =  await ApiServices.form.listRegisterCriteria(); 
        (response.error) ? this.state.elements.form_id.list=[] : this.state.elements.form_id.list=response.data;//.map((item,index)=>{ return {"id":item.id, "name": item.name+" - "+item.system.name} });
        this.setState({loading: false});
    }

    async setActionList(){
        const response =  await  ApiServices.action.listRegister();
        (response.error) ?  this.state.elements.action_id.list=[] : this.state.elements.action_id.list=response.data;
    }

    async componentDidMount() {
        try{
            const hasPermission = await ApiServices.userSecurity.hasPermission(this.state.controller,'update');    
            if (hasPermission.error){
                this.setState({ authorized: false,  loading: false  });
                Alert.error("Error !, intente de nuevo");                   
            }else{
                await this.setActionList();
                await this.setSystemList();
                await this.setFormGroupListToElements(this.state.rowData.form.formGroup.system_id);
                await this.setFormListToElements(this.state.rowData.form.formGroup.id);
                this.state.elements.system_id.value=this.state.rowData.form.formGroup.system_id;
                this.state.elements.formGroup_id.value= this.state.rowData.form.formGroup.id;
                this.setState({ authorized: true,   loading: false, ...this.state.elements});
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
                <Title title="Modificar acción de formulario"/>
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