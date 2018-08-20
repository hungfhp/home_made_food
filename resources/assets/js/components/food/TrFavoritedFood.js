import React, { Component } from "react";

const styleIconFavorite = {
    color: "red",
    cursor: "pointer",
    fontWeight: "bolder"
}

export default class TrFavoritedFood extends Component {
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

    }
    render() {
        let food = this.props.favorited_food.food;
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
                <td>{this.props.favorited_food.updated_at}</td>
                <td>{food.like}</td>
                <td></td>
                <td className="actions ">
                    <i className="material-icons favourite" title="Favourite" style={styleIconFavorite}>favorite_border</i>
                </td>
            </tr>
        )
    }
}
