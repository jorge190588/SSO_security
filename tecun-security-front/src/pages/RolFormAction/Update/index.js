import React, { Component } from 'react';
import LoadingIndicator  from 'commons/LoadingIndicator';
import NotAuthorized from 'commons/NotAuthorized';
import Title from 'components/Title';
import Form from './form';
import { hasPermission as userHasPermission, getUserCreate } from 'services/User';
import Alert from 'react-s-alert';

class Update extends Component {      
    constructor(props) {       
        super(props);
        this.state = {
            loading: true,
            authorized:true,
            showList: props.showList,
            clean: true,
            elements:   {
                name: {         idelement: "name", value:'', label: "Usuario", pattern:"^([\\w_]){4,20}$", validators: ['required'], errorMessages:['Campo requiere un texto de 4 a 20 caracteres (Ejemplo: jorgesantos1)'], isError:false, elementType:'input' },
                email: {        idelement: "email", value:'', label: "Correo electrónico", pattern: "^[\\w-+._%]+(\\.[\\w-]{1,25}){0,25}@[\\w-]{1,25}(\\.[\\w-]{1,10})+[\\w-]+$", validators: ['required'], errorMessages:['Campo requiere un correo válido (Ejemplo: jorge@gmail.com)'], isError:false, elementType:'input' },
                rol_id: {       idelement: "rol_id", value: 0, label: "Rol de usuario", pattern:"^[1-9][0-9]*$", validators: ['required'], errorMessages:['Campo requerido'], isError:false, elementType:'dropdown', list: [{id: 1, name:'Admin'},{id:2 , name:'Usuario'}] },
            }
        }
        Object.keys(props.rowData).forEach(key =>   {
            if(this.state.elements[key]!==undefined){
                this.state.elements[key].value=props.rowData[key] ;
            }
        })

        this.save = this.save.bind(this);
        this.cleanValue = this.cleanValue.bind(this);
        this.handleShowList = this.handleShowList.bind(this);
        this.setErrors = this.setErrors.bind(true);
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
                const response = await getUserCreate(data,this.state.elements);
                if (response.error)  {
                    if(response.error.code===301)    this.setState({ elements:this.setErrors(response, this.state.elements),  authorized: true,   loading: false, clean:false });
                    else{
                        Alert.error(response.error.message);  
                        this.setState({ authorized: true,   loading: false, clean:false });
                    }
                }else{
                    Alert.success("Registro guardado");
                    this.setState({ elements:this.cleanValue(this.state.elements), authorized: true,   loading: false, clean:true});
                    if (backToList) this.handleShowList();
                }
            }
        }catch(exception){
            (exception.status===404) ? Alert.error("Falla del sistema"): Alert.error("Intente de nuevo ");
            this.setState({ loading: false  });
        }
    }

    setErrors(newUser, elements){    
        newUser.error.messageList.forEach(function(entry) {
            elements[entry.attribute].errorMessages=entry.message;
            elements[entry.attribute].isError=true;
        });
        return elements;
    }

    cleanValue(elements){
        Object.keys(elements).map(key => elements[key].value='');
        return elements;
    }

    handleShowList(){
        this.state.showList();
    }

    async componentDidMount() {
        try{
            const hasPermission = await userHasPermission('user','create');    
            this.setState({
              authorized: (hasPermission.error) ? false : true,
              loading: false
            });
        }catch(exception){
            this.setState({
                authorized: false,
                loading: false
            });
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