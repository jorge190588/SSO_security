import React from 'react';
import { Grid, Icon, Avatar } from '@material-ui/core/';
import {useStyles} from './style';

export default function Information(props) {
    const classes = useStyles(props);

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={1}></Grid>
                <Grid item xs={5}  className={classes.tab}>
                    <Grid container>
                        <Avatar className={classes.avatar}>
                            <Icon className={classes.icon}>description</Icon>
                        </Avatar>
                       <h6 className={classes.title}>Descripción</h6>
                       <p className={classes.description}>
                            Tecún es un módulo de facil integración con aplicaciones de software que son desarrolladas para plataformas móviles y web, su funcionamiento se basa en las tecnologias:
                        </p>
                        <Grid container>
                            <Avatar className={classes.avatarCheck}>
                                <Icon className={classes.iconCheck}>done</Icon>
                            </Avatar>
                            <h3 className={classes.listItem}>OAuth 2.0</h3>
                        </Grid>
                        <Grid container>
                            <Avatar className={classes.avatarCheck}>
                                <Icon className={classes.iconCheck}>done</Icon>
                            </Avatar>
                            <h3 className={classes.listItem}>Java Web Token JWT</h3>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={5}  className={classes.tab}>
                    <Grid container>
                        <Avatar className={classes.avatar}>
                            <Icon className={classes.icon}>mobile_screen_share</Icon>
                        </Avatar>
                        <h6 className={classes.title}>Opciones</h6>
                        <p className={classes.description}>
                            Las principales opciones de este módulo de seguiridad son:
                        </p>
                        <Grid container>
                            <Avatar className={classes.avatarCheck}>
                                <Icon className={classes.iconCheck}>done</Icon>
                            </Avatar>
                            <h3 className={classes.listItem}>Crear usuarios</h3>
                        </Grid>
                        <Grid container>
                            <Avatar className={classes.avatarCheck}>
                                <Icon className={classes.iconCheck}>done</Icon>
                            </Avatar>
                            <h3 className={classes.listItem}>Crear roles y permisos</h3>
                        </Grid>
                        <Grid container>
                            <Avatar className={classes.avatarCheck}>
                                <Icon className={classes.iconCheck}>done</Icon>
                            </Avatar>
                            <h3 className={classes.listItem}>Asignación de roles a usuarios</h3>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
       </div>
    )
}