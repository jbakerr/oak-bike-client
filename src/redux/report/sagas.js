import { put, call, select, takeLatest } from "redux-saga/effects";

import {
  LOCATION,
  DETAILS,
  USE_MY_LOCATION,
} from "../../constants/report";

import {
  GET_LOCATION_COORDS,
  HANDLE_REPORT_IMAGE_UPLOAD,
} from "../../constants/actionsNames";

import { selectReportLocationMethod } from "./selectors";

import {
  setReportImage,
  setReportStatus,
  setReportLocationShared,
  setReportLocationFetching,
  setReportLocationCoords,
} from "./actions";

import {
  getUserLocation,
  fakeImageUpload,
} from "./effects";

function* getLocationCoords() {
  yield put(setReportLocationFetching(true));

  try {
    const position = yield call(getUserLocation);
    yield put(setReportLocationCoords({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    }));
    yield put(setReportLocationShared(true));

    const method = yield select(selectReportLocationMethod);
    if (method === USE_MY_LOCATION) {
      yield put(setReportStatus(DETAILS));
    }
  } catch (error) {
    console.error(`ERROR: ${error.message}`)
  }

  yield put(setReportLocationFetching(false));
}

function* handleImageUpload(image) {
  try {
    const upload = yield call(fakeImageUpload, image);
    yield put(setReportImage(upload));
    yield put(setReportStatus(LOCATION));
  } catch (error) {
    console.error(`ERROR: ${error.message}`)
  }
}

function* reportSagas() {
  yield takeLatest(GET_LOCATION_COORDS, getLocationCoords);
  yield takeLatest(HANDLE_REPORT_IMAGE_UPLOAD, handleImageUpload);
}

export default reportSagas;
