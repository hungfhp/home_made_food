import React, { Component } from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import {updateTransaction}  from '@/actions/TransactionActions';

class TransactionGridItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.getStatusStyle = this.getStatusStyle.bind(this);
        this.getActionButton = this.getActionButton.bind(this);
    }
    componentWillMount() {
    }
    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }
    getStatusStyle(status) {
        let style;
        switch (status) {
            case 'required': {
                style = {backgroundColor: '#c1751ae6', fontWeight: 'bold'};
                return style;
            }
            case 'cooked': {
                style = {backgroundColor: '#ea0000db', fontWeight: 'bold'};
                return style;
            }
            case 'dealed': {
                style = {backgroundColor: '#094801e8', fontWeight: 'bold'};
                return style;
            }
            default: {
                style = {backgroundColor: '#094801e8', fontWeight: 'bold'};
                return style;
            }
        }
    }
    getActionButton(status) {
        let transaction = this.props.transaction;
        let auth = this.props.auth;
        let style;
        switch (status) {
            case 'required': {
                style = {backgroundColor: '#ea0000db', fontWeight: 'bold', color: "aliceblue"};
                return <a href="javascript:void(0)" style={style} className="btn-read-more pull-right padding-bottom-4" onClick={()=>this.props.updateTransaction({...transaction, cooker_id: auth.user.id, status: "dealed"})}>Cook Now</a>;
            }
            case 'cooked': {
                style = {backgroundColor: '#c1751ae6', fontWeight: 'bold', color: "aliceblue"};
                return <a href="javascript:void(0)" style={style} className="btn-read-more pull-right padding-bottom-4" onClick={()=>this.props.updateTransaction({...transaction, requirer_id: auth.user.id, status: "dealed"})}>Require Now</a>;
            }
            case 'dealed': {
                style = {backgroundColor: '#094801e8', fontWeight: 'bold', color: "aliceblue"};
                return <a href="javascript:void(0)" style={style} className="btn-read-more pull-right padding-bottom-4" onClick={()=>this.props.updateTransaction({...transaction, shipper_id: auth.user.id, status: "shipping"})}>Ship Now</a>;
            }
            case 'shipping': {
                return <div/>
            }
        }
    }
    render() {
        let transaction;
        if (this.props.transaction_action && this.props.transaction_action.data.id == this.props.transaction.id) {
            transaction = this.props.transaction_action.data;
        } else {
            transaction = this.props.transaction;
        }

        let auth = this.props.auth;
        return (
            <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="blog-grid-box">
                    <div style={{backgroundImage: "url(" + transaction.food.feature_image.link + ")", height: "230px", backgroundPosition: "center", backgroundSize: "cover"}}></div>
                    <div className="detail">
                        <div className="date-box" style={this.getStatusStyle(transaction.status)}>
                            <h5>{transaction.status}</h5>
                        </div>                       
                        <h3>
                            {
                             transaction.price ? (<span className="price-text">{transaction.price} Đ</span>):(<span className="price-text">?</span>)   
                            }
                            <Link className="text-transform-uppercase hover-green-black" to={"/transactions/"+transaction.id}> - {transaction.food.name}</Link>
                        </h3>
                        <div className="post-meta">        
                            <Dealer transaction={transaction}/>
                        </div>
                        <p className="overflow-hidden height-100 text-overflow-ellipsis">{transaction.description}</p>
                            {this.getActionButton(transaction.status)}
                            <hr/>
                            <span><a href="#" className="margin-right-9 color-red-black"><i className="fa fa-thumbs-o-up"></i>{transaction.food.like}</a></span>
                            <span><a href="#" className="margin-right-9 color-red-black"><i className="fa fa-commenting-o"></i>{transaction.deals_count}</a></span>
                    </div>
                </div>
            </div>
        );
    }
}

class Dealer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }    
    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }
    render() {
        let transaction = this.props.transaction;
        if (transaction.requirer && transaction.cooker) {
            return (
                <div className="row">       
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <Link to={"/users/"+transaction.requirer.id} className="color-red-black"><i className="fa fa-user"></i> {transaction.requirer.name}</Link>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <Link to={"/users/"+transaction.cooker.id} className="color-red-black"><i className="fa fa-user"></i> {transaction.cooker.name}</Link>
                    </div>
                </div>
            )
        } else {
            if (transaction.requirer) {
                return (<Link to={"/users/"+transaction.requirer.id} className="color-red-black"><i className="fa fa-user"></i> {transaction.requirer.name}</Link>);
            }
            if (transaction.cooker) {
                return (<Link to={"/users/"+transaction.cooker.id} className="color-red-black"><i className="fa fa-user"></i> {transaction.cooker.name}</Link>);
            }
            else {
                return (<p>hello</p>);
            }
        }
    }
}

function mapStateToProps(state) {
    return {
        transaction_action: state.transaction
    };
};

function mapDispatchToProps(dispatch) {
    return {
        updateTransaction: (transaction) => dispatch(updateTransaction(transaction))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionGridItem);


