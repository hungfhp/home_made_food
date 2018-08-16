import React, { Component } from "react";
import { connect } from "react-redux";
import { getProfile, logoutSuccess } from '@/actions/AuthActions';

import Header from "../../components/layouts/Header";
import SubHeader from "../../components/layouts/SubHeader";
import Footer from "../../components/layouts/Footer";
import Total from "../../components/transaction/Total";
import List from "../../components/transaction/List";
import axios from "axios";
import ModalFood from "../../components/transaction/ModalFood";

class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: localStorage.user_id,
            HistoryData: [],
            DataInfo: 0
        };
    }

    componentDidMount() {
        axios.get('/api/transactions/transactionHistory/' + this.state.userId)
            .then(
                response=>{
                    this.setState({HistoryData: response.data.data.data});
                    console.log(response.data.data.data);
                }
            ).catch(
                error=>console.log('Transaction history: error!')
        )
    }

    render() {
        return (
            <div>
                <Header title="Homemade - Transaction history" auth={this.props.auth} logoutSuccess={this.props.logoutSuccess} />
                <SubHeader title="Homemade - Transaction history"/>
                <div className="user-page submit-property content-area-7">
                    <div className="container">
                        <div className="row">
                            <List HistoryData={this.state.HistoryData}/>
                            <Total/>
                        </div>
                    </div>
                </div>
                <Footer/>
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

export default connect(mapStateToProps, mapDispatchToProps)(History);
