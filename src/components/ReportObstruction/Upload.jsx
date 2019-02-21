import React from "react";
import Dropzone from "react-dropzone";
import { LOCATION } from "../../constants/report";

// import { fakeImageUpload } from "../../utils/report";

const Upload = ({ setUpload, setStatus }) => {
  const onDrop = async (files) => {
    console.log("uploading:", files[0]);
    setUpload(files[0]);
    setStatus(LOCATION);
  }

  return (
    <Dropzone onDrop={onDrop}>
      {({getRootProps, getInputProps, isDragActive}) => {
        return (
          <div
            {...getRootProps()}
            className={`dropzone ${isDragActive ? 'dropzone--isActive' : ''}`}
          >
            <input {...getInputProps()} />
            {
              isDragActive ?
                <p>Drop files here...</p> :
                <p>Try dropping some files here, or click to select files to upload.</p>
            }
          </div>
        )
      }}
    </Dropzone>  
  );
};

export default Upload;
