import React, { Component } from 'react';
import LoadingIndicator  from 'commons/LoadingIndicator';
import NotAuthorized from 'commons/NotAuthorized';
import Title from 'components/Title';
import Form from 'components/Form/FormTwoColumns';
import FormJSTools from 'components/Form/JStools';
import { hasPermission as userHasPermission, createUser } from 'services/User';
import { getRolList } from 'services/Rol';
import {listRegister as getCompanyList} from 'services/Company';
import Alert from 'react-s-alert';

class New extends Component {      
    constructor(props) {       
        super(props);
        let elements={
            name: {         idelement: "name", value:'', label: "Usuario", pattern:"^([\\w_.]){4,20}$", validators: ['required'], errorMessages:['Campo requiere un texto de 4 a 20 caracteres (Ejemplo: jorgesantos1)'], isError:false, elementType:'input' },
            email: {        idelement: "email", value:'', label: "Correo electrónico", pattern: "^[\\w-+._%.]+(\\.[\\w-]{1,25}){0,25}@[\\w-]{1,25}(\\.[\\w-]{1,10})+[\\w-]+$", validators: ['required'], errorMessages:['Campo requiere un correo válido (Ejemplo: jorge@gmail.com)'], isError:false, elementType:'input' },
            password: {     idelement: "password", value:'', label: "Clave", pattern:"^([\\w-\\.]+){1,20}$", validators: ['required'], errorMessages:['Campo requerido (ejemplo: Jorge10$%)'], isError:false, elementType:'password' },
            repassword: {   idelement: "repassword", value:'', label: "Confirmar clave", pattern:"^([\\w-\\.]+){1,20}$", validators: ['required'], errorMessages:['Campo requerido (ejemplo: Jorge10$%)'], isError:false, elementType:'password' },
            rol_id: {       idelement: "rol_id", value: 0, label: "Rol de usuario", pattern:"^[1-9][0-9]*$", validators: ['required'], errorMessages:['Campo requerido'], isError:false, elementType:'dropdown', list: [] },
            company_id: {   idelement: "company_id", value: 0, label: "Empresa", pattern:"^[1-9][0-9]*$", validators: ['required'], errorMessages:['Campo requerido'], isError:false, elementType:'dropdown', list: [] },
        }

        this.state = {
            controller: props.controller,
            loading: true,
            authorized:true,
            showList: props.showList,
            clean: true,
            elements:   FormJSTools.cleanValuesToElements(elements)
        }
        this.save = this.save.bind(this);
        this.handleShowList = this.handleShowList.bind(this);
        this.setCompanyList =  this.setCompanyList.bind(this);
        this.setRolList= this.setRolList.bind(this);
    }
    
    async save(data, backToList){
        if (data.password !== data.repassword){
            this.state.elements["password"].isError=true;
            this.state.elements["password"].errorMessages="La clave y confirmación deben ser iguales";
            this.state.elements["repassword"].isError=true;
            this.state.elements["repassword"].errorMessages="La clave y confirmación deben ser iguales";
            this.setState({ loading: false  });
            return;
        }
        this.setState({loading: true});    
        try{
            const hasPermission = await userHasPermission('user','create');    
            if (hasPermission.error)   this.setState({ authorized: false,  loading: false  });
            else{
                const newUser = await createUser(data,this.state.elements);
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
    
    async setCompanyList(){
        const response =  await getCompanyList();
        if (response.error) this.state.elements.company_id.list=[];
        else   this.state.elements.company_id.list=response.data;
    }

    async setRolList(){
        const response =  await getRolList();
        if (response.error) this.state.elements.rol_id.list=[];
        else   this.state.elements.rol_id.list=response.data;
    }

    async componentDidMount() {
        try{
            const hasPermission = await userHasPermission(this.state.controller,'create');    
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
                <Title title="Nuevo usuario"/>
                <Form elements= {this.state.elements} save={this.save} handleShowList={this.handleShowList} clean={this.state.clean} />
            </div>
        )
    }
}

export default New;