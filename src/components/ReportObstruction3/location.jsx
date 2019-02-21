import React from "react";
import { connect } from "react-redux";

import { USE_MY_LOCATION, DROP_PIN_ON_MAP, ENTER_ADDRESS, } from "../../constants/report";

import { selectReportLocationMethod, } from "../../redux/report/selectors";

import { setReportLocationMethod, getReportLocationCoords, } from "../../redux/report/actions";

import Map from "./map";
import Address from "./address";

const mapStateToProps = (state) => ({
  method: selectReportLocationMethod(state),
});

const mapDispatchToProps = (dispatch) => ({
  setMethod: (method) => dispatch(setReportLocationMethod(method)),
  getCoords: () => dispatch(getReportLocationCoords()),
});

const ReportLocationUI = (props) => {
  const {
    method,
    setMethod,
    getCoords,
  } = props;

  const useMyLocation = () => {
    setMethod(USE_MY_LOCATION);
    getCoords();
  }

  const dropPinOnMap = () => {
    setMethod(DROP_PIN_ON_MAP);
    getCoords();
  }

  const enterAddress = () => {
    setMethod(ENTER_ADDRESS);
  }

  switch(method) {
    case USE_MY_LOCATION: return <p>fetching location...</p>;
    case DROP_PIN_ON_MAP: return <Map/>;
    case ENTER_ADDRESS: return <Address/>;
    default: return (
      <div>
        <button onClick={useMyLocation}>Use My Location</button>
        <button onClick={dropPinOnMap}>Drop Pin on Map</button>
        <button onClick={enterAddress}>Enter Address</button>
      </div>
    );
  }
};

const ReportLocation = connect(mapStateToProps, mapDispatchToProps)(ReportLocationUI);

export default ReportLocation;
