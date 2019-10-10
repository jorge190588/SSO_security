import { request_security } from 'services/Api';
import { ACCESS_TOKEN } from '../constants';

const moduleName="formGroup";

export function getFormGroupList() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }

    return request_security({
        url: "/"+moduleName+"/list",
        method: 'GET'
    });
}
 
export function createFormGroup(data) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }
    return request_security({
        url: "/"+moduleName+"/create",
        method: 'POST',
        body: JSON.stringify(data)
    });
}

export function updateFormGroup(data) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }
    return request_security({
        url: "/"+moduleName+"/update",
        method: 'PUT',
        body: JSON.stringify(data)
    });
}

export function deleteFormGroup(params) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }
    
    return request_security({
        url: "/"+moduleName+"/delete/"+params.id,
        method: 'DELETE'
    });
}