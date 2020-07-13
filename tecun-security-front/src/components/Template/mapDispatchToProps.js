import {actionNames} from 'constants/index';
const mapDispatchToProps = dispatch => ({
    LOGOUT: ()=> dispatch({ "type":actionNames.LOGOUT,"state":{} }),
});
export default mapDispatchToProps;