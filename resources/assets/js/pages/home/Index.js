import React, { Component } from "react";
import { connect } from "react-redux";
import { getProfile, logoutSuccess } from '@/actions/AuthActions';

import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import Banner from "@/components/home/Banner";
import CertificatedUsers from "@/components/home/CertificatedUsers";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import GoodCookers from "@/components/home/GoodCookers";
import Intro from "@/components/home/Intro";
import MostLikedFoods from "@/components/home/MostLikedFoods";
import SearchArea from "@/components/home/SearchArea";
import Services from "@/components/home/Services";

class Index extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {/* index 6 */}
                <Header auth={this.props.auth} logoutSuccess={this.props.logoutSuccess} />
                {/*<Banner />*/}

                {/*<SearchArea />*/}

                {/*<FeaturedCategories />*/}
                {/*<Services />*/}
                {/*<MostLikedFoods />*/}

                {/*<GoodCookers />*/}
                {/*<CertificatedUsers />*/}
                {/*<Intro />*/}
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
        default: dispatch(getProfile()),
        logoutSuccess: () => dispatch(logoutSuccess())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);