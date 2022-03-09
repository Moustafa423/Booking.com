import React from "react";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import { useParams } from "react-router";

export default function CustomMap(props) {
  const MapWithAMarker = withScriptjs(
    withGoogleMap(() => (
      <GoogleMap
        defaultZoom={7}
        defaultCenter={{
          lat: props.property.location.lat,
          lng: props.property.location.lng,
        }}
      >
        <Marker
          position={{
            lat: props.property.location.lat,
            lng: props.property.location.lng,
          }}
        />
      </GoogleMap>
    ))
  );
  return (
    <div>
      <MapWithAMarker
        googleMapURL=" https://maps.googleapis.com/maps/api/js?key=AIzaSyD017M6hIYH7wqssOlEDzwzKApuA6VrAVE&v=beta&callback=initMap"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
