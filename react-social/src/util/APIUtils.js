import { API_BASE_URL, ACCESS_TOKEN, MENU } from '../constants';

const request = (options) => {
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
};

export function getUserProfile() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/view",
        method: 'GET'
    });
}

export function getUserMenu(callback) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    request({
        url: API_BASE_URL + "/user/menu",
        method: 'GET'
    }).then(response => {
        var res = response.data.reduce((res, { formGroup, id,name, path, showInMenu  }) => {
            if (formGroup.showInMenu){
                if (!res[formGroup.name]){
                    res[formGroup.name]=[];
                    res[formGroup.name].push({id: 0, name: formGroup.name, path:path});
                }
                if (showInMenu)
                    res[formGroup.name].push({id:id, name:name, path: path});
            }
            return res;
        }, {});

        localStorage.setItem(MENU, res);
        callback(res);
    }).catch(error => {
        localStorage.setItem(MENU, '');
        callback({});
    });;
}

export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}

export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/auth/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}