import React from 'react';
import UserAccount from './UserAccount';
import {connect } from "react-redux";
import mapStateToProps from './mapStateToProps';
import mapDispatchToProps from './mapDispatchToProps';
import { useHistory } from "react-router-dom";
import Form from 'components/Form/FormTwoColumns';
import Alert from 'react-s-alert';

const FormElements= (props)=> {
    let history = useHistory();
    const [userAccount,] = React.useState(new UserAccount());
    const [apiErrors,setApiErrors] = React.useState([]);
    const [elements,] = React.useState({
        email: {    idelement: "email",     value:'', label: "Correo", pattern:"^([\\w-\\.]+){1,25}@([\\w]+){2,25}.[a-z]{2,10}$", validators: ['required'], errorMessages:['Ingrese un correo válido'], isError:false, elementType:'input' },
        password: { idelement: "password",  value:'', label: "Clave", pattern:"^[\\w_\\sÑñáéíóúÁÉÍÓÚ().%$#/-]{6,20}$", validators: ['required'], errorMessages:['Alfanumérico y simbolos de 6 a 20 caracteres'], isError:false, elementType:'password' },
    });  
    
    const loginError=()=>{
        buttonList["register"].loading=false;
        let errors=  userAccount.getErrors();
        if (errors!==undefined){
            let newApiErrors=[];
            errors.forEach((item)=>{
                newApiErrors.push({"attribute":item.field,"message":item.defaultMessage});
            });
            setApiErrors(newApiErrors);
        }else if (userAccount.getErrorMessage()==="Bad credentials") Alert.error("Credenciales incorrectas");
        else if (userAccount.getErrorMessage()==="Failed to fetch") Alert.error("Intente de nuevo");
        else if (userAccount.getErrorMessage()==="Internal Server Error") Alert.error("Error de servidor");
        else Alert.error(userAccount.getErrorMessage());
        
        var clonedButtonList = Object. assign({}, buttonList);
        setButtonList(clonedButtonList);
    }

    const loginSuccess=async ()=>{
        props.SET_MENU(userAccount.getMenu());
        props.SET_CURRENT_USER(userAccount.getCurrentUser());
        history.push("/",{});
    }
    
    const login=async (data, _)=>{
        var clonedButtonList = Object. assign({}, buttonList);
        buttonList["register"].loading=true;
        setButtonList(clonedButtonList);

        userAccount.setEmail(data.email);
        userAccount.setPassword(data.password);
        await userAccount.login();
        if (userAccount.getIsError())   loginError();
        else loginSuccess();
    }

    const [buttonList,setButtonList]= React.useState({
        "register":{"label":"Iniciar sessión","icon":"send","callback":login,"loading":false,"size":"large","color":"#fff", "background":"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"},
    });

    return (<Form   elements= {elements} 
                    buttonList={buttonList}
                    apiErrors={apiErrors} />
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(FormElements);