import React, { Component } from "react";

export default class TrCookedFood extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleChangePublish = this.handleChangePublish.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }
    handleChangePublish(food_id) {
        // $('.check-input-change-publish-food-'+food_id).attr("checked", !$('.check-input-change-publish-food-'+food_id).val());
        this.props.updateFood({
            id: food_id,
            publish: $('.check-input-change-publish-food-'+food_id) ? 0:1
        })
    }
    render() {
        let is_my_food = this.props.is_my_food;
        return (
            <tr>
                <td className="image">
                    <a href={"/foods/"+this.props.food.id}><img alt={this.props.food.name + " feature_image"} src={this.props.food.feature_image.link} className="img-fluid"/></a>
                </td>
                <td>
                    <div className="inner">
                        <a href={"/foods/"+this.props.food.id}><h2>{this.props.food.name}</h2></a>
                        <div className="tag price">{this.props.food.price} Đ</div>
                    </div>
                </td>
                <td>{this.props.food.updated_at}</td>
                <td>{this.props.food.like}</td>
                {
                    is_my_food && 
                    <td className="actions ">
                        <div className="form-check checkbox-theme margin-top-15 margin-left-25">
                            <input className={"form-check-input check-input-change-publish-food-"+this.props.food.id} onClick={(food_id)=>this.handleChangePublish(this.props.food.id)} type="checkbox" id={this.props.food.id} defaultChecked={this.props.food.publish ? true:false}/>
                            <label className="form-check-label" htmlFor={this.props.food.id}></label>
                        </div>
                    </td>
                }
                {
                    is_my_food && 
                    <td>
                        <a href={"/foods/" + this.props.food.id +"/edit"} className="edit"><i className="fa fa-pencil"></i>Edit</a>
                    </td>
                }
            </tr>
        )
    }
}
