export const APP_NAME = process.env.REACT_APP_SECRET_NAME;
export const API_BASE_URL_DATA = process.env.REACT_APP_API_BACKEND;
export const API_BASE_URL_SECURITY = process.env.REACT_APP_API_SSO;
export const ACCESS_TOKEN = 'accessToken';
export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect'

export const GOOGLE_AUTH_URL = API_BASE_URL_SECURITY + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = API_BASE_URL_SECURITY + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const GITHUB_AUTH_URL = API_BASE_URL_SECURITY + '/oauth2/authorize/github?redirect_uri=' + OAUTH2_REDIRECT_URI;
