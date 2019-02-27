import React from "react";
import Dropzone from "react-dropzone";
import { LOCATION } from "../../constants/report";

// import { fakeImageUpload } from "../../utils/report";

// import s3 from "aws-sdk/clients/s3";
import S3 from "aws-s3";
const s3Config = {
  bucketName: "oak-bike",
  region: "us-west-1",
};
const s3Client = new S3(s3Config);

const Upload = ({ setUpload, setStatus }) => {
  const onDrop = async (files) => {
    const file = files[0];
    await s3Client.uploadFile(file)
      .then(data => { console.log("data:", data); })
      .catch(err => { console.log("err:", err); });
    console.log("this");
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
