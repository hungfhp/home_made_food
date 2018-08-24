import {withGoogleMap} from "react-google-maps";
// var distance = require("google-distance");
// import {distance} from "google-distance";

//get location from latitude and longitude
export function getMap (lat, long) {
    const GoogleMapExample = withGoogleMap(props => (
        <GoogleMap
            defaultCenter = { { lat: lat, lng: long } }
            defaultZoom = { 15 }
        >
        </GoogleMap>
    ));
    return GoogleMapExample;
}

export function getDistance(from, to) {
    // distance.get(
    //     {
    //         from: 'Đại học bách Khoa hà nội',
    //         to: 'Đại học ngoại thương'
    //     },
    //     function(err, data) {
    //         if (err) return console.log(err);
    //         console.log(data);
    // });
    return Math.floor(Math.random() * 4); 
}