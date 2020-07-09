
import ApiGenericServicesSecurity from 'services/ApiGenericServicesSecurity';
import { request_security } from 'services/Api';
import { APP_NAME } from '../constants';

export default class User extends ApiGenericServicesSecurity{
    constructor(){
        super("user");
    }

    view(){
        return this.customGET("view");
    }

    getUserMenu() {
        return this.customGET("menu/"+APP_NAME);
    }

    getCurrentUser(){
        return this.customGET("me");
    }

    cancelUser(data){
        return this.customPUT("/cancel/"+data.id);
    }

    hasPermission(form,action) {
        return this.customPOST("haspermission",{form: form, action:action})
    }

    login(loginRequest) {
        return request_security({
            url: "/auth/login",
            method: 'POST',
            body: JSON.stringify(loginRequest)
        });
    }
    
    signup(signupRequest) {
        return request_security({
            url: "/auth/signup",
            method: 'POST',
            body: JSON.stringify(signupRequest)
        });
    }

    signupFinalUser(signupRequest){
        return request_security({
            url: "/auth/signupFinalUser",
            method: 'POST',
            body: JSON.stringify(signupRequest)
        });
    }
     
}