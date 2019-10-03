import React, { Component } from 'react';
import { hasPermission as userHasPermission} from 'services/User';
import { getRolList } from 'services/Rol';
import LoadingIndicator  from 'commons/LoadingIndicator';
import NotAuthorized from 'commons/NotAuthorized';
import Title from 'components/Title';
import Table from 'components/Table';
import New from './New/index';
import Update from  './Update/index';
import RolFormAction from 'pages/RolFormAction';

class Rol extends Component {
      
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            authorized:false,
            create:false,
            update:false,
            cancel:false,
            view: false,
            formAccess:false,
            rowData: [],
            data: [],
            header: [
                { title: 'ID', field: 'id' },
                { title: 'Nombre', field: 'name' },
               
            ],
            customActions:[]
        }
        this.addRegister = this.addRegister.bind(this);
        this.updateRegister = this.updateRegister.bind(this);
        this.viewRegister = this.viewRegister.bind(this);
        this.cancelRegister = this.cancelRegister.bind(this);
        this.showList = this.showList.bind(this);   
        this.formAccessRegister = this.formAccessRegister.bind(this);
    }
  
    async formAccessRegister(rowData){
        this.setState({create:false,update:false, cancel:false, formAccess:true, view: false, rowData: rowData});
    }

    async addRegister(){
        this.setState({create:true,update:false, cancel:false, formAccess:false, view: false, rowData: [] });
    }

    async updateRegister(event, rowData){
        this.setState({create:false,update:true, cancel:false, formAccess:false, view: false, rowData: rowData});
    }

    async viewRegister(event, rowData){
        this.setState({create:false,update:false, cancel:false, formAccess:false, view: true, rowData: rowData});
    }

    async cancelRegister(event, rowData){
        this.setState({create:false,update:false, cancel:true, formAccess:false, view: false, rowData: rowData});
    }

    async showList(){
        try{
            const hasPermission = await userHasPermission('rol','list');    
            if (hasPermission.error){
                this.setState({
                    authorized: (hasPermission.error) ? false : true,
                    loading: false,
                    create: false,
                    update: false,
                    view: false,
                    cancel:false,
                    formAccess:false
                  });
            }else{
                const response =  await getRolList();
                this.setState({
                    authorized: true,
                    loading: false,
                    data: response.data,
                    create: false,
                    update: false,
                    view: false,
                    cancel:false,
                    formAccess:false
                  });
            }

        }catch(exception){
            this.setState({
                authorized: false,
                loading: false,
                create: false,
                update: false,
                view: false,
                cancel:false,
                formAccess:false
            });
        }
    }

    async componentDidMount() {
        var self = this;
        this.state.customActions.push(function(rowData){ 
            return {
                icon: 'lock_open',
                tooltip: 'Permisos a formularios',
                onClick: function() { self.formAccessRegister(rowData); }
            }
        });

       
        this.showList();
    }
    
    render() {
        if (this.state.loading){ return <LoadingIndicator/> }
        if (!this.state.authorized){ return <NotAuthorized/> }
        if (this.state.create){ return <New showList={this.showList}/> }
        if (this.state.update){ return <Update rowData={this.state.rowData} showList={this.showList}/> }
        if (this.state.formAccess){ return <RolFormAction rowData={this.state.rowData} showList={this.showList}/> }

        return (
            <div>
                 <Title title="Roles de usuario"/>
                 <br/>
                 <Table pageSize={this.state.pageSize} header = {this.state.header} data={this.state.data} 
                        addRegister={this.addRegister} updateRegister={this.updateRegister} 
                        viewRegister={this.viewRegister} cancelRegister={this.cancelRegister} 
                        customActions={this.state.customActions}/>
            </div>
        )
    }
}

export default Rol;