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
            clean: true
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
                var _data = Object.assign({}, data);
                delete _data["rol"];
                const newUser = await getUserCreate(_data);
                if (newUser.error){
                    Alert.error(newUser.error.message);
                    this.setState({
                        authorized: true,
                        loading: false,
                        clean:false
                    });
                }else{
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
                <Form save={this.save} handleShowList={this.handleShowList} clean={this.clean} />
            </div>
        )
    }
}

export default New;