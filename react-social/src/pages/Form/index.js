import React, { Component } from 'react';
import { hasPermission as userHasPermission} from 'services/User';
import { getFormList, deleteForm } from 'services/Form';
import LoadingIndicator  from 'commons/LoadingIndicator';
import NotAuthorized from 'commons/NotAuthorized';
import Title from 'components/Title';
import Table from 'components/Table';
import New from './New/index';
import Update from  './Update/index';
import Alert from 'react-s-alert';

class Form extends Component {     
    constructor(props) {
        super(props);
        this.state = {
            controller:'form',
            loading: true,
            authorized:false,
            create:false,
            update:false,
            delete:false,
            rowData: [],
            data: [],
            header: [
                { title: 'ID', field: 'id' },
                { title: 'Nombre', field: 'name' },
                { title: 'Icono', field: 'icon' },
                { title: 'Ruta en web', field: 'path' },
                { title: 'Ruta en movil', field:'mobileScreen'},
                { title: 'Mostrar en menú ?', field: 'showInMenu',type: 'boolean'  },
                { title: 'Grupo', field: 'formGroup.name' },
                { title: 'Sistema', field: 'system.name' },
            ],
            customActions:[],
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
        this.addRegister = this.addRegister.bind(this);
        this.updateRegister = this.updateRegister.bind(this);
        this.deleteRegister = this.deleteRegister.bind(this);
        this.showList = this.showList.bind(this);   
    }
  
    async addRegister(){
        this.setState({create:true,update:false, cancel:false, view: false, delete: false, rowData: [] });
    }

    async updateRegister(rowData){
        this.setState({create:false,update:true, cancel:false, view: false,delete: false,  rowData: rowData});
    }

    async deleteRegister(rowData){
        try{
            const hasPermission = await userHasPermission(this.state.controller,'delete');    
            if (hasPermission.error)   this.setState({ authorized: false,  loading: false  });
            else{
                const response = await deleteForm({'id':rowData.id});
                if (response.error)  {
                    if(response.error.code===301){
                        Alert.error("Error !, intente de nuevo "+response.error.message);
                        this.setState({ authorized: true,   loading: false  });
                    }else{
                        this.setState({ authorized: true,   loading: false });
                        Alert.error("Error !, "+response.error.message);                    
                    }
                }else{
                    Alert.success("Registro eliminado");
                    await this.showList();
                }
            }
        }catch(exception){
            (exception.status===404) ? Alert.error("Falla del sistema"): Alert.error("Intente de nuevo ");
            this.setState({ loading: false  });
        }        
    }

    async showList(){
        try{
            const hasPermission = await userHasPermission(this.state.controller,'list');    
            if (hasPermission.error){
                this.setState({
                    authorized: false,
                    loading: false,
                    create: false,
                    update: false,
                    delete: false,
                  });
            }else{
                const response =  await getFormList();
                this.setState({
                    authorized: true,
                    loading: false,
                    data: response.data,
                    create: false,
                    update: false,
                    delete: false,
                  });
            }

        }catch(exception){
            (exception.status===404) ? Alert.error("Falla del sistema"): Alert.error("Intente de nuevo ");
            this.setState({ loading: false  });
        }
    }

    async componentDidMount() {       
        this.showList();
    }
    
    render() {
        if (this.state.loading){ return <LoadingIndicator/> }
        if (!this.state.authorized){ return <NotAuthorized/> }
        if (this.state.create){ return <New     showList={this.showList} elements={this.state.elements}/> }
        if (this.state.update){ return <Update  showList={this.showList} elements={this.state.elements} rowData={this.state.rowData} /> }

        return (
            <div>
                 <Title title="Formularios" />
                 <br/>
                 <Table pageSize={this.state.pageSize} 
                        header = {this.state.header} 
                        data={this.state.data} 
                        addRegister={this.addRegister} 
                        updateRegister={this.updateRegister} 
                        deleteRegister={this.deleteRegister} 
                        customActions={this.state.customActions}/>
            </div>
        )
    }
}

export default Form;