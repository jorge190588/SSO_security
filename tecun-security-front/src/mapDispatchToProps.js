import {actionNames} from 'constants/index';
const mapDispatchToProps = dispatch => ({
    SET_MENU: (menu)=> dispatch({ "type":actionNames.SET_MENU,
                                        "state":{"menu":menu,
                                                } 
                                    }),
    SET_CURRENT_USER: (currentUser)=> dispatch({ "type":actionNames.SET_CURRENT_USER,
                                    "state":{"currentUser":currentUser,
                                            } 
                                }),
});
export default mapDispatchToProps;