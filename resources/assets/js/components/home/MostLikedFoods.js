import React, { Component } from "react";

export default class MostLikedFoods extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foods: 0
        };
    }

    componentDidMount() {
        axios.get("/api/home/most_liked_foods")
            .then(
                response =>{
                    this.setState({foods: response.data.data});
                }
            ).catch(
            error => console.log("categories feature error!")
        );
        // console.log(this.state.foods);
    }

    render() {
        if (this.state.foods != 0)
        {
            const most_liked_list = this.state.foods.map((food)=> {
                return (
                    <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInRight delay-04s" key={food.id}>
                        <div className="card property-box-2">
                            {/* <!-- property img --> */}
                            <div className="property-thumbnail">
                                <a
                                    href={"/foods/" + food.id}
                                    className="property-img"
                                >
                                    <img
                                        src={food.images[0].link}
                                        alt="property-1"
                                        className="img-fluid"
                                    />
                                </a>
                            </div>
                            {/* <!-- detail --> */}
                            <div className="detail row">

                                <h5 className="title col-lg-6 col-md-6 col-sm-6">
                                    <a href={"/foods/" + food.id}>
                                        {food.name}
                                    </a>
                                </h5>
                                    <p className="facilities-list clearfix col-lg-3 col-md-3 col-sm-3">
                                        <i className="material-icons">thumb_up</i>{food.like}
                                    </p>
                                    <p className="facilities-list clearfix col-lg-3 col-md-3 col-sm-3">
                                        <i className="material-icons">thumb_down</i>{food.dislike}
                                    </p>

                                <h4 className="price col-lg-12 col-md-12 col-sm-12">{food.price}</h4>
                                <p>
                                    {food.description}
                                </p>
                            </div>
                        </div>
                    </div>

                );
            });

            return(
                <div className="recent-properties content-area">
                    <div className="container">
                        <div className="row">
                            <div className="main-title">
                                <h1>Món ăn được ưa thích nhất</h1>
                            </div>
                        </div>
                        <div className="row">
                            {most_liked_list}
                        </div>
                    </div>
                </div>
            );
        } else return (
            <div></div>
        );
    }
}
