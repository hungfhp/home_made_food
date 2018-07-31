import React, { Component } from "react";
import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";
import LeftSide from "../../components/user/LeftSide";
import FormShow from "../../components/user/rightSide/FormShow";
import FormEdit from "../../components/user/rightSide/FormEdit";
import CookedFoods from "../../components/user/rightSide/CookedFoods";
import FavoritedFoods from "../../components/user/rightSide/FavoritedFoods";
import LikedFoods from "../../components/user/rightSide/LikedFoods";

export default class Show extends Component {
    constructor(props) {
        super(props);
        this.state={
            user: {},
            userId: this.props.match.params.id
        };
    }
    componentDidMount() {
        // let seft = this;
        axios.get("/api/users/" + this.state.userId)
            .then(res => {
                this.setState({
                    user: res.data.data
                })
                this.setState({
                    renderLeftSide: <LeftSide user={this.state.user} />
                })
                if (localStorage.getItem("loggedIn") && localStorage.getItem("userId") == this.state.userId) {
                    this.setState({
                        renderRightSide: <FormEdit user={this.state.user} />
                    })    
                } else {
                    this.setState({
                        renderRightSide: <FormShow user={this.state.user} />
                    })
                }
            }).catch(err =>{
                console.error(err);
            })

            console.log(this.state.user)
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
