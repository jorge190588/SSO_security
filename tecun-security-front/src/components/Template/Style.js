import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
    button: {
        '@media print':{
            display:'none',
        },
        margin: theme.spacing(1),
        ['@media (max-width:768px)']:{ //ipad
            padding: 0
        },
        ['@media (max-width: 415px)']:{ //mobile   
            marginLeft:0,
            minWidth:10,
            padding:0,
            fontSize: '0.60rem',
        },
    },
    root:{
        height: '100%',
        display: 'flex',
	},
    title: {
        flexGrow: 1,
        ['@media (max-width:2000px)']:{ //web
            fontSize:'1.2rem',
        },
        ['@media (max-width:1000px)']:{ //web
            fontSize:'1rem',
            minWidth: 200,
        },
        ['@media (max-width:768px)']:{ //ipad
            fontSize:'0.8rem',
            minWidth: 150,
        },
        ['@media (max-width:415px)']:{ //mobile
            fontSize:'0.7rem',
            maxWidth: 230,
        }
    },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#738CF3"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  icon:{
    marginRight:5,
    color: "#fff"
  }
}));