import React, { Component } from "react";

export default class TrLikedFood extends Component {
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
        // this.props.updateFood({
        //     id: food_id,
        //     like: $('.check-input-change-publish-food-'+food_id) ? 0:1
        // })
    }
    render() {
        let food = this.props.liked_food.food;
        return (
            <tr>
                <td className="image">
                    <a href={"/foods/"+food.id}><img alt={food.name + " feature_image"} src={food.feature_image.link} className="img-fluid"/></a>
                </td>
                <td>
                    <div className="inner">
                        <a href={"/foods/"+food.id}><h2>{food.name}</h2></a>
                        <div className="tag price">{food.price} Đ</div>
                    </div>
                </td>
                <td>{this.props.liked_food.updated_at}</td>
                <td>{food.like}</td>
                <td></td>
                <td className="actions ">
                    <i className="like-icon material-icons">thumb_up</i>
                </td>
            </tr>
        )
    }
}
