import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class DealItemUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.handleUpdateDeal = this.handleUpdateDeal.bind(this);
    }
    handleUpdateDeal() {
        let deal = {...this.props.my_dealed,
            comment: this.refs.comment.value
        }
        this.props.updateDeal(deal);
    }
    render() {
        let auth = this.props.auth;
        let my_dealed = this.props.my_dealed;
        
        return (
            <div className="row comment">
                <div className="col-md-1">
                    <img src={auth.user.avatar} className="rounded-circle" alt="avatar-2" width="100%"/>
                </div>
                <div className="col-md-11">
                    <div className="comment-meta">
                        <div className="comment-meta-author">
                            <Link className="color-red-black" to={"/users/"+auth.user.id}>{auth.user.name}</Link>
                        </div>
                        <div className="comment-meta-date">
                            {/* <span>{deal.updated_at}</span> */}
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="margin-bottom-5"><b><i className="fa fa-map-marker custom"></i></b> <span className="text-muted font-size-13">{auth.user.address} <br/> </span></div>
                    <textarea ref="comment" className="form-control margin-bottom-5" name="message" defaultValue={my_dealed.comment} placeholder="Your deal"></textarea> 
                    <button type="submit" className="btn btn-sm btn-color btn-md btn-message" onClick={this.handleUpdateDeal}>Save Update</button>
                </div>
                {/* <div className="col-md-3"> */}
                    {/* <button className="btn btn-success cursor-pointer" onClick={(dealer_id)=>this.updateTransactionToDealed(deal.user_id)}>Accept</button> */}
                {/* </div> */}
            </div>
            // <div className="row">
            //     <form action="#" method="GET" enctype="multipart/form-data">
            //         <div className="row">
            //             <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            //                 <div className="form-group name">
            //                     <input type="text" name="name" className="form-control" placeholder="Name"/>
            //                 </div>
            //             </div>
            //             <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            //                 <div className="form-group email">
            //                     <input type="email" name="email" className="form-control" placeholder="Email"/>
            //                 </div>
            //             </div>
            //             <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            //                 <div className="form-group subject">
            //                     <input type="text" name="subject" className="form-control" placeholder="Subject"/>
            //                 </div>
            //             </div>
            //             <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            //                 <div className="form-group number">
            //                     <input type="text" name="phone" className="form-control" placeholder="Number"/>
            //                 </div>
            //             </div>
            //             <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            //                 <div className="form-group message">
            //                     <textarea className="form-control" name="message" placeholder="Write message"></textarea>
            //                 </div>
            //             </div>
            //             <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            //                 <div className="send-btn">
            //                     <button type="submit" className="btn btn-color btn-md btn-message">Send Message</button>
            //                 </div>
            //             </div>
            //         </div>
            //     </form>
            // </div>
        );
    }
}
