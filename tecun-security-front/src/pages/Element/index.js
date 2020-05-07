import React, { Component } from 'react';
import { hasPermission as userHasPermission} from 'services/User';
import { listRegister, deleteRegister  } from 'services/Element';
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
            controller:'element',
            loading: true,
            authorized:false,
            checkAutorization:true,
            create:false,
            update:false,
            delete:false,
            rowData: [],
            data: [],
            header: [
                { title: 'ID', field: 'id' },
                { title: 'ID Elemento', field: 'idelement' },               
                { title: 'Etiqueta', field: 'label' },
                { title: 'Mascara', field: 'mask' },
                { title: 'Mascara propiedad', field: 'maskProperty' },
                { title: 'Expresión regular', field: 'pattern' },
                { title: 'Expresión Mensaje', field: 'patternMessage' },
                { title: 'Tipo', field: 'elementType.name' },
                { title: 'Entidad', field: 'entiti.name' },
                { title: 'Orden', field: 'orderElement' },
                { title: 'Crear', field: 'isCreate', type:'boolean' },
                { title: 'Modificar', field: 'isUpdate', type:'boolean' },
                { title: 'Eliminar', field: 'isDelete', type:'boolean' },
                { title: '¿Es único?', field: 'isUnique', type:'boolean' }, 
            ],
            customActions:[],
            elements:   {
                name: {         idelement: "name", value:'', label: "Nombre del rol", pattern:"^([\\w_\\s]){4,20}$", validators: ['required'], errorMessages:['Campo requiere un texto de 4 a 20 caracteres (Ejemplo: jorgesantos1)'], isError:false, elementType:'input' },
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
                const response = await deleteRegister({'id':rowData.id});
                if (response.error)  {
                    Alert.error( (response.error.code===301) ? "Intente de nuevo" : response.error.message);
                    this.setState({ authorized: true,   loading: false });
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
                this.setState({checkAutorization: false,authorized: false,loading: false,create: false,update: false,delete: false});
            }else{
                const response =  await listRegister();
                this.setState({checkAutorization: false,authorized: true,loading: false,data: response.data,create: false,update: false,delete: false});
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
        if (this.state.checkAutorization) return <LoadingIndicator/>
        if (!this.state.authorized){ return <NotAuthorized/> }
        if (this.state.create){ return <New     showList={this.showList} elements={this.state.elements}/> }
        if (this.state.update){ return <Update  showList={this.showList} elements={this.state.elements} rowData={this.state.rowData}/> }
    

        return (
            <div>
                { this.state.loading ? <LoadingIndicator/> : '' }   
                 <Title title="Elementos de formularios"/>
                 <br/>
                 <Table pageSize={this.state.pageSize} header = {this.state.header} data={this.state.data} 
                        addRegister={this.addRegister} updateRegister={this.updateRegister} 
                        deleteRegister={this.deleteRegister} 
                        />
            </div>
        )
    }
}

export default Rol;