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
    SET_GRADE_DEGREE: (id,gradeGroup,degree,grade)=> dispatch({ "type":actionNames.SET_GRADE_DEGREE,
    "state":{"grade_degree_id":id,
            "gradeGroup":gradeGroup,
            "degree":degree,
            "grade": grade
        } 
    }),
    SET_COURSE: (id,name)=> dispatch({ "type":actionNames.SET_COURSE,
        "state":{"id":id,
                "name":name,
            } 
    }),
    SET_CONTENT_LIST: (id,name)=> dispatch({ "type":actionNames.SET_CONTENT_LIST,
        "state":{"id":id,
                "name":name,
            } 
    })
    
});
export default mapDispatchToProps;