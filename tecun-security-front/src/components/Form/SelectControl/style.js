import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({    
    formControl:{
        paddingRight: theme.spacing(2),
        minWidth: 300,
    },
    textField:{
        marginRight: theme.spacing(2),
        paddingRight:15,
        marginTop: 0,
        minWidth: 300,
    },   
}));
