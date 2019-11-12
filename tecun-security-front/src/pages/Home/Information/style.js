import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme=>({
        root:{
            paddingBottom:"6rem",
            marginTop: 20,
        },
        tab:{
            background:"#fff",
            padding: 15,
            marginRight:15,
        },
        title:{
            color: "#1AAE6F !important",
            fontSize: "2rem",
            marginTop: 13,
            marginLeft: 5,
            marginBottom: 5,
            width:"75%"
        },
        avatar:{
            width: 80,
            height:80,
            color: "#1AAE6F",
            background: "rgba(169, 236, 208,.5)",
        },
        icon:{
            fontSize: "3rem",
            "&:hover":{
                "-webkit-transform": "scale(1.3)",
                "-o-transform": "scale(1.3)",
                "-moz-transform": "scale(1.3)",
            },
        },
        avatarCheck:{
            width: 40,
            height:40,
            color: "#1AAE6F",
            background: "rgba(169, 236, 208,.5)",
            marginRight: 5
        },
        iconCheck:{
            fontSize: "1.4rem",
            "&:hover":{
                "-webkit-transform": "scale(1.5)",
                "-o-transform": "scale(1.5)",
                "-moz-transform": "scale(1.5)",
            },
        },
        listItem:{
            marginTop: 8,
        },
        description:{
            fontSize:"1.2rem",
            fontWeight: 300,
            lineHeight:"1.7"
        },
        button:{
            color: "#fff",
            background: "#1AAE6F",
            borderColor:"#1AAE6F",
        }
    })
);

