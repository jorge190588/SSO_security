import { request_security } from 'services/Api';
import { ACCESS_TOKEN, APP_NAME } from '../constants';

const moduleName="user";

export function getUserProfile() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }

    return request_security({
        url:  "/"+moduleName+"/view",
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
        url: "/"+moduleName+"/menu/"+APP_NAME,
        method: 'GET'
    });
}


export function createUser(data) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }
    return request_security({
        url: "/"+moduleName+"/create",
        method: 'POST',
        body: JSON.stringify(data)
    });
}

export function enableRegister(params) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }
    
    return request_security({
        url: "/"+moduleName+"/enable/"+params.id,
        method: 'PATCH'
    });
}

export function disableRegister(params) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }
    
    return request_security({
        url: "/"+moduleName+"/disable/"+params.id,
        method: 'PATCH'
    });
}

export function changePassword(data) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }
    return request_security({
        url: "/"+moduleName+"/changePassword",
        method: 'PATCH',
        body: JSON.stringify(data)
    });
}

export function updateUser(data) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }
    return request_security({
        url: "/"+moduleName+"/update",
        method: 'PUT',
        body: JSON.stringify(data)
    });
}

export function getUserList() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }

    return request_security({
        url: "/"+moduleName+"/list",
        method: 'GET'
    });
}

export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }

    return request_security({
        url:  "/"+moduleName+"/me",
        method: 'GET'
    });
}

export function hasPermission(form,action) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }

    return request_security({
        url: "/"+moduleName+"/haspermission",
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