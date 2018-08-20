import React, { Component } from "react";
import TrFavoritedFood  from "@/components/food/TrFavoritedFood";
import Pagination from "@/components/layouts/Pagination";

export default class FavoritedFoods extends Component {
    constructor(props) {
        super(props);
        this.state={};
        this.getFavoritedFoodsPaging = this.getFavoritedFoodsPaging.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }
    getFavoritedFoodsPaging(page) {
        this.props.getFavoritedFoods(this.props.user_id, page);
    }
    render() {
        return (
            <div id="tab-favorited-foods">
                <div className="my-properties">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Favorited</th>
                                <th></th>
                                <th>Updated</th>
                                <th>Like</th>
                                <th></th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.is_loading && <tr><td> Loading... </td></tr>
                            }
                            {
                                this.props.favorited_foods.length ? (
                                    this.props.favorited_foods.map((favorited_food, i) => {
                                    return <TrFavoritedFood 
                                        key={favorited_food.id} 
                                        favorited_food={favorited_food} 
                                        is_my_food={this.props.is_my_profile} 
                                        updateFood={this.props.updateFood} />
                                    })
                                ) : null
                            }
                        </tbody>
                    </table>    
                </div>
                {
                    this.props.pagination && 
                    <Pagination href_to="#favorited-foods" pagination={this.props.pagination} getDataPaging={this.getFavoritedFoodsPaging} />
                }
            </div>
        );
    }
}