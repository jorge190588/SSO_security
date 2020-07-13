const mapStateToProps = state => ({
    authenticated: state.security.authenticated,
});
export default mapStateToProps;
