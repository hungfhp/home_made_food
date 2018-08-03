import React, { Component } from "react";
import Header from "../../components/layouts/Header";
import Subheader from "../../components/layouts/Subheader";
import Footer from "../../components/layouts/Footer";
import Tool from "../../components/food/Tool";
import Detail from "../../components/food/Detail";
import axios from "axios";

export default class Show extends Component {
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
                <Header title="Homemade - Product"/>
                <Subheader title="Product"/>
                <div className="user-page submit-property content-area-7">
                    <div className="container">
                        <div className="row">
                            <Detail foodInfo={this.state.foodInfo} foodId={this.state.foodId}/>
                            <Tool/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
