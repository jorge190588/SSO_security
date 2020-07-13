import {actionNames} from 'constants/index';
const actions = {};

actions.SET_CURRENT_USER =(state)=>{
    return { type:actionNames.SET_CURRENT_USER, state};
}
actions.SET_MENU =(state)=>{
    return { type:actionNames.SET_MENU, state};
}
actions.LOGOUT =(state)=>{
    return {type:actionNames.LOGOUT, state};
}
actions.REGISTER =(state)=>{
    return {type:actionNames.REGISTER,state};
}

export default actions;


