import { request_security } from 'services/Api';
import { ACCESS_TOKEN } from '../constants';

const moduleName="method";
export function getMethodList() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }

    return request_security({
        url: "/"+moduleName+"/list",
        method: 'GET'
    });
}
 
export function createMethod(data) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }
    return request_security({
        url: "/"+moduleName+"/create",
        method: 'POST',
        body: JSON.stringify(data)
    });
}

export function updateMethod(data) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }
    return request_security({
        url: "/"+moduleName+"/update",
        method: 'PUT',
        body: JSON.stringify(data)
    });
}


export function deleteMethod(params) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }
    return request_security({
        url: "/"+moduleName+"/delete/"+params.id,
        method: 'DELETE'
    });
}