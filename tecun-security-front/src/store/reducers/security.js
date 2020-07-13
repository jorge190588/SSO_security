const initialState={authenticated:false, currentUser:null,menu:[]};

const reducer = (state = initialState, action )=>{
    switch(action.type){
        case "SET_CURRENT_USER":
            var stateCurrentUser = Object.assign({}, state);
            stateCurrentUser.currentUser=action.state.currentUser;
            stateCurrentUser.authenticated=(action.state.currentUser===null || action.state.currentUser===undefined) ? false: true;
            return stateCurrentUser;
        case "SET_MENU":
            var stateMenu = Object.assign({}, state);
            stateMenu.menu=action.state.menu;
            return stateMenu;
        case "LOGOUT":
            var stateLogout = Object.assign({}, state);
            stateLogout.authenticated=false;
            stateLogout.currentUser=null;
            stateLogout.menu=[];
            return stateLogout;
        case "REGISTER":
            return state - 2;
        default:
            return state;
    }
}



export default reducer;