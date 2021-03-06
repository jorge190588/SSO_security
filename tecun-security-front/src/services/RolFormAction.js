import { request_security } from 'services/Api';
import { ACCESS_TOKEN } from '../constants';

const moduleName="rolFormAction";

export function getRolFormActionList() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }

    return request_security({
        url: "/"+moduleName+"/list",
        method: 'GET',
    });
}

export function getRolFormActionListByRolId(rol_id) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }

    return request_security({
        url: "/"+moduleName+"/list/"+rol_id,
        method: 'GET'
    });
}


export function createRolFormAction(data) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }
    return request_security({
        url: "/"+moduleName+"/create",
        method: 'POST',
        body: JSON.stringify(data)
    });
}



export function deleteRolFormAction(params) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }
    return request_security({
        url: "/"+moduleName+"/delete/"+params.form_action_id+"/"+params.rol_id,
        method: 'DELETE'
    });
}