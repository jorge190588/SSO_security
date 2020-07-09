import ApiGenericServicesData from 'services/ApiGenericServicesData';
import UserSecurity from 'services/UserSecurity';

class ApiServices{
    constructor(){
        this.formGroup = new ApiGenericServicesData("formGroup");
        this.form = new ApiGenericServicesData("form");
        this.system = new ApiGenericServicesData("system");
        this.company = new ApiGenericServicesData("company");
        this.action = new ApiGenericServicesData("action");
        this.method = new ApiGenericServicesData("method");
        this.formAction = new ApiGenericServicesData("formAction");
        this.rol= new ApiGenericServicesData("rol");
        this.rolFormAction= new ApiGenericServicesData("rolFormAction");
        this.userSecurity=new UserSecurity();
    }
}
 
export default new ApiServices();

