import {actionNames} from 'constants/index';
const actions = {};

actions.SET_MENU_ITEM_GROUP =(state)=>{
    return { type:actionNames.SET_MENU_ITEM_GROUP, state};
}

actions.SET_MENU_ITEM =(state)=>{
    return { type:actionNames.SET_MENU_ITEM, state};
}

export default actions;


