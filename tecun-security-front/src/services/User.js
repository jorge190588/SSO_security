
import ApiGenericServicesData from 'services/ApiGenericServicesData';

export default class User extends ApiGenericServicesData{
    constructor(){
        super("user");
    }
        
    changePassword(data) {
        return this.customPATCH("changePassword",data);
    }

    findByUserId(){
        return this.customGET("findByUserId");
    }

     
}