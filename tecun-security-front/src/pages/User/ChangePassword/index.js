import React, { Component } from 'react';
import LoadingIndicator  from 'commons/LoadingIndicator';
import NotAuthorized from 'commons/NotAuthorized';
import Title from 'components/Title';
import Form from 'components/Form/FormTwoColumns';
import FormJSTools from 'components/Form/JStools';
import { hasPermission as userHasPermission, changePassword } from 'services/User';
import Alert from 'react-s-alert';

class ChangePassword extends Component {      
    constructor(props) {       
        super(props);
        let elements=   {
            password: {     idelement: "password", value:'', label: "Clave", pattern:"^[\\w_\\sÑñáéíóúÁÉÍÓÚ().%$#/-]{6,20}$", validators: ['required'], errorMessages:['Campo requerido (ejemplo: Jorge10$%)'], isError:false, elementType:'password' },
            repassword: {   idelement: "repassword", value:'', label: "Confirmar clave", pattern:"^[\\w_\\sÑñáéíóúÁÉÍÓÚ().%$#/-]{6,20}$", validators: ['required'], errorMessages:['Campo requerido (ejemplo: Jorge10$%)'], isError:false, elementType:'password' },
        }
        this.state = {
            controller:props.controller,
            loading: true,
            authorized:true,
            showList: props.showList,
            clean: true,
            rowData: props.rowData,
            elements: elements,//FormJSTools.setValuesToElements(elements, props.rowData)
        }
        this.save = this.save.bind(this);
        this.handleShowList = this.handleShowList.bind(this);
    }
    
    async save(data, backToList){
        data.id=this.state.rowData.id;
        this.setState({loading: true});    
        try{
            const hasPermission = await userHasPermission(this.state.controller,'update');    
            if (hasPermission.error)   this.setState({ authorized: false,  loading: false  });
            else{
                const response = await changePassword(data);
                if (response.error)  {
                    if(response.error.code===301)    
                        this.setState({ elements: FormJSTools.setErrorsToElements(response, this.state.elements),  authorized: true,   loading: false, clean:false });
                    else{
                        this.setState({ authorized: true,   loading: false, clean:false });
                        Alert.error("Error !, intente de nuevo");                    
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


    async componentDidMount() {
        try{
            const hasPermission = await userHasPermission(this.state.controller,'update');    
            if (hasPermission.error){
                this.setState({ authorized: false,  loading: false  });
                Alert.error("Error !, intente de nuevo");                   
            }else{
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
                <Title title="Cambiar clave a usuario"/>
                <Form elements= {this.state.elements} save={this.save} handleShowList={this.handleShowList} clean={this.state.clean} />
            </div>
        )
    }
}

export default ChangePassword;