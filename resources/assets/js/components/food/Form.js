import React, { Component } from "react";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios/index";
import swal2 from "sweetalert2";

export default class Form extends Component {
    constructor (props) {
        super(props);
        this.state = {
            startDate: moment(),
            image: '',
            checkTerm: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.fileUpload = this.fileUpload.bind(this);
    }

    //upload image
    onFormSubmit(e){
        // e.preventDefault();
        this.fileUpload(this.state.image);
    }
    onChange(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) {
            console.log(1);
            return 1;
        }
        this.createImage(files[0]);
    }
    createImage(file) {
        let reader = new FileReader();
        reader.onload = (e) => {
            this.setState({
                image: e.target.result
            })
        };
        reader.readAsDataURL(file);
    }
    fileUpload(){
        let formData = new FormData();
        formData.set('file', this.state.image);
        console.log(formData);
        axios({
            method: 'post',
            url: '/api/food_images',
            data: formData,
            headers: {'Content-Type': 'multipart/form-data', Authorization: localStorage.b_token}
        })
            .then(response=>{
                console.log("created new images!");
            })
            .catch(error=>console.log("create image: error!"));
    }

    //datepicker
    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    //checkbox term
    handleCheckbox() {
        if (this.state.checkTerm){
            this.setState({checkTerm: false})
        }
        else {
            this.setState({checkTerm: true})
        }
    }

    //post new food + new transaction
    createNewFood (newFood) {
        if (this.refs.foodName.value === '' || this.refs.price.value === '' || this.refs.description.value === '' || !this.state.checkTerm || this.state.image === '') {
            if (this.state.checkTerm) {
                swal2({
                    type: 'warning',
                    title: 'Please fill all information before create a transaction',
                    showConfirmButton: false,
                    heightAuto: true,
                    width: "auto",
                    timer: 2200
                });
            }
            if (this.state.image === '') {
                swal2({
                    type: 'warning',
                    title: "Please fill choose your food's image before create a transaction",
                    showConfirmButton: false,
                    heightAuto: true,
                    width: "auto",
                    timer: 2200
                });
            }
            else {
                swal2({
                    type: 'warning',
                    title: 'Please confirm terms before create a transaction',
                    showConfirmButton: false,
                    heightAuto: true,
                    width: "auto",
                    timer: 2200
                });
            }
        }
        else {
            newFood.set('category_id', this.refs.category.value);
            newFood.set('name', this.refs.foodName.value);
            newFood.set('price', this.refs.price.value);
            newFood.set('description', this.refs.description.value);
            newFood.set('like', 0);
            newFood.set('dislike', 0);
            newFood.set('publish', 1);
            newFood.set('status', 'cooked');
            newFood.set('desired_time', this.state.startDate);
            newFood.set('quantity', this.refs.quantity.value);

            const address = this.refs.address.value === ''? this.props.auth.user.address : this.refs.address.value;
            const email = this.refs.email.value === ''? this.props.auth.user.email : this.refs.email.value;
            const phone = this.refs.phone.value === ''? this.props.auth.user.phone : this.refs.phone.value;
            const description = 'Address: ' + address + '<br/>' + 'Email: '+ email + '<br/>' +'Phone: '+ phone;
            newFood.set('descriptionTransaction', description);
            axios({
                method: 'post',
                url: '/api/foods',
                data: newFood,
                headers: {'Content-Type': 'multipart/form-data', Authorization: localStorage.b_token}
            })
                .then(response=>{
                    console.log("created new food!");
                })
                .catch(error=>console.log("create food: error!"));
            this.onFormSubmit();
        }
    }

    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }

    render() {
        let newFood = new FormData();
        let newTransaction = new FormData();
        if (this.props.auth.isAuth) {
            const userData = this.props.auth.user;
            newFood.set('cooked_id', userData.id);
            newTransaction.set('cooked_id', userData.id);
            return (
                <div className="col-lg-12">
                    <div className="notification-box mb-60">
                        <h3>Sell a food</h3>
                        <p>Please fill all information before create a transaction</p>
                    </div>

                    <div className="search-area contact-2">
                        <div className="search-area-inner">
                            <div className="search-contents ">
                                <form>
                                    <h3 className="heading">Food's Information</h3>
                                    <div className="row mb-50">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Food name</label>
                                                <input type="text" name="food name" className="form-control" placeholder="Food name" ref="foodName"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Category</label>
                                                <select className="search-fields" name="Category" ref="category">
                                                    <option value={1}>Hải sản</option>
                                                    <option value={2}>Thịt</option>
                                                    <option value={3}>Canh</option>
                                                    <option value={4}>Cơm</option>
                                                    <option value={5}>Gà</option>
                                                    <option value={6}>Phở</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <div className="form-group">
                                                <label>Quantity (max quantities is 4)</label>
                                                <input type="number" name="quantity" className="form-control" placeholder="Quantity" ref="quantity" max={4} min={1}/>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <div className="form-group">
                                                <label>Price</label>
                                                <input type="number" name="price" className="form-control" placeholder="Price" ref="price"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <div className="form-group">
                                                <label>Time</label>
                                                <DatePicker className="datepicker"
                                                            dateFormat="LLL"
                                                            selected={this.state.startDate}
                                                            onChange={this.handleChange}
                                                            showTimeSelect
                                                            timeFormat="HH:MM"
                                                            timeIntervals={60}
                                                            timeCaption="time"
                                                            ref="time"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Description</label>
                                                <textarea className="form-control" name="description" placeholder="Food's description" ref="description" ></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="heading">Food's photos</h3>
                                    <div className="row mb-50">
                                        <div className="col-lg-12">
                                            <input type="file" onChange={this.onChange}/>
                                        </div>
                                    </div>

                                    <h3 className="heading">Cooker's information</h3>
                                    <div className="row mb-50">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input type="text" name="name" className="form-control name" style={{backgroundColor: '#eeeeee'}} placeholder={userData.name} ref="userName" disabled/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input type="email" name="email" className="form-control" placeholder={userData.email} ref="email" value=''/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Address</label>
                                                <input type="text" name="address" className="form-control" placeholder={userData.address} ref="address" value=''/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Phone number</label>
                                                <input type="text" name="phone" className="form-control" placeholder={userData.phone} ref="phone" value=''/>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="heading">Terms</h3>
                                    <div className="row mb-50">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <div className="form-check checkbox-theme">
                                                    <input className="form-check-input" onClick={()=>this.handleCheckbox()} type="checkbox" id="term" ref="term"/>
                                                    <label className="form-check-label" htmlFor="term">
                                                        I have read and accepted the <a href="#">terms of service</a>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <div className="send-btn">
                                        <button  type="submit" className="btn btn-color btn-md btn-message" onClick={()=>this.createNewFood(newFood)} >
                                            Create Food
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
