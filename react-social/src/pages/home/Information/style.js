import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme=>({
        root:{
            paddingBottom:"6rem",
            marginTop:20,
            zIndex : 5
        },
        tab:{
            //borderRadius: ".45rem",
            background:"#fff",
            padding: 15,
            marginRight:15,
            //boxShadow: "0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07)!important",

        },
        title:{
            color: "#1AAE6F!important",
            fontSize: "2rem",
            marginTop: 13,
            marginLeft: 5
        },
        avatar:{
            width: 80,
            height:80,
            color: "#1AAE6F",
            background: "rgba(169, 236, 208,.5)",
        },
        icon:{
            fontSize: "3rem",
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

