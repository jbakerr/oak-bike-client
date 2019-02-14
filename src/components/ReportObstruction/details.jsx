import React from "react";
import { connect } from "react-redux";

import {
  selectReportImage,
  selectReportLocationCoords,
  selectReportDetails,
} from "../../redux/report/selectors";

import {
  setReportDetail,
} from "../../redux/report/actions";

const mapStateToProps = (state) => ({
  image: selectReportImage(state),
  coords: selectReportLocationCoords(state),
  details: selectReportDetails(state),
});

const mapDispatchToProps = (dispatch) => ({
  setDetail: (k,v) => dispatch(setReportDetail(k,v)),
});

const ReportDetailsUI = (props) => {
  const {
    image,
    coords,
    details,
    setDetail,
  } = props;

  return (
    <div>
      <p>image url: {image.url}</p>
      <p>coords: [{coords.lat}, {coords.lng}]</p>
      <p>more details...</p>
    </div>
  );
};

const ReportDetails = connect(mapStateToProps, mapDispatchToProps)(ReportDetailsUI);

export default ReportDetails;
