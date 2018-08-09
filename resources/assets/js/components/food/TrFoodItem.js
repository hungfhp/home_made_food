import React, { Component } from "react";
import axios from "axios";
import { withGoogleMap, GoogleMap } from "react-google-maps";
import {Link} from 'react-router-dom';


export default class TrFoodItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }
    render() {
        return (
            <tr>
                <td className="image">
                    <a href={"/foods/"+this.props.food.id}><img alt={this.props.food.name + " feature_image"} src={this.props.food.feature_image.link} className="img-fluid"/></a>
                </td>
                <td>
                    <div className="inner">
                        <a href={"/foods/"+this.props.food.id}><h2>{this.props.food.name}</h2></a>
                        <div className="tag price">Đ {this.props.food.price}</div>
                    </div>
                </td>
                <td>{this.props.food.updated_at}</td>
                <td>{this.props.food.like}</td>
                <td className="actions ">
                    <div className="form-check checkbox-theme margin-top-10">
                        <input className="form-check-input" type="checkbox" value="" id="audi"/>
                        <label className="form-check-label" for="audi"></label>
                    </div>
                </td>
                <td>
                    <a href={"/foods/" + this.props.food.id +"/edit"} className="edit"><i className="fa fa-pencil"></i>Edit</a>
                </td>
            </tr>
        )
    }
}
