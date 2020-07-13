//import { request_data,request_security } from 'services/Api';
import { ACCESS_TOKEN } from '../constants';
import SearchCriteriaClass from 'services/SearchCriteriaClass'; 
import OrderCriteriaClass from 'services/OrderCriteriaClass'; 

export default class ApiGenericServices{
    constructor(moduleName,request){
        this.moduleName=moduleName;
        this.searchCriteria = new SearchCriteriaClass();
        this.initSearchCriteria = new SearchCriteriaClass();
        this.orderCriteria = new OrderCriteriaClass();
        this.initOrderCriteria = new OrderCriteriaClass();
        this.request= request;
    }

    pageRegister(page,size) {
        if(!localStorage.getItem(ACCESS_TOKEN)) {
            return Promise.reject("Acceso denegado");
        }
           
        let searchCriteriaParam =    (this.searchCriteria!== undefined)   ? "searchCriteria="+encodeURIComponent(JSON.stringify(this.searchCriteria.get())) : null;
        let orderCriteriaParam =     (this.orderCriteria!== undefined)    ? "orderCriteria="+encodeURIComponent(JSON.stringify(this.orderCriteria.get())) : null;
        let url = "/"+this.moduleName+"/list/"+page+"/"+size+"?"+searchCriteriaParam+"&"+orderCriteriaParam;
        
        return this.request({
            url: url,
            method: 'GET'
            });
    }

    listRegisterCriteria() {
        if(!localStorage.getItem(ACCESS_TOKEN)) {
            return Promise.reject("Acceso denegado");
        }
       
        let searchCriteriaParam =    (this.searchCriteria!== undefined)   ? "searchCriteria="+encodeURIComponent(JSON.stringify(this.searchCriteria.get())) : null,
            orderCriteriaParam =     (this.orderCriteria!== undefined)    ? "orderCriteria="+encodeURIComponent(JSON.stringify(this.orderCriteria.get())) : null;
        let url = "/"+this.moduleName+"/list?"+searchCriteriaParam+"&"+orderCriteriaParam;
    
        return this.request({
            url: url,
            method: 'GET'
        });
    }  
    
    listRegister() {
        if(!localStorage.getItem(ACCESS_TOKEN)) {
            return Promise.reject("Acceso denegado");
        }
    
        return this.request({
            url: "/"+this.moduleName+"/list",
            method: 'GET'
        });
    }

    createRegister(data) {
        if(!localStorage.getItem(ACCESS_TOKEN)) {
            return Promise.reject("Acceso denegado");
        }
        return this.request({
            url: "/"+this.moduleName+"/create",
            method: 'POST',
            body: JSON.stringify(data)
        });
    }
    
    updateRegister(data) {
        if(!localStorage.getItem(ACCESS_TOKEN)) {
            return Promise.reject("Acceso denegado");
        }
        return this.request({
            url: "/"+this.moduleName+"/update",
            method: 'PUT',
            body: JSON.stringify(data)
        });
    }
    
    deleteRegister(params) {
        if(!localStorage.getItem(ACCESS_TOKEN)) {
            return Promise.reject("Acceso denegado");
        }
        
        return this.request({
            url: "/"+this.moduleName+"/delete/"+params.id,
            method: 'DELETE'
        });
    }
    
    enableRegister(params) {
        if(!localStorage.getItem(ACCESS_TOKEN)) {
            return Promise.reject("Acceso denegado");
        }
        
        return this.request({
            url: "/"+this.moduleName+"/enable/"+params.id,
            method: 'PATCH'
        });
    }
    
    disableRegister(params) {
        if(!localStorage.getItem(ACCESS_TOKEN)) {
            return Promise.reject("Acceso denegado");
        }
        
        return this.request({
            url: "/"+this.moduleName+"/disable/"+params.id,
            method: 'PATCH'
        });
    }

    customGET(methodName) {
        if(!localStorage.getItem(ACCESS_TOKEN)) {
            return Promise.reject("Acceso denegado");
        }
        let searchCriteriaParam =    (this.searchCriteria!== undefined)   ? "searchCriteria="+encodeURIComponent(JSON.stringify(this.searchCriteria.get())) : null;
        let orderCriteriaParam =     (this.orderCriteria!== undefined)    ? "orderCriteria="+encodeURIComponent(JSON.stringify(this.orderCriteria.get())) : null;
        let url = "/"+this.moduleName+"/"+methodName+"?"+searchCriteriaParam+"&"+orderCriteriaParam;

        return this.request({
            url: url,
            method: 'GET'
        });
    }
 
    customPUT(methodName) {
        if(!localStorage.getItem(ACCESS_TOKEN)) {
            return Promise.reject("Acceso denegado");
        }
    
        return this.request({
            url: "/"+this.moduleName+"/"+methodName,
            method: 'PUT'
        });
    }

    customPOST(methodName,data) {
        if(!localStorage.getItem(ACCESS_TOKEN)) {
            return Promise.reject("Acceso denegado");
        }
    
        return this.request({
            url: "/"+this.moduleName+"/"+methodName,
            method: 'POST',
            body: JSON.stringify(data)
        });
    }

    customPATCH(methodName,data) {
        if(!localStorage.getItem(ACCESS_TOKEN)) {
            return Promise.reject("Acceso denegado");
        }

        return this.request({
            url: "/"+this.moduleName+"/"+methodName,
            method: 'PATCH',
            body: JSON.stringify(data)
        });
    }
}



