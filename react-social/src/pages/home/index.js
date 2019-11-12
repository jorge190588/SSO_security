import React, { Component } from 'react';
import LoadingIndicator  from 'commons/LoadingIndicator';
import { Divider } from '@material-ui/core/';
import Header from './Header/index';
import Tab from './Tab/index';
import Information from './Information/index';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {loading: false}
    }
  
    componentDidMount() {
        this.setState({loading: true });
        setTimeout(function(){ 
            this.setState({loading: false });
         }.bind(this), 100);
    }
    
    render() {
        if (this.state.loading){
            return <LoadingIndicator></LoadingIndicator>
        }

        return (
            <div>
                <Header/>
                <Tab/>
                <Divider component="li" />
                <Information/>
            </div>
            
        )
    }
}

// Reference: https://demos.creative-tim.com/argon-design-system-react/#/landing-page
export default Home;