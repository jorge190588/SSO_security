import React, { Component } from 'react';
import LoadingIndicator  from 'commons/LoadingIndicator';
import NotAuthorized from 'commons/NotAuthorized';
import Title from 'components/Title';
import Form from 'components/Form/FormTwoColumns';
import { hasPermission as userHasPermission} from 'services/User';
import { updateForm } from 'services/Form';
import { getFormGroupList } from 'services/FormGroup';
import { getSystemList } from 'services/System';
import Alert from 'react-s-alert';

class Update extends Component {      
    constructor(props) {       
        super(props);
        this.state = {
            controller: "form",
            loading: true,
            authorized:true,
            showList: props.showList,
            clean: true,
            id: props.rowData.id,
            elements:   {
                name: {             idelement: "name", value:'', label: "Nombre del formulario", pattern:"^([\\w_\\s]){4,20}$", validators: ['required'], errorMessages:['Campo requiere un texto de 4 a 20 caracteres (Ejemplo: formulario 1)'], isError:false, elementType:'input' },
                icon: {             idelement: "icon", value:'', label: "Icono", pattern:"^([\\w_\\s]){3,20}$", validators: ['required'], errorMessages:['Campo requiere un texto de 3 a 20 caracteres (Ejemplo: file)'], isError:false, elementType:'input' },
                formGroup_id: {     idelement: "formGroup_id", value: 0, label: "Grupo", pattern:"^[1-9][0-9]*$", validators: ['required'], errorMessages:['Campo requerido'], isError:false, elementType:'dropdown', list: [] },
                system_id: {        idelement: "system_id", value: 0, label: "Sistema", pattern:"^[1-9][0-9]*$", validators: ['required'], errorMessages:['Campo requerido'], isError:false, elementType:'dropdown', list: [] },
                path: {             idelement: "path", value:'', label: "Ruta en web", pattern:"^([/\\w_\\s]){3,20}$", validators: ['required'], errorMessages:['Campo requiere un texto de 3 a 20 caracteres (Ejemplo: file)'], isError:false, elementType:'input' },
                mobileScreen: {     idelement: "mobileScreen", value:'', label: "Ruta en movil", pattern:"^([/\\w_\\s]){3,20}$", validators: ['required'], errorMessages:['Campo requiere un texto de 3 a 20 caracteres (Ejemplo: Home)'], isError:false, elementType:'input' },
                showInMenu: {       idelement: "showInMenu", value:false, label: "Mostrar en Menú ?", pattern:"^([\\w_\\s]){3,20}$", validators: ['required'], errorMessages:['Seleccione una opción'], isError:false, elementType:'checkbox' },
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
        data.id=this.state.id;
        this.setState({loading: true});    
        try{
            const hasPermission = await userHasPermission(this.state.controller,'update');    
            if (hasPermission.error)   this.setState({ authorized: false,  loading: false  });
            else{
                const newUser = await updateForm(data);
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
            }else{
                const responseFormGroup =  await getFormGroupList();
                if (responseFormGroup.error) this.state.elements.formGroup_id.list=[];
                else   this.state.elements.formGroup_id.list=responseFormGroup.data.map((item,index)=>{ return {"id":item.id, "name": item.name+" - "+item.system.name} });
                
                const responseSystem =  await getSystemList();
                if (responseSystem.error) this.state.elements.system_id.list=[];
                else   this.state.elements.system_id.list=responseSystem.data
                
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
                <Form elements= {this.state.elements} save={this.save} handleShowList={this.handleShowList} clean={this.state.clean} />
            </div>
        )
    }
}

export default Update;