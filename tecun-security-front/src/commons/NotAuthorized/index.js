import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

class NotAuthorized extends Component {
    render() {
        return (
            <div className="page-not-found">
                <h1 className="title">
                    401
                </h1>
                <div className="desc">
                    Acceso no autorizado
                </div>
                <Link to="/"><button className="go-back-btn btn btn-primary" type="button">Ir al inicio</button></Link>
            </div>
        );
    }
}

export default NotAuthorized;