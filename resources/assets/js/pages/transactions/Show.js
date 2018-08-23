import React, { Component } from "react";
import { connect } from "react-redux";
import { getProfile, logoutSuccess } from '@/actions/AuthActions';
import { getTransaction, updateTransaction } from "@/actions/TransactionActions";

import Header from "../../components/layouts/Header";
import SubHeader from "../../components/layouts/SubHeader";
import Footer from "../../components/layouts/Footer";

import TransactionDetailHead from "@/components/transaction/TransactionDetailHead";
import FoodImagesSlider from "@/components/food/FoodImagesSlider";
import TransactionDetailTabbing from "@/components/transaction/TransactionDetailTabbing";
import DealsListMedium from "@/components/deals/DealsListMedium";

import UserItemMedium from "@/components/user/rightSide/UserItemMedium";

class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transaction_id: this.props.match.params.id
        }
        // this.getTransactionsPaging = this.getTransactionsPaging.bind(this);
        this.updateTransaction = this.updateTransaction.bind(this);
        this.props.dispatchGetTransaction(this.state.transaction_id);
    }
    updateTransaction(transaction) {
        console.log("transaction");
        this.props.dispatchUpdateTransaction(transaction);
    }
    render() {
        let transaction = this.props.transaction_show.data;
        let is_my_transaction;
        if (this.props.auth.user.id == transaction.creator_id) {
            is_my_transaction = true;
        } else {
            is_my_transaction = false;
        }
        let is_my_shipping_transaction;
        if (this.props.auth.user.id == transaction.shipper_id) {
            is_my_shipping_transaction = true;
        } else {
            is_my_shipping_transaction = false;
        }
        console.log(transaction);

        return (
            <div>
                <div>
                    <Header title="Transaction's Info" auth={this.props.auth} logoutSuccess={this.props.logoutSuccess} />
                    <SubHeader title="Transaction's Info"/>
                    <div className="user-page submit-property content-area-7">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    {transaction && <TransactionDetailHead auth={this.props.auth} transaction={transaction} />}
                                    {transaction.food && transaction.food.images && <FoodImagesSlider auth={this.props.auth} images={transaction.food.images} />}
                                    {
                                        transaction && 
                                        <TransactionDetailTabbing auth={this.props.auth} 
                                            transaction={transaction} 
                                            updateTransaction={updateTransaction} 
                                            is_my_transaction ={is_my_transaction} 
                                            is_my_shipping_transaction={is_my_shipping_transaction} 
                                        />
                                    }
                                </div>
                                <div className="col-lg-4">
                                    {transaction.requirer && <UserItemMedium title="Requirer's Infomation" user={transaction.requirer}/>}
                                    {transaction.cooker && <UserItemMedium title="Cooker's Infomation" user={transaction.cooker}/>}
                                    {transaction.shipper && <UserItemMedium title="Shipper's Infomation" user={transaction.shipper}/>}
                                </div>
                            </div>
                            <div className="row">
                                {transaction.deals && <DealsListMedium auth={this.props.auth} transaction={transaction} updateTransaction={updateTransaction} is_my_transaction={is_my_transaction} deals={transaction.deals} />}
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
        transaction_show: state.transaction.show
    };
};

function mapDispatchToProps(dispatch) {
    return {
        default: dispatch(getProfile()),
        logoutSuccess: () => dispatch(logoutSuccess()),
        dispatchGetTransaction: (id) => dispatch(getTransaction(id)),
        dispatchUpdateTransaction: (transaction) => dispatch(UpdateTransaction(transaction))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Show);