import React from 'react';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL} from 'constants/index';
import fbLogo from '../../../../img/fb-logo.png';
import googleLogo from '../../../../img/google-logo.png';
import githubLogo from '../../../../img/github-logo.png';
import {useStyles} from './style';


export default function SocialForm (props) {
    const classes = useStyles (props)
    return (    

        <div className={classes.socialContent}>
            <a className={classes.btnSocial} href={GOOGLE_AUTH_URL}>
                <img className={classes.Imsocial} src={googleLogo} alt="Google" /></a>
            <a className={classes.btnSocial} href={FACEBOOK_AUTH_URL}>
                <img className={classes.Imsocial}src={fbLogo} alt="Facebook" /></a>
            <a className={classes.btnSocial} href={GITHUB_AUTH_URL}>
                <img className={classes.Imsocial}src={githubLogo} alt="Github" /></a>
        </div>
    );
}