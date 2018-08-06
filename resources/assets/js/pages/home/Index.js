import React, { Component } from "react";
import { connect } from "react-redux";
import { getProfile, logoutSuccess } from '@/actions/AuthActions';

import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";
import Banner from "../../components/home/Banner";
import Blog from "../../components/home/Blog";
import CertificatedUsers from "../../components/home/CertificatedUsers";
import FeaturedCategories from "../../components/home/FeaturedCategories";
import GoodCookers from "../../components/home/GoodCookers";
import Intro from "../../components/home/Intro";
import PopularCategories from "../../components/home/PopularCategories";
import RecentFoods from "../../components/home/RecentFoods";
import SearchArea from "../../components/home/SearchArea";
import Services from "../../components/home/Services";

class Index extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(this);
    }
    render() {
        return (
            <div>
                {/* index 6 */}
                <Header {...this.props} />
                {/* <Header auth={this.props.auth} logoutSuccess={this.props.logoutSuccess} /> */}
                <Banner />
                <SearchArea />
                <FeaturedCategories />
                <Services />
                <RecentFoods />
                <PopularCategories />
                <GoodCookers />
                <CertificatedUsers />
                <Intro />
                <Blog />
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
};

function mapDispatchToProps(dispatch) {
    return {
        nothing: dispatch(getProfile()),
        logoutSuccess: () => dispatch(logoutSuccess())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);