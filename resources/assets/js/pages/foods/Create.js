import React, { Component } from "react";
import { connect } from "react-redux";
import { getProfile, logoutSuccess } from '@/actions/AuthActions';

import Header from "../../components/layouts/Header";
import SubHeader from "../../components/layouts/SubHeader";
import Form from "../../components/food/Form";

class Create extends Component {
    constructor(props) {
        super (props);
    }

    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }

    render() {
        return (
            //submit properties
            <div>
                <Header title="Homemade - New food" auth={this.props.auth} logoutSuccess={this.props.logoutSuccess}/>
                <SubHeader title="New food"/>
                <div className="user-page submit-property content-area-7">
                    <div className="container">
                        <div className="row">
                            <Form {...this.props}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
};

function mapDispatchToProps(dispatch) {
    return {
        default: dispatch(getProfile()),
        logoutSuccess: () => dispatch(logoutSuccess())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);
