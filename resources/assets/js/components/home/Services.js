import React, { Component } from "react";

export default class Services extends Component {
    render() {
        return (
            <div className="services content-area-17">
                <div className="container">
                    <div className="main-title">
                        <h1>Vài thứ hay ho bạn sẽ có khi tham gia cùng chúng tôi</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6 wow fadeInUp delay-04s">
                            <div className="media services-info">
                                <i className="flaticon-house" />
                                <div className="media-body">
                                    <h5>Eat</h5>
                                    <p>
                                        Mua những món ăn nhà làm ngon, dinh dưỡng, an toàn với giá cả hợp lý
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 wow fadeInUp delay-04s">
                            <div className="media services-info">
                                <i className="flaticon-agreement" />
                                <div className="media-body">
                                    <h5>Cook</h5>
                                    <p>
                                        Chia sẻ những món ăn ngon do mình nấu với mọi người và kiếm thêm một khoản thu nhập
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 wow fadeInUp delay-04s">
                            <div className="media services-info">
                                <i className="flaticon-parking" />
                                <div className="media-body">
                                    <h5>Ship</h5>
                                    <p>
                                        Tham gia vào hệ thống người giao hàng chưa bao giờ dễ dàng như thế
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
