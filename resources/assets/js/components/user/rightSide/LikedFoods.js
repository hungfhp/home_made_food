import React, { Component } from "react";
import TrLikedFood from "@/components/food/TrLikedFood";
import Pagination from "@/components/layouts/Pagination";

export default class LikedFoods extends Component {
    constructor(props) {
        super(props);
        this.state={};
        this.getLikedFoodsPaging = this.getLikedFoodsPaging.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }
    getLikedFoodsPaging(page) {
        this.props.getLikedFoods(this.props.user_id, page);
    }
    render() {
        return (
            <div id="tab-liked-foods">
                <div className="my-properties">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Liked Foods</th>
                                <th></th>
                                <th>Updated</th>
                                <th>Like</th>
                                <th></th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.is_loading && <tr><td> Loading... </td></tr>
                            }
                            {
                                this.props.liked_foods.length ? (
                                    this.props.liked_foods.map((liked_food, i) => {
                                    return <TrLikedFood 
                                        key={liked_food.id} 
                                        liked_food={liked_food} 
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
                    <Pagination href_to="#liked-foods" user_id={this.props.user_id} pagination={this.props.pagination} getDataPaging={this.getLikedFoodsPaging} />
                }
                   
            </div>
        );
    }
}