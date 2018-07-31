import React, { Component } from "react";
import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";
import LeftSide from "../../components/user/LeftSide";
import FormShow from "../../components/user/rightSide/FormShow";
import FormEdit from "../../components/user/rightSide/FormEdit";
import CookedFoods from "../../components/user/rightSide/CookedFoods";
import FavoritedFoods from "../../components/user/rightSide/FavoritedFoods";
import LikedFoods from "../../components/user/rightSide/LikedFoods";
const queryString = require('query-string');

export default class Show extends Component {
    constructor(props) {
        super(props);
        this.state={
            user: {},
            user_id: this.props.match.params.id,
            tab: queryString.parse(this.props.location.search).tab
        };
        this.switchRightSide = this.switchRightSide.bind(this);
        this.handleSubmitUpdate = this.handleSubmitUpdate.bind(this);
    }
    componentWillMount() {
        axios.get("/api/users/" + this.state.user_id, {
            headers: {
                Authorization: localStorage.getItem("b_token"),
                Accept :"application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
            .then(res => {
                this.setState({
                    user: res.data.data
                })
                this.setState({
                    renderLeftSide: <LeftSide user={this.state.user} switchRightSide={this.switchRightSide} />
                })
                this.switchRightSide(this.state.tab);
            }).catch(err =>{
                console.error(err);
            })
       
    }
    switchRightSide(tab) {
        this.state.tab = tab;
        $(".user-profile-box .leftside-active").removeClass("active");
        $(".user-profile-box ."+tab).addClass("active");

        switch(this.state.tab) {
            case "cooked-foods": {
                this.setState({
                    renderRightSide: <CookedFoods user_id={this.state.user_id} />
                })    
                return;
            }
            case "favorited-foods": {
                this.setState({
                    renderRightSide: <FavoritedFoods user_id={this.state.user_id} />
                })    
                return;
            }
            case "liked-foods":{
                this.setState({
                    renderRightSide: <LikedFoods user_id={this.state.user_id} />
                }) 
                return;
            }
            default: {
                $(".user-profile-box .profile").addClass("active");
                if (localStorage.getItem("logged_in") && localStorage.getItem("user_id") == this.state.user_id) {
                    this.setState({
                        renderRightSide: <FormEdit user={this.state.user} handleSubmitUpdate={this.handleSubmitUpdate} />
                    })    
                } else {
                    this.setState({
                        renderRightSide: <FormShow user={this.state.user} />
                    })
                }
                return;
            }
        }
    }
    handleSubmitUpdate(name, address, phone) {
        axios.put('/api/users/'+this.state.user_id,{
            name: name,
            address: address,
            phone: phone
        },{
            headers: {
                Authorization: localStorage.getItem("b_token"),
                Accept :"application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
    }
    render() {
        return (
            <div>
                <Header />
                <div className="user-page content-area-14">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-5 col-sm-12">
                                {this.state.renderLeftSide}
                            </div>
                            <div className="col-lg-8 col-md-7 col-sm-12">
                                {this.state.renderRightSide}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
