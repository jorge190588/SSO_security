import { request_security } from 'services/Api';
import { ACCESS_TOKEN } from '../constants';

const moduleName="rol";
export function getRolList() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }

    return request_security({
        url: "/"+moduleName+"/list",
        method: 'GET'
    });
}
 
export function createRol(data) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }
    return request_security({
        url: "/"+moduleName+"/create",
        method: 'POST',
        body: JSON.stringify(data)
    });
}

export function updateRol(data) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }
    return request_security({
        url: "/"+moduleName+"/update",
        method: 'PUT',
        body: JSON.stringify(data)
    });
}


export function deleteRol(params) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }
    return request_security({
        url: "/"+moduleName+"/delete/"+params.id,
        method: 'DELETE'
    });
}