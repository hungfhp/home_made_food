import React, { Component } from "react";
import { getProfile, logoutSuccess } from '@/actions/AuthActions';

import Header from "../../components/layouts/Header";
import SubHeader from "../../components/layouts/SubHeader";
import Footer from "../../components/layouts/Footer";
import connect from "react-redux/es/connect/connect";
import Product from "../../components/categories/Product";
import Tool from "../../components/food/Tool";
import Pagination from "../../components/layouts/Pagination";

class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            categoryInfo: 0,
            current_page: '',
            last_page: ''
        };
        this.getFoodsPaginate = this.getFoodsPaginate.bind(this);
    }

    getFoodsPaginate(page)  {
        axios.get('/api/categories/'+this.state.id+'?page='+page)
            .then(
                response=>{
                    this.setState({categoryInfo: response.data.data.data});
                    this.setState({current_page: response.data.data.current_page});
                    this.setState({last_page: response.data.data.last_page});
                }
            )
            .catch(
                error=>console.log('categories/:id error!')
            )
    }

    componentDidMount() {
        this.getFoodsPaginate(1);
    }

    render() {
        if (this.state.categoryInfo !== 0) {
            let pagination = {
                current_page: this.state.current_page,
                last_page : this.state.last_page
            };
            return (
                <div>
                    <Header title={"Homemade"} auth={this.props.auth} logoutSuccess={this.props.logoutSuccess}/>
                    <SubHeader title={this.state.categoryInfo[0].category.name}/>
                    <div className="user-page submit-property content-area-7">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-12 col-xs-12 ">
                                    <div id="propertiesDetailsSlider" className="carousel properties-details-sliders slide mb-60">
                                        <div className="heading-properties">
                                            <div className="col-md-12">
                                                <div className="pull-left">
                                                {/*<h3 className="post-title">{this.state.categoryInfo[0].name}</h3>*/}
                                                {/*<p>{this.state.categoryInfo[0].description}</p>*/}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-inner">
                                            {/*<img src={this.state.categoryInfo["image"][0].link} alt="property-7" className="img-fluid"/>*/}
                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-4">
                                </div>
                            </div>
                            <div className="row">
                                <Product foods={this.state.categoryInfo} pagination={pagination} getFoodsPaginate={this.getFoodsPaginate}/>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            );
        } else {
            return(
                <div></div>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

function mapDispatchToProps(dispatch) {
    return {
        default: dispatch(getProfile()),
        logoutSuccess: () => dispatch(logoutSuccess())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Show);
