import {
  IMAGE,
} from "../../constants/report"

import {
  SET_REPORT_STATUS,
  SET_REPORT_IMAGE,
  SET_REPORT_LOCATION_SHARED,
  SET_REPORT_LOCATION_FETCHING,
  SET_REPORT_LOCATION_COORDS,
  SET_REPORT_LOCATION_METHOD,
  SET_REPORT_DETAIL,
} from "../../constants/actionsNames";

const initialState = {
  status: IMAGE,
  image: {},
  location: {
    shared: false,
    fetching: false,
    coords: {
      lat: null,
      lng: null,
    },
    method: null,
  },
  details: {
    name: '',
    phone: '',
    email: '',
    notes: '',
    time: null,
  },
  // submission: {
  //   status: null,
  //   error: null,
  // },
};

const status = (state = initialState.status, action) => {
  switch (action.type) {
    case SET_REPORT_STATUS:
      return action.payload;
    default:
      return state;
  }
}

const image = (state = initialState.image, action) => {
  switch (action.type) {
    case SET_REPORT_IMAGE:
      return action.payload;
    default:
      return state;
  }
}

const location = (state = initialState.location, action) => {
  switch(action.type) {
    case SET_REPORT_LOCATION_SHARED:
      return {
        ...state,
        location: action.payload,
      };
    case SET_REPORT_LOCATION_FETCHING:
      return {
        ...state,
        fetching: action.payload,
      };
    case SET_REPORT_LOCATION_COORDS:
      return {
        ...state,
        coords: action.payload,
      };
    case SET_REPORT_LOCATION_METHOD:
      return {
        ...state,
        method: action.payload,
      };
    default:
      return state;
  }
}

const details = (state = initialState.details, action) => {
  switch(action.type) {
    case SET_REPORT_DETAIL:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    default:
      return state;
  }
}

const reportReducer = (state = initialState, action) => {
  // console.log("ACTION:", action);
  return {
    status: status(state.status, action),
    image: image(state.image, action),
    location: location(state.location, action),
    details: details(state.details, action),
  }
};

export default reportReducer;
