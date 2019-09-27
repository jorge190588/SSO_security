import { request_security } from 'services/Api';
import { ACCESS_TOKEN } from '../constants';

export function getUserProfile() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }

    return request_security({
        url:  "/user/view",
        method: 'GET'
    });
}

export function setMenuFormat(data){
    var principalMenu = data.reduce((principalMenu, { formGroup, id,name, path, showInMenu, icon  }) => {
        if (formGroup.showInMenu){
            if (!principalMenu[formGroup.name]){
                principalMenu[formGroup.name]=[];
                principalMenu[formGroup.name].push({id: 0, name: formGroup.name, path:formGroup.path, icon:formGroup.icon});
            }
            if (showInMenu) principalMenu[formGroup.name].push({id:id, name:name, path: path, icon: icon});
        }
        return principalMenu;
    }, {});
    return principalMenu;
}


export function getUserMenu() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }

    return request_security({
        url: "/user/menu",
        method: 'GET'
    });
}


export function getUserCreate(data) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }
    return request_security({
        url: "/user/create",
        method: 'POST',
        body: JSON.stringify(data)
    });
}

export function getUserList() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }

    return request_security({
        url: "/user/list",
        method: 'GET'
    });
}

export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }

    return request_security({
        url:  "/user/me",
        method: 'GET'
    });
}



export function hasPermission(form,action) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }

    return request_security({
        url: "/user/haspermission",
        method: 'POST',
        body: JSON.stringify({form: form, action:action})
    });
}

export function login(loginRequest) {
    return request_security({
        url: "/auth/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function signup(signupRequest) {
    return request_security({
        url: "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}