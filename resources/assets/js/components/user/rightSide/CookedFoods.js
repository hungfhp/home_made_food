import React, { Component } from "react";
import TrCookedFood from "@/components/food/TrCookedFood";
import Pagination from "@/components/layouts/Pagination";

export default class CookedFoods extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }
    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }
    render() {
        return (
            <div id="tab-cooked-foods">
                <div className="my-properties">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Cooked Foods</th>
                                <th></th>
                                <th>Updated</th>
                                <th>Like</th>
                                <th>Publish</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.is_loading && <tr><td> Loading... </td></tr>
                            }
                            {
                                this.props.foods.length ? (
                                    this.props.foods.map((food, i) => {
                                    return <TrCookedFood 
                                        key={food.id} food={food} 
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
                    <Pagination href_to="#cooked-foods" user_id={this.props.user_id} pagination={this.props.pagination} getDataPaging={this.props.getCookedFoods} />
                }
                   
            </div>
        );
    }
}

