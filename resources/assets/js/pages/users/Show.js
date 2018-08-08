import React, { Component } from "react";
import { connect } from "react-redux";
import { getProfile, updateProfile, logoutSuccess } from '@/actions/AuthActions';
import { getUser } from '@/actions/UsersActions';

import Header from "@/components/layouts/Header";
import SubHeader from "@/components/layouts/SubHeader";
import Footer from "@/components/layouts/Footer";
import LeftSide from "@/components/user/LeftSide";
import FormShow from "@/components/user/rightSide/FormShow";
import FormEdit from "@/components/user/rightSide/FormEdit";
import CookedFoods from "@/components/user/rightSide/CookedFoods";
import FavoritedFoods from "@/components/user/rightSide/FavoritedFoods";
import LikedFoods from "@/components/user/rightSide/LikedFoods";
import Certificate from "@/components/user/rightSide/Certificate";
import ChangePassword from "@/components/user/rightSide/ChangePassword";
const queryString = require('query-string');

class Show extends Component {
    constructor(props) {
        super(props);
        this.state={
            is_my_profile: false,
            param_user_id: this.props.match.params.id,
            tab: this.props.location.hash ? this.props.location.hash.substr(1):"profile"
        };
        this.switchRightSide = this.switchRightSide.bind(this);
        this.props.getUser(this.state.param_user_id);
    }
    componentWillReceiveProps(nextProps) {
        this.props = nextProps;

        if (this.props.auth.isAuth) {
            if (this.props.auth.user.id == this.state.param_user_id) {
                this.setState({
                    is_my_profile: true
                })
            }
            this.setState({
                renderLeftSide: <LeftSide is_my_profile={this.state.is_my_profile} user={this.props.auth.user} switchRightSide={this.switchRightSide} />
            })
        } else {
            this.setState({
                renderLeftSide: <LeftSide is_my_profile={this.state.is_my_profile} user={this.props.user} switchRightSide={this.switchRightSide} />
            })
        }
        this.switchRightSide(this.state.tab);
    }
    switchRightSide(tab) {
        this.setState({tab});
        $(".user-profile-box .leftside-active").removeClass("active");
        $(".user-profile-box ."+this.state.tab).addClass("active");

        switch(this.state.tab) {
            case "cooked-foods": {
                this.setState({
                    renderRightSide: <CookedFoods is_my_profile={this.state.is_my_profile} user_id={this.props.user.id} />
                })    
                return;
            }
            case "favorited-foods": {
                this.setState({
                    renderRightSide: <FavoritedFoods is_my_profile={this.state.is_my_profile} user_id={this.props.user.id} />
                })    
                return;
            }
            case "liked-foods":{
                this.setState({
                    renderRightSide: <LikedFoods is_my_profile={this.state.is_my_profile} user_id={this.props.user.id} />
                }) 
                return;
            }
            case "certificate":{
                this.setState({
                    renderRightSide: <Certificate auth={this.props.auth} />
                })
                return;
            }
            case "change-password":{
                this.setState({
                    renderRightSide: <ChangePassword auth={this.props.auth} />
                }) 
                return;
            }
            default: {
                $(".user-profile-box .profile").addClass("active");
                if (this.state.is_my_profile) {
                    this.setState({
                        renderRightSide: <FormEdit user={this.props.auth.user} updateProfile={this.props.updateProfile} />
                    })    
                } else {
                    this.setState({
                        renderRightSide: <FormShow user={this.props.user} />
                    })
                }
                return;
            }
        }
    }
    render() {
        return (
            <div>
                <Header auth={this.props.auth} logoutSuccess={this.props.logoutSuccess} />
                <SubHeader title={"Profile"}/>
                <div id="profile"></div>
                <div id="cooked-foods"></div>
                <div id="favorited-foods"></div>
                <div id="liked-foods"></div>
                <div id="certificate"></div>
                <div id="change-password"></div>
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

function mapStateToProps(state) {
    return {
        auth: state.auth,
        user: state.user
    };
};

function mapDispatchToProps(dispatch) {
    return {
        default: dispatch(getProfile()),
        getUser: (user_id) => dispatch(getUser(user_id)),
        updateProfile: (user) => dispatch(updateProfile(user)),
        logoutSuccess: () => dispatch(logoutSuccess()) // header
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Show);