import React from "react";
import Dropzone from "react-dropzone";
import { LOCATION } from "../../constants/report";

const makeid = () => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 24; i += 1) text += possible.charAt(Math.floor(Math.random() * 62));
  return text;
};

const bucketUrl = 'https://s3-us-west-1.amazonaws.com/oak-bike/';

const Upload = ({ setUpload, setStatus }) => {
  const onDrop = async (files) => {
    const file = files[0];
    const fileName = `${makeid()}.${file.type.split('/')[1]}`
    const formData = new FormData();
    formData.append('key', fileName);
    formData.append('file', file);
    fetch(bucketUrl, {
      method: "POST",
      body: formData,
    }).then(response => {
      console.log("response:", response);
      const url = `${bucketUrl}${fileName}`;
      setUpload(url);
      setStatus(LOCATION);
    }).catch(err => {
      console.error("ERROR:", err);
    });    
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
