import { request_data } from 'services/Api';
import { ACCESS_TOKEN } from '../constants';

const moduleName="element";

export function listRegister() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }

    return request_data({
        url: "/"+moduleName+"/list",
        method: 'GET'
    });
}
 
export function createRegister(data) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }
    return request_data({
        url: "/"+moduleName+"/create",
        method: 'POST',
        body: JSON.stringify(data)
    });
}

export function updateRegister(data) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }
    return request_data({
        url: "/"+moduleName+"/update",
        method: 'PUT',
        body: JSON.stringify(data)
    });
}

export function deleteRegister(params) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }
    
    return request_data({
        url: "/"+moduleName+"/delete/"+params.id,
        method: 'DELETE'
    });
}