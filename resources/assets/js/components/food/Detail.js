import React, { Component } from "react";
import axios from "axios";
import { withGoogleMap, GoogleMap } from "react-google-maps";

export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodId: props.foodId,
            like: 0,
            dislike: 0,
            location: [],
            comments: [],
            map: []
        };
        this.getLike = this.getLike.bind(this);
        this.getDisLike = this.getDisLike.bind(this);
        this.getComment = this.getComment.bind(this);
    }

    //get like
    getLike (like){
        if (like === 0) {
            this.setState({like: 1, dislike: 0});
        }
        if (like === 1) {
            this.setState({like: 0});
        }
    }

    //get dislike
    getDisLike (dislike) {
        if (dislike === 0) {
            this.setState({dislike: 1, like: 0});
        }
        if (dislike === 1) {
            this.setState({dislike: 0});
        }
    }

    //get location from latitude, longitude
    getLocation (lat, long) {
        fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + lat + ',' + long +'&key=AIzaSyCyTWmAGgtGr0qWC8TkJskEkoz9KHxPq-A')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log (responseJson.results[0].formatted_address);
                this.setState({location: responseJson.results[0].formatted_address});
            })
            .catch(
                error=>console.log('map error!')
            )
    }

    //get comments
    getComment (id) {
        axios.get('/api/comments/' + id)
            .then(
                response => {
                    this.setState({comments: response.data.data});
                }
            )
            .catch(
                error => console.log('get comment: error!')
            )
    }

    //send comment
    postComment (comment) {
        comment.set('comment',this.refs.comment.value);
        axios({
            method: 'post',
            url: '/api/comments',
            data:comment,
            headers: {'Content-Type': 'multipart/form-data', Authorization: localStorage.b_token}
        })
            .then(response=>{
                console.log("commented!");
                $('#newComment #comment').val('');
                this.getComment(this.state.foodId);
            })
            .catch(error=>console.log("comment: error!"));
    }

    //google map
    getMap (lat, long) {
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
                defaultCenter = { { lat: lat, lng: long } }
                defaultZoom = { 15 }
            >
            </GoogleMap>
        ));
        return GoogleMapExample;
    }

    componentDidMount() {
        this.getComment(this.state.foodId);
    }

    render() {
        //like style
        let likeStyle ={};
        if(this.state.like === 0) {
            likeStyle = {color: 'grey', cursor: 'pointer'};
        }
        if(this.state.like === 1) {
            likeStyle = {color: 'blue', cursor: 'pointer'};
        }

        //dislike style
        let dislikeStyle = {};
        if(this.state.dislike === 0) {
            dislikeStyle = {color: 'grey', cursor: 'pointer'};
        }
        if(this.state.dislike === 1) {
            dislikeStyle = {color: 'red', cursor: 'pointer'};
        }

        //get food data
        if (this.props.foodInfo !== 0) {
            const dataInfo = this.props.foodInfo;
            const foodInfo = dataInfo[0];
            const cookerInfo = dataInfo[0].user;
            const location = cookerInfo.address;

            //slider
            const images_slider = dataInfo.image.map((image, index) => {
                if (index === 1) {
                    return (
                        <div key={image.id} className="item carousel-item active" data-slide-number={index}>
                            <img
                                src={image.link}
                                alt={index} className="img-fluid" style={{width: "800px", height: "auto"}}/>
                        </div>
                    );
                }
                else {
                    return (
                        <div key={image.id} className="item carousel-item" data-slide-number={index}>
                            <img
                                src={image.link}
                                alt={index} className="img-fluid" style={{width: "800px", height: "auto"}}/>
                        </div>
                    );
                }
            });

            //carousel
            const carousel_indicator = dataInfo.image.map((image, index) => {
                if (index === 1) {
                    return (
                        <li key={image.id} className="list-inline-item active">
                            <a id={index} data-slide-to={index} className="selected"
                               data-target="#propertiesDetailsSlider">
                                <img
                                    src={image.link}
                                    alt={index} className="img-fluid" style={{width: "800px", height: "auto"}}/>
                            </a>
                        </li>
                    );
                }
                else {
                    return (
                        <li key={image.id} className="list-inline-item">
                            <a id={index} data-slide-to={index}
                               data-target="#propertiesDetailsSlider">
                                <img
                                    src={image.link}
                                    alt={index} className="img-fluid" style={{width: "800px", height: "auto"}}/>
                            </a>
                        </li>
                    );
                }
            });

            //show comments
            const comments = this.state.comments.map((comment)=>{
                return (
                    <li key={comment.id}>
                        <div className="comment">
                            <div className="comment-author">
                                <a href="#">
                                    <img
                                        src={comment.user.avatar}
                                        alt="property-1" className="img-fluid"/>
                                </a>
                            </div>
                            <div className="comment-content">
                                <div className="comment-meta">
                                    <div className="comment-meta-author">
                                        {comment.user.name}
                                    </div>
                                    <div className="comment-meta-reply">
                                        <a href="#" title="Report to admin"><i className="material-icons">flag</i></a>
                                    </div>
                                    <div className="comment-meta-date">
                                        <span>{comment.updated_at}</span>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="comment-body">
                                    <div className="comment-rating">
                                    </div>
                                    <p>{comment.comment}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                );
            });

            //comment
            const logged = localStorage.getItem('logged_in');
            let commentForm = [];
            let userLogged = [];
            let newComment = new FormData();
            if (logged) {
                newComment.set('food_id', foodInfo.id);
                newComment.set('user_id', localStorage.getItem('user_id'));
                newComment.set('comment', this.refs.comment);
                userLogged = localStorage.getItem('username');
                commentForm =
                    <div className="contact-3 mb-60">
                        <h3 className="heading">Leave a Comment</h3>
                        <div className="container">
                            <div className="row">
                                <form encType="multipart/form-data" id="newComment">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <div className="form-group name">
                                                <input type="text" name="name" className="form-control name"
                                                       placeholder={userLogged} disabled/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <div className="form-group name ">
                                                <input type="text" name="address" className="form-control name"
                                                       placeholder="lay latitude va longitude cho vao day" disabled/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group message">
                                                <textarea className="form-control" name="comment" id="comment" ref="comment"
                                                          placeholder="Write comment"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                            <div className="send-btn">
                                                <button onClick={()=>this.postComment(newComment)} type="submit" className="btn btn-color btn-md btn-message">Send
                                                    Message
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>;
            }
            else {
                commentForm =
                    <div className="row send-btn">
                        <div className="col s2"></div>
                        <a type="submit" href="/login" className="col s8 btn btn-color btn-md btn-message">Please sign in to comment</a>
                        <div className="col s2"></div>
                    </div>;
            }

            //map
            const GoogleMapExample = this.getMap(parseFloat(cookerInfo.latitude), parseFloat(cookerInfo.longitude));

            //main return
            return (
                <div className="col-lg-8 col-md-12 col-xs-12 ">
                    <div id="propertiesDetailsSlider" className="carousel properties-details-sliders slide mb-60">
                        <div className="heading-properties">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="pull-left">
                                        <h3 className="post-title">{foodInfo.name}</h3>
                                        <p title="Cooker"><i className="material-icons">bookmark_border</i>{cookerInfo.name}</p>
                                        <p title="Location"><i className="material-icons">location_on</i>{location}</p>
                                    </div>
                                    <div className="p-r">
                                        <h3><i className="material-icons" style={{marginTop: '4px'}}>attach_money</i>{foodInfo.price}VND</h3>
                                        <a><i className="material-icons favourite" style={likeStyle}  onClick={()=>this.getLike(this.state.like)} title="Like">thumb_up</i> &emsp;
                                            <i className="material-icons favourite" style={dislikeStyle} onClick={()=>this.getDisLike(this.state.dislike)} title="Dislike">thumb_down</i> &emsp;
                                            <i className="material-icons favourite" style={{color: 'red', cursor: 'pointer'}} title="Favourite">favorite_border</i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-inner">
                            {images_slider}

                            <a className="carousel-control left" href="#propertiesDetailsSlider" data-slide="prev"><i
                                className="fa fa-angle-left"></i></a>
                            <a className="carousel-control right" href="#propertiesDetailsSlider" data-slide="next"><i
                                className="fa fa-angle-right"></i></a>
                        </div>

                        <ul className="carousel-indicators smail-properties list-inline nav nav-justified">
                            {carousel_indicator}
                        </ul>
                    </div>

                    <div className="tabbing tabbing-box mb-60">
                        <ul className="nav nav-tabs" id="carTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active show" id="one-tab" data-toggle="tab" href="#one"
                                   role="tab" aria-controls="one" aria-selected="false">Description</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="two-tab" data-toggle="tab" href="#two" role="tab"
                                   aria-controls="two" aria-selected="true">Details</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="three-tab" data-toggle="tab" href="#three" role="tab"
                                   aria-controls="three" aria-selected="true">Location</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="four-tab" data-toggle="tab" href="#four" role="tab"
                                   aria-controls="four" aria-selected="true">Related Foods</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="carTabContent">
                            <div className="tab-pane fade active show" id="one" role="tabpanel"
                                 aria-labelledby="one-tab">
                                <h3 className="heading">Mô tả món ăn</h3>
                                <p>{foodInfo.description}</p>
                            </div>
                            <div className="tab-pane fade " id="two" role="tabpanel" aria-labelledby="two-tab">
                                <div className="property-details">
                                    <h3 className="heading">Food Details</h3>
                                    <div className="row">
                                        <div className="col-md-4 col-sm-6">
                                            <ul>
                                                <li>
                                                    <strong>Food's name: </strong>{foodInfo.name}
                                                </li>
                                                <li>
                                                    <strong>Price: </strong>{foodInfo.price} VND
                                                </li>
                                                <li>
                                                    <strong>Cooker: </strong>{cookerInfo.name}
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-4 col-sm-6">
                                            <ul>
                                                <li>
                                                    <strong>Like: </strong>{foodInfo.like} <i className="material-icons post-icon">thumb_up</i>
                                                </li>
                                                <li>
                                                    <strong>Favourite: </strong>10 <i className="material-icons">favorite</i>
                                                </li>
                                                <li>
                                                    <strong>Phone Number: </strong>{cookerInfo.phone}
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-4 col-sm-6">
                                            <ul>
                                                <li>
                                                    <strong>Dislike: </strong>{foodInfo.dislike} <i className="material-icons post-icon">thumb_down</i>
                                                </li>
                                                <li>
                                                    <strong>Status: </strong>Stocking <i className="material-icons" style={{color: 'green'}}>check_circle</i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade " id="three" role="tabpanel" aria-labelledby="three-tab">
                                <div className="section location">
                                    <h3 className="heading">Property Location</h3>
                                    <div className="map">
                                        <GoogleMapExample
                                            containerElement={ <div style={{ height: `500px`, width: '750px' }} /> }
                                            mapElement={ <div style={{ height: `100%` }} /> }
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade " id="four" role="tabpanel" aria-labelledby="four-tab">
                                <div className="related-properties">
                                    <h3 className="heading">Related Properties</h3>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="property-box">
                                                <div className="property-thumbnail">
                                                    <a href="properties-details.html" className="property-img">
                                                        <div className="tag button alt featured">Featured</div>
                                                        <div className="price-ratings-box">
                                                            <p className="price">
                                                                $178,000
                                                            </p>
                                                            <div className="ratings">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star-o"></i>
                                                            </div>
                                                        </div>
                                                        <img
                                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqz5zchFqgkS5CDzmtyHMz9BBi8EyF68S_NsijMk7lP4E97Lr"
                                                            alt="property-1" className="img-fluid"/>
                                                    </a>
                                                    <div className="property-overlay">
                                                        <a href="properties-details.html" className="overlay-link">
                                                            <i className="fa fa-link"></i>
                                                        </a>
                                                        <a className="overlay-link property-video" title="Test Title">
                                                            <i className="fa fa-video-camera"></i>
                                                        </a>
                                                        <div className="property-magnify-gallery">
                                                            <a href="/img/property-2.jpg" className="overlay-link">
                                                                <i className="fa fa-expand"></i>
                                                            </a>
                                                            <a href="/img/property-6.jpg" className="hidden"></a>
                                                            <a href="/img/property-4.jpg" className="hidden"></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="detail">
                                                    <h1 className="title">
                                                        <a href="properties-details.html">Modern Family Home</a>
                                                    </h1>
                                                    <div className="location">
                                                        <a href="properties-details.html">
                                                            <i className="fa fa-map-marker"></i>123 Kathal St. Tampa
                                                            City,
                                                        </a>
                                                    </div>
                                                    <ul className="facilities-list clearfix">
                                                        <li>
                                                            <i className="flaticon-square-layouting-with-black-square-in-east-area"></i> 3
                                                            Bedrooms
                                                        </li>
                                                        <li>
                                                            <i className="flaticon-bath"></i> 2 Bathrooms
                                                        </li>
                                                        <li>
                                                            <i className="flaticon-square-layouting-with-black-square-in-east-area"></i> Sq
                                                            Ft:3400
                                                        </li>
                                                        <li>
                                                            <i className="flaticon-car-repair"></i> 1 Garage
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="footer">
                                                    <a href="#">
                                                        <i className="fa fa-user"></i> Jhon Doe
                                                    </a>
                                                    <span>
                                                     <i className="fa fa-calendar-o"></i> 2 years ago
                                                </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="property-box">
                                                <div className="property-thumbnail">
                                                    <a href="properties-details.html" className="property-img">
                                                        <div className="tag button alt featured">Featured</div>
                                                        <div className="price-ratings-box">
                                                            <p className="price">
                                                                $178,000
                                                            </p>
                                                            <div className="ratings">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star-o"></i>
                                                            </div>
                                                        </div>
                                                        <img
                                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqz5zchFqgkS5CDzmtyHMz9BBi8EyF68S_NsijMk7lP4E97Lr"
                                                            alt="property-1" className="img-fluid"/>
                                                    </a>
                                                    <div className="property-overlay">
                                                        <a href="properties-details.html" className="overlay-link">
                                                            <i className="fa fa-link"></i>
                                                        </a>
                                                        <a className="overlay-link property-video" title="Test Title">
                                                            <i className="fa fa-video-camera"></i>
                                                        </a>
                                                        <div className="property-magnify-gallery">
                                                            <a href="/img/property-7.jpg" className="overlay-link">
                                                                <i className="fa fa-expand"></i>
                                                            </a>
                                                            <a href="/img/property-6.jpg" className="hidden"></a>
                                                            <a href="/img/property-4.jpg" className="hidden"></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="detail">
                                                    <h1 className="title">
                                                        <a href="properties-details.html">Relaxing Apartment</a>
                                                    </h1>
                                                    <div className="location">
                                                        <a href="properties-details.html">
                                                            <i className="fa fa-map-marker"></i>123 Kathal St. Tampa
                                                            City,
                                                        </a>
                                                    </div>
                                                    <ul className="facilities-list clearfix">
                                                        <li>
                                                            <i className="flaticon-square-layouting-with-black-square-in-east-area"></i> 3
                                                            Bedrooms
                                                        </li>
                                                        <li>
                                                            <i className="flaticon-bath"></i> 2 Bathrooms
                                                        </li>
                                                        <li>
                                                            <i className="flaticon-square-layouting-with-black-square-in-east-area"></i> Sq
                                                            Ft:3400
                                                        </li>
                                                        <li>
                                                            <i className="flaticon-car-repair"></i> 1 Garage
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="footer">
                                                    <a href="#">
                                                        <i className="fa fa-user"></i> Jhon Doe
                                                    </a>
                                                    <span>
                                                    <i className="fa fa-calendar-o"></i> 2 years ago
                                                </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="comments-section">
                        <h3 className="heading">Comments</h3>
                        <ul className="comments">
                            {comments}
                        </ul>
                    </div>

                    {commentForm}
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
