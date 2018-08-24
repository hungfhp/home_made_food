import React, { Component } from "react";
import { connect } from "react-redux";
import { getProfile, logoutSuccess } from '@/actions/AuthActions';
import { getTransaction, updateTransaction } from "@/actions/TransactionActions";
import { createDeal, updateDeal } from "@/actions/DealActions";

import {alertWarning} from "@/utils/AlertUtil";
import {alertPleaseLogin} from "@/utils/AlertUtil";

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
        this.updateTransaction = this.updateTransaction.bind(this);
        this.createDeal = this.createDeal.bind(this);
        this.updateDeal = this.updateDeal.bind(this);
        this.props.dispatchGetTransaction(this.state.transaction_id);
    }
    updateTransaction(transaction) {
        if (this.props.auth.isAuth) {
            this.props.dispatchUpdateTransaction(transaction);
            this.props.dispatchGetTransaction(transaction.id);
        } else {
            alertPleaseLogin();
        }
    }
    createDeal(deal) {
        if (deal.comment == "") {
            alertWarning("Comment something !")
        }
        this.props.dispatchCreateDeal(deal);
        this.props.dispatchGetTransaction(this.state.transaction_id);
    }
    updateDeal(deal) {
        if (deal.comment == "") {
            alertWarning("Comment something !")
        }
        this.props.dispatchUpdateDeal(deal);
        this.props.dispatchGetTransaction(this.state.transaction_id);
    }
    render() {
        let auth=this.props.auth;
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

        let my_dealed = false;

        if (transaction.deals) {
            
            for (let i = 0; i < transaction.deals.length; i++) {
                let deal = transaction.deals[i];
                if (deal.user_id == auth.user.id) {
                    my_dealed = deal;
                }
            }
        }

        return (
            <div>
                <div>
                    <Header title="Transaction's Info" auth={auth} logoutSuccess={this.props.logoutSuccess} />
                    <SubHeader title="Transaction's Info"/>
                    <div className="user-page submit-property content-area-7">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    {transaction && <TransactionDetailHead auth={auth} transaction={transaction} />}
                                    {transaction.food && transaction.food.images && <FoodImagesSlider auth={auth} images={transaction.food.images} />}
                                    {
                                        transaction && 
                                        <TransactionDetailTabbing auth={auth} 
                                            transaction={transaction} 
                                            updateTransaction={this.updateTransaction} 
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
                                <div className="col-lg-8">
                                    {
                                        transaction.deals && 
                                        <DealsListMedium auth={auth} transaction={transaction} 
                                            updateTransaction={this.updateTransaction} 
                                            is_my_transaction={is_my_transaction} 
                                            deals={transaction.deals} 
                                            my_dealed={my_dealed} 
                                            createDeal={this.createDeal} 
                                            updateDeal={this.updateDeal} 
                                        />
                                    }
                                </div>
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
        transaction_show: state.transaction.show,
        my_deal: state.deal.show
    };
};

function mapDispatchToProps(dispatch) {
    return {
        default: dispatch(getProfile()),
        logoutSuccess: () => dispatch(logoutSuccess()),
        dispatchGetTransaction: (id) => dispatch(getTransaction(id)),
        dispatchUpdateTransaction: (transaction) => dispatch(updateTransaction(transaction)),
        dispatchCreateDeal: (deal) => dispatch(createDeal(deal)),
        dispatchUpdateDeal: (deal) => dispatch(updateDeal(deal))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Show);