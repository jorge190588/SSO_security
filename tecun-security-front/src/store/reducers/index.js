import security from './security';
import menu from './menu';
import {combineReducers}  from 'redux';
const allReducers = combineReducers({
    security: security,
    menu: menu,
});

export default allReducers;