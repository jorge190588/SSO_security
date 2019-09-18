import React, { Component } from 'react';
import './style.css';
import LoadingIndicator  from '../../common/LoadingIndicator';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loading: false
        }
    }
  
    componentDidMount() {
        this.setState({loading: true });
        setTimeout(function(){ 
            this.setState({loading: false });
         }.bind(this), 3000);
    }
    
    render() {
        if (this.state.loading){
            return <LoadingIndicator></LoadingIndicator>
        }

        return (
            <div className="home-container">
                <div className="container">
                    <div className="graf-bg-container">
                        <div className="graf-layout">
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                        </div>
                    </div>
                    <h1 className="home-title">Demostración de registro de usuarios con OAuth 2 + JWT</h1>
                </div>
            </div>
        )
    }
}

export default Home;