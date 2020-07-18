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
        let elements=   {
            name: {         idelement: "name", value:'', label: "Usuario", pattern:"^([\\w\\sÑñáéíóúÁÉÍÓÚ_.]){4,50}$", validators: ['required'], errorMessages:['Campo requiere un texto de 4 a 20 caracteres (Ejemplo: jorgesantos1)'], isError:false, elementType:'input' },
            email: {        idelement: "email", value:'', label: "Correo electrónico", pattern: "^[\\w-+._%.]+(\\.[\\w-]{1,25}){0,25}@[\\w-]{1,25}(\\.[\\w-]{1,10})+[\\w-]+$", validators: ['required'], errorMessages:['Campo requiere un correo válido (Ejemplo: jorge@gmail.com)'], isError:false, elementType:'input' },
            rol_id: {       idelement: "rol_id", value: 0, label: "Rol de usuario", pattern:"^[1-9][0-9]*$", validators: ['required'], errorMessages:['Campo requerido'], isError:false, elementType:'dropdown', list: [{id: 1, name:'Admin'},{id:2 , name:'Usuario'}] },
            company_id: {   idelement: "company_id", value: 0, label: "Empresa", pattern:"^[1-9][0-9]*$", validators: ['required'], errorMessages:['Campo requerido'], isError:false, elementType:'dropdown', list: [] },
        }
        this.state = {
            controller:props.controller,
            loading: true,
            authorized:true,
            showList: props.showList,
            clean: true,
            rowData: props.rowData,
            elements:FormJSTools.setValuesToElements(elements, props.rowData)
        }
        this.saveAndBack = this.saveAndBack.bind(this);
        this.handleShowList = this.handleShowList.bind(this);
        this.setCompanyList =  this.setCompanyList.bind(this);
        this.setRolList= this.setRolList.bind(this);
    }
    
    saveAndBack=async(data)=>{ await this.save(data,true); }

    async save(data, backToList){
        data.id=this.state.rowData.id;
        this.setState({loading: true});    
        try{
            const hasPermission = await ApiServices.userSecurity.hasPermission(this.state.controller,'update');     
            if (hasPermission.error)   this.setState({ authorized: false,  loading: false  });
            else{
                const response = await ApiServices.user.updateRegister(data,this.state.elements);
                if (response.error)  {
                    if(response.error.code===301)    this.setState({ elements: FormJSTools.setErrorsToElements(response, this.state.elements),  authorized: true,   loading: false, clean:false });
                    else{
                        Alert.error(response.error.message);                
                        this.setState({ authorized: true,   loading: false, clean:false });
                    }
                }else{
                    Alert.success("Registro guardado");
                    this.setState({ elements:  FormJSTools.cleanValuesToElements(this.state.elements), authorized: true,   loading: false, clean:true});
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

    async setCompanyList(){
        const response =  await ApiServices.company.listRegister();
        if (response.error) this.state.elements.company_id.list=[];
        else   this.state.elements.company_id.list=response.data;
    }

    async setRolList(){
        const response =  await ApiServices.rol.listRegister();
        if (response.error) this.state.elements.rol_id.list=[];
        else   this.state.elements.rol_id.list=response.data;
    }

    async componentDidMount() {
        try{
            const hasPermission = await ApiServices.userSecurity.hasPermission(this.state.controller,'update');       
            if (hasPermission.error){
                this.setState({ authorized: false,  loading: false  });
                Alert.error("Error !, intente de nuevo");                   
            }else{
                await this.setCompanyList();
                await this.setRolList();
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