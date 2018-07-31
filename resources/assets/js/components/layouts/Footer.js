import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container footer-inner">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-item">
                                <h4>Liên hệ</h4>

                                <ul className="contact-info">
                                    <li>
                                        Địa chỉ: Trần Khát Chân, Hai Bà Trưng,
                                        Hà Nội
                                    </li>
                                    <li>
                                        Email:{" "}
                                        <a href="mailto:homemade_food@gmail.com">
                                            homemade_food@gmail.com
                                        </a>
                                    </li>
                                    <li>
                                        Điện thoại:{" "}
                                        <a href="tel:+84 3 123 456">
                                            +84 3 123 456
                                        </a>
                                    </li>
                                    <li>Fax: +84 3 123 456</li>
                                </ul>

                                <ul className="social-list clearfix">
                                    <li>
                                        <a href="#" className="facebook">
                                            <i className="fa fa-facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="twitter">
                                            <i className="fa fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="google">
                                            <i className="fa fa-google-plus" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="rss">
                                            <i className="fa fa-rss" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="linkedin">
                                            <i className="fa fa-linkedin" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                            <div className="footer-item">
                                <h4>Useful Links</h4>
                                <ul className="links">
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-angle-right" />About
                                            us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/home">
                                            <i className="fa fa-angle-right" />Trang chủ
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/foods">
                                            <i className="fa fa-angle-right" />Foods
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-angle-right" />Properties
                                            Grid
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-angle-right" />Contact
                                            Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-angle-right" />Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-angle-right" />Property
                                            Details
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                            <img style={{width: 200 + 'px'}} src="/img/logos/old_logo-white.png"/>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-item clearfix">
                                <h4>
                                    Theo dõi thông tin mới nhất của Homemade
                                    Food
                                </h4>
                                <div className="Subscribe-box">
                                    <p>
                                        <a href="https://www.computerhope.com/">
                                            <img src="https://www.computerhope.com/logo.gif" />
                                        </a>
                                    </p>
                                    <form action="#" method="GET">
                                        <p>
                                            <input
                                                type="text"
                                                className="form-contact"
                                                name="email"
                                                placeholder="Enter Address"
                                            />
                                        </p>
                                        <p>
                                            <button
                                                type="submit"
                                                name="submitNewsletter"
                                                className="btn btn-block btn-color"
                                            >
                                                Subscribe
                                            </button>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-12">
                            <p className="copy">
                                &copy; 2018{" "}
                                <a
                                    href="http://themevessel.com/"
                                    target="_blank"
                                >
                                    Theme Vessel
                                </a>. Trademarks and brands are the property of
                                their respective owners.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
