import React from 'react';
import { Link } from 'react-router-dom';
import {useStyles} from './style';
import SocialUpForm from './SocialUpElements';
import SignupForm from './SignupForm';

export default function SignUpElement (props) {
    const classes = useStyles(props);
    return (
        <div className={classes.signupContainer}>    
            <div className={classes.signupBox}>
                <div className={classes.leftBox}>
                    <h1 className={classes.titleLeft}> Regístrate</h1>
                    <SignupForm/>
                    <span>Tienes una cuenta?<Link to="/login">Iniciar sesión!</Link></span>
                </div>
                <div className={classes.rightBox}>
                    <span className={classes.signinwith}>Registrate con tu <br/>Red Social favorita</span>
                    <SocialUpForm/>
                </div>
                <div className={classes.or}>O</div>
            </div>
        </div>  
    ) 
}