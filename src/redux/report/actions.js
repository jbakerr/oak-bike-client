import {
  SET_REPORT_STATUS,
  SET_REPORT_IMAGE,
  SET_REPORT_LOCATION_SHARED,
  SET_REPORT_LOCATION_FETCHING,
  SET_REPORT_LOCATION_COORDS,
  SET_REPORT_LOCATION_METHOD,
  SET_REPORT_DETAIL,
  GET_LOCATION_COORDS,
  HANDLE_REPORT_IMAGE_UPLOAD,
} from "../../constants/actionsNames";

export const setReportStatus = (status) => ({
  type: SET_REPORT_STATUS,
  payload: status,
});

export const setReportImage = (image) => ({
  type: SET_REPORT_IMAGE,
  payload: image,
});

export const setReportLocationShared = (shared) => ({
  type: SET_REPORT_LOCATION_SHARED,
  payload: shared,
});

export const setReportLocationFetching = (fetching) => ({
  type: SET_REPORT_LOCATION_FETCHING,
  payload: fetching,
});

export const setReportLocationCoords = (coords) => ({
  type: SET_REPORT_LOCATION_COORDS,
  payload: coords,
});

export const setReportLocationMethod = (method) => ({
  type: SET_REPORT_LOCATION_METHOD,
  payload: method,
});

export const setReportDetail = (key, value) => ({
  type: SET_REPORT_DETAIL,
  payload: {
    key,
    value,
  },
});

export const getReportLocationCoords = () => ({
  type: GET_LOCATION_COORDS,
});

export const handleReportImageUpload = (image) => ({
  type: HANDLE_REPORT_IMAGE_UPLOAD,
  payload: image,
});
