import React from 'react';



export default class SUBMISSIONFORMPICTURE extends React.Component {
  render() {
    return (
      <div>
      {/*<!--- Start Upload Picture --->*/}
        <img className = "photo-entry main-photo" src="img/war_peace2.jpg" width="100%"/>

          <div className="photo-entry">
            <label htmlFor="photoUpload1">Upload Photo</label>
            <input type="file" className="form-control-file" id="photoUpload1" aria-describedby="fileHelp"/>
          </div>

          <label htmlFor="photoUpload2">OR drag and drop files below:</label>
          <div className="upload-drop-zone" id="photoUpload2">
            Just drag and drop files here
          </div>
        {/*  <!--- End Upload Picture --->*/}
      </div>

    )
  }
}
