import React, { Component } from "react";
import { connect } from "react-redux";
import { getProfile, logoutSuccess } from '@/actions/AuthActions';

import Header from "../../components/layouts/Header";
import SubHeader from "../../components/layouts/SubHeader";
import Footer from "../../components/layouts/Footer";
import Tool from "../../components/food/Tool";
import Detail from "../../components/food/Detail";
import axios from "axios";

class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodId: this.props.match.params.id,
            foodInfo: 0
        }
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

    render() {
        return (
            //properties detail 3
            <div>
                <Header title="Homemade - Product"  auth={this.props.auth} logoutSuccess={this.props.logoutSuccess} />
                <SubHeader title="Product"/>
                <div className="user-page submit-property content-area-7">
                    <div className="container">
                        <div className="row">
                            <Detail {...this.props} foodInfo={this.state.foodInfo} foodId={this.state.foodId}/>
                            <Tool/>
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
}

function mapDispatchToProps(dispatch) {
    return {
        default: dispatch(getProfile()),
        logoutSuccess: () => dispatch(logoutSuccess())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Show);
