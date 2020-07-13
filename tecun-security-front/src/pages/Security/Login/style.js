import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme=>({
    loginContainer : {
        position: 'relative!important',
        //overflow: 'hidden',
        backgroundSize: 'cover',
        backgroundImage: `url(/img/backPayCloud.svg)`,
        backgroundPosition: 'center center',
        backgroundAttachment:'fixed',
        height: '100%',
        
        ['@media (max-width:1030px)']:{ // web
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
        },
        ['@media (max-width:768px)']:{ // ipad
            height: '100%',
            backgroundSize: 'cover',
            backgroundImage: `url(/img/backIpad.svg)`,
        },
        ['@media (max-width:460px)']:{ // mobil
            height: '100%',
            backgroundSize: 'cover',
        }
    },

    loginBox :{
        position: 'absolute',
        margin:  'auto',
        left:'34%',
        padding: 0,
        background: '#fff',
        borderRadius: '14%',
        textAlign: 'center',

        ['@media (max-width: 2000px)'] :{  //web
            width: '16%',
            height: '38%',
            marginTop: '12%',
            left: '40%',
            minWidth: 312,
        },
        ['@media (max-width: 1500px)'] :{  //web
            width: '24%',
            height: '40%',
            marginTop: '14%',
            left: '36%',
        },
        ['@media (max-width:1366px)']:{ // web
            width: '24%',
            height: '38%',
            marginTop: '16%',
            left: '38%',
        },
        ['@media (max-width:1280px)']:{ // web
            width: '24%',
            height: '38%',
            marginTop: '17%',
            left: '39%',
        },
        ['@media (max-width:1030px)']:{ // web
            width: '30%',
            height: '38%',
            marginTop: '21%',
            left: '37%',
        },
        ['@media (max-width:780px)']:{ // ipad
            width: '43%',
            height: '26%',
            marginTop: '40%',
            left: '30%'
        },
        ['@media (max-width:460px)']:{ // mobil
            height: '38%',
            marginTop: '38%',
            left: '5%',
            boxShadow:'0 0 20px rgb(176, 50, 235)',
        },
        boxShadow:'0 0 40px rgb(176, 50, 235)',
    },

    titleLeft : {
        marginBottom: '5%',
        fontWeight: '500',
        fontSize: '22px', 
        color: `rgb(73, 7, 90)`,
        textAlign: 'center',
        textShadow: `0 2px 4px rgba(199, 96, 194, 0.52)`,
    },
}))