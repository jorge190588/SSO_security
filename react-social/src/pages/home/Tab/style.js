import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme=>({
        root:{
            paddingBottom:"6rem",
            marginTop:-120,
            //zIndex : 5
            position: "relative",
        },
        tab:{
            borderRadius: ".45rem",
            background:"#fff",
            padding: 15,
            marginRight:15,
            boxShadow: "0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07)!important",

        },
        title:{
            color: "#fb6340!important",
            fontSize: "1rem",
            marginTop: 12,
            marginLeft: 5
        },
        avatar:{
            color: "#ff3709",
            background: "rgba(252,140,114,.5)",
        },
        icon:{
            "&:hover":{
                "-webkit-transform": "scale(1.3)",
                "-o-transform": "scale(1.3)",
                "-moz-transform": "scale(1.3)",
            },
        },
        description:{
            fontSize:".875rem",
            fontWeight:300,
            lineHeight:"1.7"
        },
        button:{
            color: "#fff",
            background: "#fb6340",
            borderColor:"#fb6340",
        }
    })
);

