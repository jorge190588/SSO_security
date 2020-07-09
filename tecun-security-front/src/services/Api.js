import { ACCESS_TOKEN, API_BASE_URL_SECURITY, API_BASE_URL_DATA } from '../constants';

export const request_data = (options) => {
    options.url= API_BASE_URL_DATA+ options.url;
    return getRequest(options);
};

export const request_security = (options) => {
    options.url= API_BASE_URL_SECURITY+ options.url;
    return getRequest(options);
};

function getRequest(options){

    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    
    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
}
