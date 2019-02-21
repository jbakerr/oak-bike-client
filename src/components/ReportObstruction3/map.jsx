import React, { useState } from "react";
import { connect } from "react-redux";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { coordsOakland } from "../../constants/report";
import { DETAILS } from "../../constants/report";
import { setReportLocationCoords, setReportStatus } from "../../redux/report/actions";

const mapDispatchToProps = (dispatch) => ({
  setCoords: (coords) => dispatch(setReportLocationCoords(coords)),
  setStatus: (status) => dispatch(setReportStatus(status)),
});

const MapComponentUI = (props) => {
  const [center, setCenter] = useState(coordsOakland);
  const [mapRef, setMapRef] = useState();
  const move = () => setCenter(mapRef.getCenter().toJSON());
  const next = () => {
    props.setCoords(center);
    props.setStatus(DETAILS);
  };
  return (
    <>
      <GoogleMap
        defaultZoom={13}
        defaultCenter={coordsOakland}
        ref={map => setMapRef(map)}
        onCenterChanged={move}
      >
        <Marker position={{ ...center }} />
      </GoogleMap>
      <button onClick={next}>Save Location</button>
    </>
  );
}

const MapComponent = connect(null, mapDispatchToProps)(MapComponentUI);

const WrappedMapComponent = withScriptjs(withGoogleMap((props) => <MapComponent/>));

const Map = () => <WrappedMapComponent
  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAzDhdx-kNuTA5c8jSobJxl8wv0N9KEcfo"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>

export default Map;
