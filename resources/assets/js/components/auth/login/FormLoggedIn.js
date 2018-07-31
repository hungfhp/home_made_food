import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class FormLoggedIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        console.log(this);
    }
    logout() {
        axios.get('/api/logout').then(function () {
            localStorage.clear();
        }).catch(function (error) {
            console.log(error);
        })
    }
    render() {
        const btnHomeStyle = {
            marginTop: '30px',
            marginRight: '10px',
            marginLeft: '10px',
        };
        const btnLogoutStyle = {
            marginTop: '30px',
            marginLeft: '10px',
            marginRight: '10px',
        };
          
        return (
            <div>
                <a href="/">
                    <button style={btnHomeStyle} className="btn btn-color btn-md pull-right  ">
                        Home
                    </button>
                </a>
                <a href="/login">
                    <button onClick={this.logout} style={btnLogoutStyle} className="btn btn-color btn-md pull-right">
                        Logout
                    </button>
                </a>
            </div>
        )
    }
}
