const mapStateToProps = state => ({
        currentUser: state.security.currentUser,
        authenticated: state.security.authenticated,
    });

export default mapStateToProps;
