import React, { Component } from 'react';
import LoadingIndicator  from 'commons/LoadingIndicator';
import NotAuthorized from 'commons/NotAuthorized';
import Title from 'components/Title';
import Form from './form';
import { hasPermission as userHasPermission } from 'services/User';
import { createRol } from 'services/Rol';
import Alert from 'react-s-alert';

class New extends Component {      
    constructor(props) {       
        super(props);
        this.state = {
            controller: "rol",
            loading: true,
            authorized:true,
            showList: props.showList,
            clean: true,
            elements:   {
                name: {         idelement: "name", value:'', label: "Nombre del rol", pattern:"^([\\w_\\s]){4,20}$", validators: ['required'], errorMessages:['Campo requiere un texto de 4 a 20 caracteres (Ejemplo: jorgesantos1)'], isError:false, elementType:'input' },
            }
        }
        this.save = this.save.bind(this);
        this.cleanValue = this.cleanValue.bind(this);
        this.handleShowList = this.handleShowList.bind(this);
        this.setErrors = this.setErrors.bind(true);
    }
    
    async save(data, backToList){
       
        this.setState({loading: true});    
        try{
            const hasPermission = await userHasPermission(this.state.controller,'create');    
            if (hasPermission.error)   this.setState({ authorized: false,  loading: false  });
            else{
                const newUser = await createRol(data,this.state.elements);
                if (newUser.error)  {
                    if(newUser.error.code===301)    this.setState({ elements:this.setErrors(newUser, this.state.elements),  authorized: true,   loading: false, clean:false });
                    else{
                        this.setState({ authorized: true,   loading: false, clean:false });
                        Alert.error("Error !, intente de nuevo");                    
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
            const hasPermission = await userHasPermission(this.state.controller,'create');    
            if (hasPermission.error){
                this.setState({ authorized: false,  loading: false  });
                Alert.error("Error !, intente de nuevo");                   
            }else   this.setState({ authorized: true,   loading: false  });

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