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
                            Argon is a great free UI package based on Bootstrap 4 that includes the most important components and features.
                        </p>
                    </Grid>
                </Grid>
                <Grid item xs={3}  className={classes.tab}>
                    <Grid container justify="left"  >
                        <Avatar className={classes.avatar}>
                                <Icon >mobile_screen_share</Icon>
                            </Avatar>
                            <h6 className={classes.title}>MÓVIL</h6>
                            <p className={classes.description}>
                                Argon is a great free UI package based on Bootstrap 4 that includes the most important components and features.
                            </p>
                    </Grid>
                </Grid>
                <Grid item xs={3}  className={classes.tab}>
                    <Grid container justify="left"  >
                        <Avatar className={classes.avatar}>
                            <Icon >add</Icon>
                        </Avatar>
                        <h6 className={classes.title}>SEGURIDAD</h6>
                        <p className={classes.description}>
                            Argon is a great free UI package based on Bootstrap 4 that includes the most important components and features.
                        </p>
                        <Button variant="contained" className={classes.button}>
                            Ver mas
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
             
           
       </div>
    )
}