import React, { Component } from "react";

export default class TrSearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }
    getStatusStyle(status) {
        let style;
        switch (status) {
            case 'required': {
                style = {color: 'darkgray', fontWeight: 'bold'};
                return style;
            }
            case 'cooked': {
                style = {color: 'darkgray', fontWeight: 'bold'};
                return style;
            }
            case 'dealed': {
                style = {color: 'orange', fontWeight: 'bold'};
                return style;
            }
            case 'shipping': {
                style = {color: '#5bc0de', fontWeight: 'bold'};
                return style;
            }
            case 'done': {
                style = {color: 'black', fontWeight: 'bold'};
                return style;
            }
            case 'cancel': {
                style = {color: 'black', fontWeight: 'bold'};
                return style;
            }
        }
    };
    getActions() {
        let actions;
        switch (status) {
            case 'required': {
                actions = <button className="btn btn-sm btn-default">hihi</button>;
                return actions;
            }
            case 'cooked': {
                actions = <button className="btn btn-sm btn-default">hihi</button>;
                return actions;
            }
            case 'dealed': {
                actions = <button className="btn btn-sm btn-default">hihi</button>;
                return actions;
            }
            case 'done': {
                actions = <button className="btn btn-sm btn-default">hihi</button>;
                return actions;
            }
            case 'cancel': {
                actions = <button className="btn btn-sm btn-default">hihi</button>;
                return actions;
            }
            case 'shipping': {
                actions = <button className="btn btn-sm btn-default">hihi</button>;
                return actions;
            }
        }
    }
    render() {
        let result = this.props.result;
        return (
            <tr>
                {/* <td className="product-thumbnail"><img src={result.image.link} alt="shop-1"/></td> */}
                <td className="image-result" style={{backgroundImage: "url(" + result.image.link + ")", backgroundPosition: "center", height: "30px", backgroundSize: "cover"}}></td>
                <td style={{fontWeight: "bold"}}>{result.price}</td>
                <td className="text-transform-none" style={{fontStyle: 'italic'}}>
                    <a href={"/foods/"+result.id} style={{fontWeight: "bold"}} className="text-transform-uppercase">{result.name}</a>
                    <br/>
                    {result.description}
                </td>
                {/* <td>{result.created_at.replace('-','/').replace('-','/')}</td> */}
                {/* <td>{result.updated_at.replace('-','/').replace('-','/')}</td> */}
            </tr>
        )
    }
}


class ButtonActions extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }
    render() {
        let result = this.props.result;
        let is_loading = this.props.auth.is_loading;
        switch (this.props.children) {
            case 'required': {
                return <div>
                    <button className="cursor-pointer min-width-100-per padding-top-bottom-1 btn btn-sm btn-warning">Cancel</button>
                </div>
            }
            case 'cooked': {
                return <div>
                    <button className="cursor-pointer min-width-100-per padding-top-bottom-1 btn btn-sm btn-warning">Cancel</button>
                </div>
            }
            case 'dealed': {
                return <div>
                    <button className="cursor-pointer min-width-100-per padding-top-bottom-1 btn btn-sm btn-info">Ship Now</button>
                </div>
            }
            case 'done': {
                return <div className="font-weight-700 min-width-100-per padding-top-bottom-1 text-align-center">
                    Done
                </div>
            }
            case 'cancel': {
                return <div className="font-weight-700 min-width-100-per padding-top-bottom-1 text-align-center">
                    Cancel
                </div>
            }
            case 'shipping': {
                if (is_loading) {
                    return <div className="font-weight-700 min-width-100-per padding-top-bottom-1 text-align-center">
                        Loading...
                    </div>
                } else {   
                    if (result.shipper_id == this.props.auth.user.id) {
                        <div>
                            <button className="cursor-pointer min-width-100-per padding-top-bottom-1 btn btn-sm btn-success">Done</button>
                            <button className="cursor-pointer min-width-100-per padding-top-bottom-1 btn btn-sm btn-danger">Cancel</button>
                        </div>
                    } else {
                        <div className="font-weight-700 min-width-100-per padding-top-bottom-1 text-align-center">
                            Waiting
                        </div>
                    }
                }
            }
            default: {
                return <div className="font-weight-700 min-width-100-per padding-top-bottom-1 text-align-center">
                    Waiting
                </div>
            }
        }
    }
}