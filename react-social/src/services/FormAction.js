import { request_security } from 'services/Api';
import { ACCESS_TOKEN } from '../constants';

const moduleName="formAction";

export function getFormActionList() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }

    return request_security({
        url: "/"+moduleName+"/list",
        method: 'GET'
    });
}


export function getFormActionByRolIdList(rol_id) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("Acceso denegado");
    }

    return request_security({
        url: "/"+moduleName+"/listByRolId?rol_id="+rol_id,
        method: 'GET'
    });
}
 