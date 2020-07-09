import ApiGenericServices from 'services/ApiGenericServices';
import { request_security  } from 'services/Api';

export default class ApiGenericServicesSecurity extends ApiGenericServices{
    constructor(moduleName){
        super(moduleName,request_security);
    }
}