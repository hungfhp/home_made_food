import React, { Component } from "react";
import axios from "axios";
import {Modal} from "react-bootstrap";
import {Button} from "react-bootstrap";

export default class ModalFood extends Component {
    constructor(props) {
        super(props);
        console.log(props.data);
        this.state = {
            show: props.show
        };
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({ show: false});
    }

    render() {
        return(
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <h4>hello</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
