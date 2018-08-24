import React, { Component } from "react";
import axios from "axios";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import swal2 from "sweetalert2";

export default class TransactionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: moment(),
            foodId: this.props.match.params.id,
            foodInfo: 0,
            quantity: 0
        };
        this.handleChange = this.handleChange.bind(this);
    }

    //datepicker
    handleChange(date) {
        console.log(date['_d']);
        this.setState({
            startDate: date
        });
    }

    createNewTransaction(data) {
        data.set('description', this.refs.note.value);
        data.set('address_to', this.refs.address.value);
        data.set('desired_at', this.state.startDate);
        data.set('quantity', this.refs.quantity.value);
        axios({
            method: 'post',
            url: '/api/transactions',
            data: data,
            headers: {'Content-Type': 'multipart/form-data', Authorization: localStorage.b_token}
        })
            .then(response=>{
                console.log("created new transaction!");
                swal2({
                    type: 'success',
                    title: 'Successfully created new transaction!',
                    showConfirmButton: false,
                    heightAuto: true,
                    width: "auto",
                    timer: 2200
                });
                this.props.history.push('/home');

            })
            .catch(error=>{
                console.log("create transaction: error!");
                swal2({
                    type: 'error',
                    title: 'Fail to create new food!',
                    showConfirmButton: false,
                    heightAuto: true,
                    width: "auto",
                    timer: 2200
                });
            });
    }

    componentDidMount() {
        axios.get('/api/foods/'+this.state.foodId)
            .then(
                response=>{
                    this.setState({foodInfo: response.data.data});
                }
            )
            .catch(
                error=>console.log('foods/:id error!')
            )
    }

    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }

    render() {
        if (this.state.foodInfo !== 0) {
            let newTransaction = new FormData();
            const foodInfo = this.state.foodInfo[0];
            const image = this.state.foodInfo['feature_image'];
            const userInfo = this.props.auth.user;

            newTransaction.set('food_id', foodInfo.id);
            newTransaction.set('creator_id', userInfo.id);
            newTransaction.set('requirer_id', userInfo.id);
            newTransaction.set('status', 'dealing');
            newTransaction.set('price', foodInfo.price);
            console.log(this.state.foodInfo);
            return (
                <div className="row">
                    <div className="col-lg-6">
                        <form>
                            <div className="heading-2">
                                <h4>Food's information</h4>
                            </div>
                            <div className="col-md-12">
                                <img src={image.link} style={{width: '500px'}}/>
                                <div className="form-group">
                                    <label>Food name</label>
                                    <input type="text" name="food name" className="form-control" value={foodInfo.name} ref="foodName" disabled/>
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    <input type="text" name="description" className="form-control" value={foodInfo.description} ref="description" disabled/>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Price</label>
                                            <input type="number" name="price" className="form-control" placeholder="Price" ref="price" value={foodInfo.price} disabled/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Quantity (please choose number of food)</label>
                                            <select className="search-fields" name="Quantity" ref="quantity">
                                                <option value={1} defaultValue>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                                <option value={4}>4</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-6">
                        <div className="heading-2">
                            <h4>Require's information</h4>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="User's Name" defaultValue={userInfo.name} ref="username"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Address" defaultValue={userInfo.address} ref="address"/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email" defaultValue={userInfo.email} ref="email"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Phone" defaultValue={userInfo.phone} ref="phone"/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" placeholder="Note" ref="note"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="heading-2">
                            <h4>Terms</h4>
                        </div>
                        <div className="our-payment">
                            <div className="payment-box">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input"/>
                                    Direct Bank Transfer
                                </label>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cart-total-box bg-white">
                            <h5>Cart Totals</h5>
                            <hr/>
                            <ul>
                                <li>
                                    Price<span className="pull-right">{foodInfo.price}</span>
                                </li>
                                <li>
                                    Quantity<span className="pull-right">{this.refs.foodName}</span>
                                </li>
                            </ul>
                            <hr/>
                            <p className="mar-b-50">
                                Grand Total<span className="pull-right">{foodInfo.price}</span>
                            </p>
                            <br/>
                            <button className="btn btn-dark btn-block btn-md" type="submit">Back to home</button>
                            <button className="btn btn-color btn-block btn-md" type="submit" onClick={()=>this.createNewTransaction(newTransaction)}>Proceed To Checkout</button>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }
}
