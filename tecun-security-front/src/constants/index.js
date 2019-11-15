export const APP_NAME = 'TRAZA_WEB';
export const API_BASE_URL_DATA = 'http://localhost:8080';
export const API_BASE_URL_SECURITY = 'http://localhost:8080';
export const ACCESS_TOKEN = 'accessToken';
export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect'

export const GOOGLE_AUTH_URL = API_BASE_URL_SECURITY + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = API_BASE_URL_SECURITY + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const GITHUB_AUTH_URL = API_BASE_URL_SECURITY + '/oauth2/authorize/github?redirect_uri=' + OAUTH2_REDIRECT_URI;