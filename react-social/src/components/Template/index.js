import React from 'react';
import { Route,  Switch, Link } from 'react-router-dom';
import clsx from 'clsx';
import {  useTheme } from '@material-ui/core/styles';
import { IconButton, Drawer, CssBaseline, AppBar , Toolbar, Typography, Button, Divider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PrivateRoute from 'commons/PrivateRoute';
import Home from 'pages/Home/';
import Help from 'pages/Help/';
import User from 'pages/User/';
import Rol from 'pages/Rol/';
import Form from 'pages/Form/';
import RolFormAction from 'pages/RolFormAction/';
import Login from 'pages/Security/Login/';
import Signup from 'pages/Security/Signup/';
import Profile from 'pages/Security/Profile/';
import {useStyles} from './Style';
import VerticalMenu from 'components/VerticalMenu';

export default function Menu(props) {
  const classes = useStyles();
  const theme = useTheme();
  var onLogin = props.onLogin;
  var authenticated =props.authenticated;
  const [open, setOpen] = React.useState(false);
  
  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }
    
  return (

    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className="app-title">Sistema</Link>
          </Typography> 
          { props.authenticated ? (
            <div>
              <Button className={classes.button} color="inherit" variant="outlined"  onClick={props.onLogout} >Cerrar sesión</Button>
            </div>
          ):(
            <div>
            <Button className={classes.button} color="inherit" variant="outlined" to='/login' component={Link}>Iniciar sesión </Button>
            <Button className={classes.button} color="inherit" variant="outlined" to='/signup' component={Link} >Registro </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <VerticalMenu menu={props.menu}></VerticalMenu>
        <Divider />
       
       </Drawer>
      <main className={clsx(classes.content, {  [classes.contentShift]: open,})}>
      <div className={classes.drawerHeader} />
        <Switch>
          <Route exact path="/"   component={Home}></Route>
          <Route path="/help"     component={Help}/>
          <PrivateRoute path="/profile" authenticated={authenticated} currentUser={props.currentUser} component={Profile}></PrivateRoute>
          <PrivateRoute path="/user" authenticated={authenticated} currentUser={props.currentUser} component={User}></PrivateRoute>
          <PrivateRoute path="/rol" authenticated={authenticated} component={Rol}></PrivateRoute>
          <PrivateRoute path="/form" authenticated={authenticated} component={Form}></PrivateRoute>
          <PrivateRoute path="/rolFormAction" authenticated={authenticated} component={RolFormAction}></PrivateRoute>
          <Route path="/login"    render={(props) => <Login authenticated={authenticated} onLogin={onLogin} {...props} />}></Route>
          <Route path="/signup"   render={(props) => <Signup authenticated={authenticated} {...props} />}></Route>
        </Switch>

      </main>
    </div>
  );
}