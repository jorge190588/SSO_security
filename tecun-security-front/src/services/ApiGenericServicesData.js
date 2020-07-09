import ApiGenericServices from 'services/ApiGenericServices';
import { request_data  } from 'services/Api';

export default class ApiGenericServicesData extends ApiGenericServices{
    constructor(moduleName){
        super(moduleName,request_data);
    }
}