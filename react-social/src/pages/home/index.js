import React, { Component } from 'react';
import LoadingIndicator  from 'commons/LoadingIndicator';
import Header from './Header/index';
import Tab from './Tab/index';

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
            </div>
            
        )
    }
}


export default Home;