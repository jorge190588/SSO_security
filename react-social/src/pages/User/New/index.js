import React, { Component } from 'react';
import LoadingIndicator  from 'commons/LoadingIndicator';
import NotAuthorized from 'commons/NotAuthorized';
import Title from 'components/Title';
import Form from './form';
import { hasPermission as userHasPermission, getUserCreate } from 'services/User';
import Alert from 'react-s-alert';

class New extends Component {      
    constructor(props) {       
        super(props);
        this.state = {
            loading: true,
            authorized:true,
            showList: props.showList,
            values: { name:'', email:'', password:'', repassword:''},
            clean: true,
            elements:{
                name: {         value:'', pattern:"^([\\w_]){1,15}", validators: ['required'], errorMessages:['Campo requiere un texto entre 1 a 15 caracteres'], isError:false, elementType:'input' },
                email: {        value:'', pattern: "^[\\w-+._%]+(\\.[\\w-]{1,20}){0,20}@[\\w-]{1,15}(\\.[\\w-]{1,5})+[\\w-]+$", validators: ['required'], errorMessages:['Campo requerido (ejemplo: jorge@gmail.com)'], isError:false, elementType:'input' },
                password: {     value:'', pattern:"^([\\w-\\.]+){1,20}$", validators: ['required'], errorMessages:['Campo requerido (ejemplo: Jorge10$%)'], isError:false, elementType:'input' },
                repassword: {   value:'', pattern:"^([\\w-\\.]+){1,20}$", validators: ['required'], errorMessages:['Campo requerido (ejemplo: Jorge10$%)'], isError:false, elementType:'input' },
                rol_id: {       value:0,  pattern:"^[1-9][0-9]*$", validators: ['required'], errorMessages:['Campo requerido'], isError:false, elementType:'input', elementType:'dropdown', list: [{id: 1, name:'Admin'},{id:2 , name:'Usuario'}] },
              }
        }
        this.save = this.save.bind(this);
        this.handleShowList = this.handleShowList.bind(this);
        this.handleChange  = this.handleChange.bind(this);
    }
    

    async save(data, backToList){
        this.setState({loading: true});
        
        try{
            const hasPermission = await userHasPermission('user','create');    
            if (hasPermission.error){
                this.setState({
                    authorized: false,
                    loading: false
                });
            }else{
                const newUser = await getUserCreate(data);
                var _elements = Object.assign({}, this.state.elements);
                if (newUser.error){
                    if(newUser.error.code===301){
                        newUser.error.messageList.forEach(function(entry) {
                            _elements[entry.attribute].errorMessages=entry.message;
                            _elements[entry.attribute].isError=true;
                        });
                    }else{
                        Alert.error("Error !, intente de nuevo");
                    }
                    
                    this.setState({
                        elements:_elements,
                        authorized: true,
                        loading: false,
                        clean:false
                    });
                }else{
                    Object.keys(this.state.elements).map(key => {
                        this.state.elements[key].value='';
                    });
                    Alert.success("Registro guardado");
                    this.setState({
                        authorized: true,
                        loading: false,
                        clean:true
                    });
                }
            }
        }catch(exception){
            (exception.status===404) ? Alert.error("Falla del sistema"): Alert.error("Intente de nuevo ");
            this.setState({
                loading: false
            });
        }
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

    handleChange = name => event => {
        const values  = this.state.values;
        values[name] = event.target.value;
        this.setState({...values});
    };
    
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