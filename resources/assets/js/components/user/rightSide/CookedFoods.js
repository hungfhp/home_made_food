import React, { Component } from "react";

export default class CookedFoods extends Component {
    render() {
        return (
            <div>
                <div className="my-properties">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Cooked Foods</th>
                                <th></th>
                                <th>Date Added</th>
                                <th>Views</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="image">
                                    <a href="properties-details.html"><img alt="my-properties-3" src="/img/my-properties-3.jpg" className="img-fluid"/></a>
                                </td>
                                <td>
                                    <div className="inner">
                                        <a href="properties-details.html"><h2>Modern Family Home</h2></a>
                                        <figure><i className="flaticon-facebook-placeholder-for-locate-places-on-maps"></i> 123 Kathal St. Tampa City,</figure>
                                        <div className="tag price">$ 27,000</div>
                                    </div>
                                </td>
                                <td>14.02.2018</td>
                                <td>421</td>
                                <td className="actions">
                                    <a href="#" className="edit"><i className="fa fa-pencil"></i>Edit</a>
                                    <a href="#"><i className="delete fa fa-trash-o"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td className="image">
                                    <a href="properties-details.html"><img alt="my-properties" src="/img/my-properties.jpg"/></a>
                                </td>
                                <td>
                                    <div className="inner">
                                        <a href="properties-details.html"><h2>Beautiful Single Home</h2></a>
                                        <figure><i className="flaticon-facebook-placeholder-for-locate-places-on-maps"></i> 123 Kathal St. Tampa City,</figure>
                                        <div className="tag price">$ 315,000</div>
                                    </div>
                                </td>
                                <td>4.01.2018</td>
                                <td>266</td>
                                <td className="actions">
                                    <a href="#" className="edit"><i className="fa fa-pencil"></i>Edit</a>
                                    <a href="#"><i className="delete fa fa-trash-o"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td className="image">
                                    <a href="properties-details.html"><img alt="my-properties-2" src="/img/my-properties-2.jpg"/></a>
                                </td>
                                <td>
                                    <div className="inner">
                                        <a href="properties-details.html"><h2>Masons Villas</h2></a>
                                        <figure><i className="flaticon-facebook-placeholder-for-locate-places-on-maps"></i> 123 Kathal St. Tampa City,</figure>
                                        <div className="tag price">$ 62,000</div>
                                    </div>
                                </td>
                                <td>24.03.2018</td>
                                <td>45</td>
                                <td className="actions">
                                    <a href="#" className="edit"><i className="fa fa-pencil"></i>Edit</a>
                                    <a href="#"><i className="delete fa fa-trash-o"></i></a>
                                </td>
                             </tr>
                            <tr>
                                <td className="image">
                                    <a href="properties-details.html"><img alt="my-properties-3" src="/img/my-properties-3.jpg"/></a>
                                </td>
                                <td>
                                    <div className="inner">
                                        <a href="properties-details.html"><h2>Modern Family Home</h2></a>
                                        <figure><i className="flaticon-facebook-placeholder-for-locate-places-on-maps"></i> 123 Kathal St. Tampa City,</figure>
                                        <div className="tag price">$ 27,000</div>
                                    </div>
                                </td>
                                <td>14.02.2018</td>
                                <td>421</td>
                                <td className="actions">
                                    <a href="#" className="edit"><i className="fa fa-pencil"></i>Edit</a>
                                    <a href="#"><i className="delete fa fa-trash-o"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td className="image">
                                    <a href="properties-details.html"><img alt="my-properties" src="/img/my-properties.jpg"/></a>
                                </td>
                                <td>
                                    <div className="inner">
                                        <a href="properties-details.html"><h2>Beautiful Single Home</h2></a>
                                        <figure><i className="flaticon-facebook-placeholder-for-locate-places-on-maps"></i> 123 Kathal St. Tampa City,</figure>
                                        <div className="tag price">$ 315,000</div>
                                    </div>
                                </td>
                                <td>4.01.2018</td>
                                <td>266</td>
                                <td className="actions">
                                    <a href="#" className="edit"><i className="fa fa-pencil"></i>Edit</a>
                                    <a href="#"><i className="delete fa fa-trash-o"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td className="image">
                                    <a href="properties-details.html"><img alt="my-properties-2" src="/img/my-properties-2.jpg"/></a>
                                </td>
                                <td>
                                    <div className="inner">
                                        <a href="properties-details.html"><h2>Masons Villas</h2></a>
                                        <figure><i className="flaticon-facebook-placeholder-for-locate-places-on-maps"></i> 123 Kathal St. Tampa City,</figure>
                                        <div className="tag price">$ 62,000</div>
                                    </div>
                                </td>
                                <td>24.03.2018</td>
                                <td>45</td>
                                <td className="actions">
                                    <a href="#" className="edit"><i className="fa fa-pencil"></i>Edit</a>
                                    <a href="#"><i className="delete fa fa-trash-o"></i></a>
                                </td>
                            </tr>
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
