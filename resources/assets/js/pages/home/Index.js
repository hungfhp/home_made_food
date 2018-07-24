import React, { Component } from "react";
import Header from "../../components/layouts/Header";
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

export default class Index extends Component {
    render() {
        return (
            <div>
                <Header />
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
                <h2>Index</h2>
            </div>
        );
    }
}
