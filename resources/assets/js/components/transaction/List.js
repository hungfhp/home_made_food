import React, { Component } from "react";
import axios from "axios";
import {Modal} from "react-bootstrap";
import {Button} from "react-bootstrap";

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: [],
            show: false
        };
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({ show: false});
    }

    handleShow() {
        this.setState({ show: true});
    }

    showModal(data) {
        this.setState({modal: data});
        this.setState({show: true});
    }
    //set style for status
    getStatusStyle(status) {
        let style;
        switch (status) {
            case 'required': {
                style = {color: 'silver', fontWeight: 'bold'};
                return style;
            }
            case 'done': {
                style = {color: 'green', fontWeight: 'bold'};
                return style;
            }
            case 'cancel': {
                style = {color: 'red', fontWeight: 'bold'};
                return style;
            }
            case 'cooked': {
                style = {color: 'orange', fontWeight: 'bold'};
                return style;
            }
            case 'shipping': {
                style = {color: 'blue', fontWeight: 'bold'};
                return style;
            }
        }
    };

    render() {
        if (this.props.HistoryData.length > 0) {
            const HistoryData = this.props.HistoryData.map((data, index)=> {
                return (
                    <tr key={index}>
                        <td className="product-thumbnail"><img src={data.food_image.link} alt="shop-1"/></td>

                        <td className="product-name property-video" onClick={()=>this.handleShow(data.food_name)}>
                            <a>{data.food_name}</a>
                        </td>
                        <td style={{fontWeight: "bold"}}>{data.price}</td>
                        <td style={{fontStyle: 'italic'}}>{data.description}</td>
                        <td style={this.getStatusStyle(data.status)}>{data.status}</td>
                        <td>{data.created_at}</td>
                        <td>{data.updated_at}</td>
                        <td className="product-remove"><a href="#"><i className="fa fa-close"></i></a></td>
                    </tr>
                );
            });
            console.log(this.props.HistoryData);
            return (
                <div className="col-lg-8">
                    <table className="shop-table cart">
                        <thead>
                        <tr style={{textAlign: 'center'}}>
                            <th className="product-name">Product</th>
                            <th className="product-price">Food name</th>
                            <th className="product-price">Price</th>
                            <th className="product-quantity">Description</th>
                            <th className="product-subtotal">Status</th>
                            <th className="product-subtotal">Created time</th>
                            <th className="product-subtotal">Closing time</th>
                            <th className="product-remove">&nbsp;</th>
                        </tr>
                        </thead>
                        <tbody>
                        {HistoryData}
                        </tbody>
                    </table>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body>
                            <h4>{this.state.modal}</h4>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            );
        }
        else {
            return (
                <div>waiting</div>
            );
        }
    }
}
