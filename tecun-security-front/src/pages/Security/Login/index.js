import React from 'react';
import {useStyles} from './style';
import FormTemplate from './FormElements/index';
import {connect } from "react-redux";
import mapStateToProps from './mapStateToProps';
import mapDispatchToProps from './mapDispatchToProps';
import { Redirect } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';

const  Login= (props)=> {
    const classes = useStyles(props);
    if (props.authenticated===true)
        return <Redirect    to={{
                            pathname: "/",
                            state: { from: props.location, authenticated:props.authenticated }
                        }}/>; 
    else
        return (
            <Paper>
                <div className={classes.loginContainer}>    
                    <div className={classes.loginBox}>
                        <h1 className={classes.titleLeft}> Iniciar Sesión  </h1>
                        <FormTemplate/>
                    </div>
                </div> 
            </Paper>
        ) 
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);