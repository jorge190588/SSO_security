import { request_security } from 'services/Api';
import { ACCESS_TOKEN, PRINCIPAL_MENU } from '../constants';

export function getUserProfile() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }

    return request_security({
        url:  "/user/view",
        method: 'GET'
    });
}

function setMenuFormat(data){
    var principalMenu = data.reduce((principalMenu, { formGroup, id,name, path, showInMenu  }) => {
        if (formGroup.showInMenu){
            if (!principalMenu[formGroup.name]){
                principalMenu[formGroup.name]=[];
                principalMenu[formGroup.name].push({id: 0, name: formGroup.name, path:path});
            }
            if (showInMenu) principalMenu[formGroup.name].push({id:id, name:name, path: path});
        }
        return principalMenu;
    }, {});
    return principalMenu;
}


export function getUserMenu(callback) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }

    request_security({
        url: "/user/menu",
        method: 'GET'
    }).then(response => {
        var data = setMenuFormat(response.data);
        localStorage.setItem(PRINCIPAL_MENU, JSON.stringify(data));
        callback(data);
    }).catch(error => {
        localStorage.setItem(PRINCIPAL_MENU, {});
        callback({});
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