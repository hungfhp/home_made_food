import React, { Component } from "react";
import axios from "axios";

export default class TransactionDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: this.props.auth.success,
            userInfo: this.props.auth.user
        };
    }

    // componentDidMount() {
    //     axios.get('/api/users/'+this.state.userId)
    //         .then(
    //             response=>{
    //                 this.setState({userInfo: response.data.data});
    //                 console.log(response.data.data);
    //             }
    //         )
    //         .catch(
    //             error=>console.log('foods/:id error!')
    //         )
    // }
    render() {
        console.log(this.props.auth);
        if (this.props.auth.success === 'SUCCESS_PROFILE'){
            const userInfo = this.props.auth.user;
            return (
                <div className="col-lg-6">
                    <div className="heading-2">
                        <h4>Require's information</h4>
                    </div>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="User's Name" defaultValue={userInfo.name} ref="username"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Address" defaultValue={userInfo.address} ref="address"/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email" defaultValue={userInfo.email} ref="email"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Phone" defaultValue={userInfo.phone} ref="phone"/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" placeholder="Note" ref="note"/>
                        </div>
                    </form>
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }
}
