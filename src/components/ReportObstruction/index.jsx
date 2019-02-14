import React from "react";
import { connect } from "react-redux";

import {
  IMAGE,
  LOCATION,
  DETAILS,
} from "../../constants/report"

import { selectReportStatus } from "../../redux/report/selectors";

import ReportImage from "./image";
import ReportLocation from "./location";
import ReportDetails from "./details"

const mapStateToProps = (state) => ({
  status: selectReportStatus(state),
});

const ReportObstructionUI = (props) => {
  const { status } = props;

  switch (status) {
    case IMAGE: return <ReportImage/>;
    case LOCATION: return <ReportLocation/>;
    case DETAILS: return <ReportDetails/>;
    default: return <p>wat</p>;
  }
};

const ReportObstruction = connect(mapStateToProps, null)(ReportObstructionUI);

export default ReportObstruction;
