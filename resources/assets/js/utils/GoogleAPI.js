import {withGoogleMap} from "react-google-maps";

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

