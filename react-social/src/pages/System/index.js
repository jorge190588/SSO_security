import React, { Component } from 'react';
import { hasPermission as userHasPermission} from 'services/User';
import { getSystemList, deleteSystem } from 'services/System';
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
            controller:'system',
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
               
            ],
            customActions:[],
            elements:   {
                name: {         idelement: "name", value:'', label: "Nombre del sistema", pattern:"^([\\w_\\s]){4,20}$", validators: ['required'], errorMessages:['Campo requiere un texto de 4 a 20 caracteres (Ejemplo: SYSTEM_WEB)'], isError:false, elementType:'input' },
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
                const response = await deleteSystem({'id':rowData.id});
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
                const response =  await getSystemList();
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
                 <Title title="Sistemas"/>
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