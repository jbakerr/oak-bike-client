import React, { useState } from "react";

import {
  UPLOAD,
  LOCATION,
  DETAILS,
  SUBMISSION,
  COMPLETE,
  coordsOakland,
  // initDetails,
} from "../../constants/report";

import Upload from "./Upload";
import Location from "./Location";
import Details from "./Details";

const ReportObstruction = () => {
  const [status, setStatus] = useState(UPLOAD);
  const [upload, setUpload] = useState({});
  const [location, setLocation] = useState(coordsOakland);
  // const [details, setDetails] = useState(initDetails);
  // const updateDetail = ([key, val]) => setDetails({ ...details, [key]: val });

  // const handleSubmit = () => {
  //   console.log("submit!")
  // }

  switch(status) {
    case UPLOAD:
      return (
        <Upload
          setStatus={setStatus}
          setUpload={setUpload}
        />
      );
    case LOCATION:
      return (
        <Location
          initCenter={coordsOakland}
          initZoom={14}
          setLocation={setLocation}
          setStatus={setStatus}
        />
      );
    case DETAILS:
      return (
        <Details
          upload={upload}
          location={location}
        />
      );
    case SUBMISSION:
      return (<p>...</p>);
    case COMPLETE:
      return (<p>...</p>);
    default:
      return null;    
  }
};

export default ReportObstruction;
