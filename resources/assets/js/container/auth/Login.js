import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { login, profile } from '@/actions/AuthActions';
import Login from '@/pages/Login';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentWillMount() {
        this.renderForm();
    }
    render() {
       
    }
}
export default connect()(Login);
function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleLogin: () => dispatch(login())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
