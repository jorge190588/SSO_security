import React from 'react';
import { Grid, Icon} from '@material-ui/core/';
import {useStyles} from './style';

const SpanElement = (props) =>{ 
    const classes = useStyles(props);
    return (<span className={classes.span}></span>)
}

export default function FormControlInput(props) {
    const classes = useStyles(props);

    return (
        <div className={classes.header}>
            <Grid container className={classes.gridRoot} >
                <Grid item xs={1}></Grid>
                <Grid item xs={5}>
                    <Grid container justify="center" >
                        <Grid key={1} item>
                            <div className={classes.title}>Servidor de autenticación</div>
                            <div className={classes.subtitle}>Módulo para aplicaciones web y móvil</div>
                            <div className={classes.description}>El modulo de seguridad se integra con aplicación móviles y web, un usuario administrar debe conceder o revocar permisos a los formularios y sus acciones</div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2}>
                    <Icon className={classes.icon}>lock</Icon>
                </Grid>
            </Grid>
            {
                [1,2,3,4,5,6,7,8,9,10].map((item,index)=>{
                    return (<SpanElement key={index} index={index}  ></SpanElement>)
                })
            }
            <div className={classes.footer}>
                <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                    <polygon class="fill-white" points="2560 0 2560 100 0 100"></polygon></svg>
            </div>
           
       </div>
    )
}