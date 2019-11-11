import React, { Component } from 'react';
import { hasPermission as userHasPermission} from 'services/User';
import { getFormGroupList, deleteFormGroup } from 'services/FormGroup';
import LoadingIndicator  from 'commons/LoadingIndicator';
import NotAuthorized from 'commons/NotAuthorized';
import Title from 'components/Title';
import Table from 'components/Table';
import New from './New/index';
import Update from  './Update/index';
import Alert from 'react-s-alert';

class Rol extends Component {     
    constructor(props) {
        super(props);
        this.state = {
            controller:'formGroup',
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
                { title: 'Es Grupo de páginas ?', field: 'isGroupOfPages',type: 'boolean'  },
                { title: 'Mostrar en menú ?', field: 'showInMenu',type: 'boolean'  },
                { title: 'Orden', field: 'itemOrder' },
                { title: 'Sistema', field: 'system.name' },
            ],
            customActions:[],
            elements:   {
                name: {         idelement: "name", value:'', label: "Nombre del grupo", pattern:"^([\\w_\\s]){4,20}$", validators: ['required'], errorMessages:['Campo requiere un texto de 4 a 20 caracteres (Ejemplo: Grupo inicial)'], isError:false, elementType:'input' },
                icon: {             idelement: "icon", value:'', label: "Icono", pattern:"^([\\w_\\s]){3,20}$", validators: ['required'], errorMessages:['Campo requiere un texto de 3 a 20 caracteres (Ejemplo: file)'], isError:false, elementType:'input' },
                itemOrder: {             idelement: "itemOrder", value:'', label: "Orden", pattern:"^([\\w_\\s]){1,20}$", validators: ['required'], errorMessages:['Campo requiere un número (Ejemplo: 1)'], isError:false, elementType:'input' },
                system_id: {        idelement: "system_id", value: 0, label: "Sistema", pattern:"^[1-9][0-9]*$", validators: ['required'], errorMessages:['Campo requerido'], isError:false, elementType:'dropdown', list: [] },
                isGroupOfPages: {       idelement: "isGroupOfPages", value:false, label: "Mostrar en Menú ?", pattern:"^([\\w_\\s]){3,20}$", validators: ['required'], errorMessages:['Seleccione una opción'], isError:false, elementType:'checkbox' },
                showInMenu: {       idelement: "showInMenu", value:false, label: "Mostrar en Menú ?", pattern:"^([\\w_\\s]){3,20}$", validators: ['required'], errorMessages:['Seleccione una opción'], isError:false, elementType:'checkbox' },
            }
        }
        this.addRegister = this.addRegister.bind(this);
        this.updateRegister = this.updateRegister.bind(this);
        this.deleteRegister = this.deleteRegister.bind(this);
        this.showList = this.showList.bind(this);   
        
    }
  
    async addRegister(){
        this.setState({create:true});
    }

    async updateRegister(rowData){
        this.setState({update:true, rowData: rowData});
    }

    async deleteRegister(rowData){
        try{
            this.setState({ loading: true });
            const hasPermission = await userHasPermission(this.state.controller,'delete');    
            if (hasPermission.error)   this.setState({ authorized: false,  loading: false  });
            else{
                const response = await deleteFormGroup({'id':rowData.id});
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
            this.setState({loading: true});
            const hasPermission = await userHasPermission(this.state.controller,'list');    
            if (hasPermission.error){
                this.setState({authorized: false,loading: false,create: false,update: false,delete: false});
            }else{
                const response =  await getFormGroupList();
                this.setState({authorized: true,loading: false,data: response.data,create: false,update: false,delete: false});
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
        if (this.state.update){ return <Update  showList={this.showList} elements={this.state.elements} rowData={this.state.rowData}/> }

        return (
            <div>
                 <Title title="Grupo de formularios"/>
                 <br/>
                 <Table pageSize={this.state.pageSize} header = {this.state.header} data={this.state.data} 
                        addRegister={this.addRegister} updateRegister={this.updateRegister} 
                        deleteRegister={this.deleteRegister} 
                        customActions={this.state.customActions}/>
            </div>
        )
    }
}

export default Rol;