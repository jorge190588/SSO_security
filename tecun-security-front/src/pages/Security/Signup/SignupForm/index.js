import React from 'react';
import {useStyles} from './style';
import { useHistory } from "react-router-dom";
import {connect } from "react-redux";
import mapStateToProps from './mapStateToProps';
import mapDispatchToProps from './mapDispatchToProps';
import ApiServices from 'services/ApiServices';
import Form from 'components/Form/FormTwoColumns';
import Alert from 'react-s-alert';

const  SignupForm= (props)=> {
    let history = useHistory();
    const classes = useStyles (props);
    const [apiErrors,setApiErrors] = React.useState([]);

    const [elements,] = React.useState({
        company_id: {   idelement: "company_id", value:1, label: "Empresa", pattern:"^([0-9]+){1,10}", validators: ['required'], errorMessages:['Código de empresa'], isError:false, elementType:'hidden' },
        name: {         idelement: "name",     value:'', label: "Usuario", pattern:"^([\\w-\\.]+){4,20}$", validators: ['required'], errorMessages:['Alfanumérico de 4 a 20 caracteres'], isError:false, elementType:'input' },
        email: {        idelement: "email",     value:'', label: "Correo", pattern:"^([\\w-\\.]+){1,25}@([\\w]+){2,25}.[a-z]{2,10}$", validators: ['required'], errorMessages:['Ingrese un correo válido'], isError:false, elementType:'input' },
        password: {     idelement: "password",  value:'', label: "Clave", pattern:"^[\\w_\\sÑñáéíóúÁÉÍÓÚ.-]{6,20}$", validators: ['required'], errorMessages:['Alfanumérico y simbolos de 6 a 20 caracteres'], isError:false, elementType:'password' },
        repassword: {   idelement: "repassword",  value:'', label: "Confirmar Clave", pattern:"^[\\w_\\sÑñáéíóúÁÉÍÓÚ.-]{6,20}$", validators: ['required'], errorMessages:['Alfanumérico y simbolos de 6 a 20 caracteres'], isError:false, elementType:'password' },
    });

     
    const signupError=(error)=>{
        buttonList["register"].loading=false;
        
        if (error.errors!==undefined){
            let newApiErrors=[];
            error.errors.forEach((item)=>{
                newApiErrors.push({"attribute":item.field,"message":item.defaultMessage});
            });
            setApiErrors(newApiErrors);
        }else if (error.error==="Bad credentials") Alert.error("Credenciales incorrectas");
        else if (error.error==="Internal Server Error") Alert.error("Error de servidor");
        else if (error.error==="Bad Request") Alert.error(error.message);

        else if (error.message==="Failed to fetch") Alert.error("Intente de nuevo");
        else Alert.error(error.message);
        
        var clonedButtonList = Object. assign({}, buttonList);
        setButtonList(clonedButtonList);
    }
    const signup=(data, _)=>{
        var clonedButtonList = Object. assign({}, buttonList);
        buttonList["register"].loading=true;
        setButtonList(clonedButtonList);

        const signUpRequest = Object.assign({},data);
        if (data.password!==data.repassword) {
            Alert.error("La clave y confirmación deben ser iguales");
        }else{
            ApiServices.userSecurity.signupFinalUser(signUpRequest)
            .then(response => {
                history.push("/login");
            }).catch(error => {
                signupError(error);
            });
        }
    }

    const [buttonList,setButtonList]= React.useState({
        "register":{"label":"Registrar","icon":"send","callback":signup,"loading":false,"size":"large","color":"#fff", "background":"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"},
    });

    return (<Form   elements= {elements} 
                    buttonList={buttonList}
                    apiErrors={apiErrors} />
    );

}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);