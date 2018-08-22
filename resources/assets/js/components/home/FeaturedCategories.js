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
            const food_list = list.map((food)=> {
                return (
                    <div className="col-lg-4 col-md-6 col-sm-12 filtr-item" data-category={food.category_id} key={food.id}>
                        <div className="property-box">
                            <div className="property-thumbnail">
                                <a href={"/foods/" + food.id} className="property-img">
                                    <div className="price-ratings-box">
                                        <p className="price price-background">
                                            {food.price} Đ
                                        </p>
                                    </div>
                                    <div style={{backgroundImage: "url(" + food.images[0].link + ")", height: "230px", backgroundPosition: "center", backgroundSize: "cover"}}></div>
                                </a>
                            </div>
                            <div className="detail">
                                <h1 className="title">
                                    <a href={"/foods/" + food.id}>
                                        {food.name}
                                    </a>
                                </h1>
                                <div className="facilities-list clearfix">
                                    <a href={"/users/" + food.user.id}>
                                        <i class="fa fa-user"></i> {food.user.name}
                                    </a>
                                </div>
                                <div className="facilities-list clearfix">
                                    <i class="fa fa-heart" aria-hidden="true"></i> {food.favorites.length}
                                </div>
                                <ul className="facilities-list clearfix">
                                    <li>
                                        <i className="material-icons">thumb_up</i>{food.like}
                                    </li>
                                    <li>
                                        <i className="material-icons">thumb_down</i>{food.dislike}
                                    </li>
                                </ul>
                                <div className="facilities-list clearfix">
                                <i class="fa fa-bookmark-o" aria-hidden="true"></i> {food.description}
                                </div>
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