import {Loader} from 'google-maps';

export default interface GoogleMapInputPort {
    getMarkers(): google.maps.Marker[];
    getCurrentLatLng(): google.maps.LatLng;
}