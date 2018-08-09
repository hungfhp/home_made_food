import React, { Component } from "react";
import TrFoodItem from "@/components/food/TrFoodItem";

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
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.is_loading && <tr><td> Loading... </td></tr>
                            }
                            {
                                this.props.foods.length ? (
                                    this.props.foods.map((food, i) => {
                                    return <TrFoodItem key={food.id} food={food} is_my_food={this.props.is_my_profile} />
                                    })
                                ) : null
                            }
                        </tbody>
                    </table>    
                </div>
                <div className="pagination-box">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link" href="#"><span aria-hidden="true">«</span></a></li>
                            <li className="page-item"><a className="page-link active" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#"><span aria-hidden="true">»</span></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

