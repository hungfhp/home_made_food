import React, { Component } from 'react';

export default class FeaturedCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: 0
        };
    }

    componentDidMount() {
        axios.get("/api/home/categories_feature")
            .then(
                response =>{
                    this.setState({categories: response.data.data});
                }
            ).catch(
            error => console.log("categories feature error!")
        );
    }

    renderTitle(active, title, data_filter) {
        return (
            <li
                className={"btn btn-inline filtr-button filtr " + active}
                data-filter={data_filter}
            >
                {title}
            </li>
        );
    }

    render() {
        if (this.state.categories != 0)
        {
            const list = this.state.categories[0].foods.concat(this.state.categories[1].foods).concat(this.state.categories[2].foods);
            console.log(list);
            const food_list = list.map((food)=> {
                // const image = food.images;
                // console.log("ok");
                console.log(food);
                return (
                    <div className="col-lg-4 col-md-6 col-sm-12 filtr-item" data-category={food.category_id} key={food.id}>
                        <div className="property-box">
                            <div className="property-thumbnail">
                                <a href={"/foods/" + food.id} className="property-img">
                                    <div className="price-ratings-box">
                                        <p className="price">
                                            {food.price}
                                        </p>
                                    </div>
                                    <img src={food.images[0].link} alt="property-7" className="img-fluid"/>
                                </a>
                            </div>
                            <div className="detail">
                                <h1 className="title">
                                    <a href={"/foods/" + food.id}>
                                        {food.name}
                                    </a>
                                </h1>
                                <ul className="facilities-list clearfix">
                                    <li>
                                        <i className="material-icons">thumb_up</i>{food.like}
                                    </li>
                                    <li>
                                        <i className="material-icons">thumb_down</i>{food.dislike}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            });

            return(
                <div className="featured-properties content-area-2">
                    <div className="container">
                        <div className="main-title">
                            <h1>We have many dishes</h1>
                        </div>
                        <ul className="list-inline-listing filters filteriz-navigation">
                            {this.renderTitle("active", "All", "all")}
                            {this.renderTitle("", this.state.categories[0].name, this.state.categories[0].id)}
                            {this.renderTitle("", this.state.categories[1].name, this.state.categories[1].id)}
                            {this.renderTitle("", this.state.categories[2].name, this.state.categories[2].id)}
                        </ul>
                        <div className="row filter-portfolio" >
                            <div className="cars">
                                {food_list}
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else return (
            <div></div>
        );
    }
}