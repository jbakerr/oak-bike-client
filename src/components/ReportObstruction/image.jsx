import React from "react";
import { connect } from "react-redux";
import Dropzone from "react-dropzone";

import {
  handleReportImageUpload,
} from "../../redux/report/actions";

const mapDispatchToProps = (dispatch) => ({
  uploadImage: (image) => dispatch(handleReportImageUpload(image)),
});

const ReportImageUI = (props) => {

  const onDrop = files => props.uploadImage(files[0]);

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

const ReportImage = connect(null, mapDispatchToProps)(ReportImageUI);

export default ReportImage;
