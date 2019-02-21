import React from "react";

// import { SUBMISSION } from "../../constants/report";

const Details = ({upload, location}) => {
  return (
    <>
      <p>upload: {upload.name} ({upload.size} bytes)</p>
      <p>location: [{location.lat}, {location.lng}]</p>
      <p>details...</p>
    </>
  );
};

export default Details;
