import React from 'react';
import { Grid, Icon, Avatar, Button } from '@material-ui/core/';
import {useStyles} from './style';

export default function FormControlInput(props) {
    const classes = useStyles(props);

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={1}></Grid>
                <Grid item xs={3}  className={classes.tab}>
                    <Grid container justify="left" >
                        <Avatar className={classes.avatar}>
                            <Icon >web_asset</Icon>
                        </Avatar>
                       <h6 className={classes.title}>WEB</h6>
                       <p className={classes.description}>
                            El módulo web se puede integrar con aplicación de tipo web codificadas en cualquier lenguaje de programación
                        </p>
                        <Button variant="contained" className={classes.button}>
                            Ver mas...
                        </Button>
                    </Grid>
                </Grid>
                <Grid item xs={3}  className={classes.tab}>
                    <Grid container justify="left"  >
                        <Avatar className={classes.avatar}>
                                <Icon >mobile_screen_share</Icon>
                            </Avatar>
                            <h6 className={classes.title}>MÓVIL</h6>
                            <p className={classes.description}>
                                La integración con una aplicación para dispositivos móvil, tablet o iPad es facil y sencilla de realizar
                            </p>
                            <Button variant="contained" className={classes.button}>
                            Ver mas...
                        </Button>
                    </Grid>
                </Grid>
                <Grid item xs={3}  className={classes.tab}>
                    <Grid container justify="left"  >
                        <Avatar className={classes.avatar}>
                            <Icon >settings_applications</Icon>
                        </Avatar>
                        <h6 className={classes.title}>CONFIGURACIÓN</h6>
                        <p className={classes.description}>
                            El módulo provee formularios en donde un usuario administrador puede conceder o revocar los permisos para un usuarios que utiliza uno a mas sistemas de tipo web y móvil.
                        </p>
                        <Button variant="contained" className={classes.button}>
                            Ver mas...
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
             
           
       </div>
    )
}