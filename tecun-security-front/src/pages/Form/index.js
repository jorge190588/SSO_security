import React, { Component } from 'react';
import LoadingIndicator  from 'commons/LoadingIndicator';
import NotAuthorized from 'commons/NotAuthorized';
import Title from 'components/Title';
import Table from 'components/Table';
import New from './New/index';
import Update from  './Update/index';
import Alert from 'react-s-alert';
import ApiServices from 'services/ApiServices';

class Form extends Component {     
    constructor(props) {
        super(props);
        this.state = {
            controller:'form',
            key: Math.random(),
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
                { title: 'Nombre', field: 'name' },
                { title: 'Icono', field: 'icon' },
                { title: 'Ruta en web', field: 'path' },
                { title: 'Ruta en movil', field:'mobileScreen'},
                { title: 'Grupo', field: 'formGroup.name' },
                { title: 'Sistema', field: 'system.name' },
            ],
            customActions:[],
            elements:   {
                name: {             idelement: "name", value:'', label: "Nombre del formulario", pattern:"^[\\w_\\sÑñáéíóúÁÉÍÓÚ.-]{3,30}$", validators: ['required'], errorMessages:['Campo requiere un texto de 3 a 30 caracteres (Ejemplo: formulario 1)'], isError:false, elementType:'input' },
                icon: {             idelement: "icon", value:'', label: "Icono", pattern:"^([\\w_\\s]){3,20}$", validators: ['required'], errorMessages:['Campo requiere un texto de 3 a 20 caracteres (Ejemplo: file)'], isError:false, elementType:'input' },
                system_id: {        idelement: "system_id", value: 0, label: "Sistema", pattern:"^[1-9][0-9]*$", validators: ['required'], errorMessages:['Campo requerido'], isError:false, elementType:'dropdown', list: [] },
                formGroup_id: {     idelement: "formGroup_id", value: 0, label: "Grupo", pattern:"^[1-9][0-9]*$", validators: ['required'], errorMessages:['Campo requerido'], isError:false, elementType:'dropdown', list: [] },
                path: {             idelement: "path", value:'', label: "Ruta en web", pattern:"^([/\\w_\\s]){0,30}$", validators: ['required'], errorMessages:['Campo requiere un texto de 3 a 20 caracteres (Ejemplo: file)'], isError:false, elementType:'input' },
                mobileScreen: {     idelement: "mobileScreen", value:'', label: "Ruta en movil", pattern:"^([/\\w_\\s]){0,30}$", validators: ['required'], errorMessages:['Campo requiere un texto de 3 a 20 caracteres (Ejemplo: Home)'], isError:false, elementType:'input' },
            }
        }
        
        this.addRegister = this.addRegister.bind(this);
        this.updateRegister = this.updateRegister.bind(this);
        this.deleteRegister = this.deleteRegister.bind(this);
        this.showList = this.showList.bind(this);   
    }
    async addRegister(){ this.setState({create:true}); }
    async updateRegister(rowData){ this.setState({update:true, rowData: rowData}); }

    async deleteRegister(rowData){
        try{
            this.setState({ loading: true });
            const hasPermission = await ApiServices.userSecurity.hasPermission(this.state.controller,'delete');    
            if (hasPermission.error)   this.setState({ authorized: false,  loading: false  });
            else{
                const response = await ApiServices[this.state.controller].deleteRegister({'id':rowData.id});
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
            const hasPermission = await ApiServices.userSecurity.hasPermission(this.state.controller,'list');    
            if (hasPermission.error){
                this.setState({checkAutorization: false,authorized: false,loading: false,create: false,update: false,delete: false});
            }else{
                this.setState({checkAutorization: false, authorized: true,loading: false,key: Math.random(),create: false,update: false,delete: false});
            }
        }catch(exception){
            (exception.status===404) ? Alert.error("Falla del sistema"): Alert.error("Intente de nuevo ");
            this.setState({ loading: false,checkAutorization: false  });
        }
    }
    async componentDidMount() { this.showList(); }
    
    render() {
        if (this.state.checkAutorization ) return <LoadingIndicator/>
        if (!this.state.authorized &&  !this.state.loading){ return <NotAuthorized/>}
        if (this.state.create){ return <New     showList={this.showList} elements={this.state.elements} controller={this.state.controller}/> }
        if (this.state.update){ return <Update  showList={this.showList} elements={this.state.elements} controller={this.state.controller} rowData={this.state.rowData}/> }

        return (
            <div >
                { this.state.loading ? <LoadingIndicator/> : '' }
                 <Title title="Formularios"/>
                 <br/>
                 <Table key={this.state.key}
                        pageSize={this.state.pageSize} 
                        header = {this.state.header} 
                        data={this.state.data} 
                        addRegister={this.addRegister} 
                        updateRegister={this.updateRegister} 
                        deleteRegister={this.deleteRegister} 
                        customActions={this.state.customActions}
                        service={ ApiServices[this.state.controller] }
                />
            </div>
        )
    }
}

export default Form;