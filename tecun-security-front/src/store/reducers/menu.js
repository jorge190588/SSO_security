const initialState= {"item_index": 0, 
                    "item_group_index":0,
                    };

const reducer = (state = initialState, action )=>{
    switch(action.type){
        case "SET_MENU_ITEM_GROUP":
            var newStateItemGroup = Object.assign({}, state);
            newStateItemGroup.item_group_index=action.state.index;
            return newStateItemGroup;
        case "SET_MENU_ITEM":
            var newStateItem = Object.assign({}, state);
            newStateItem.item_index=action.state.index;
            return newStateItem;
        default:
            return state;
    }
}

export default reducer;