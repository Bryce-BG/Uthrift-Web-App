import React from 'react';

export default class SUBMISSIONFORMSUBMITBTN extends React.Component {
  render() {
    return (
      <div>
        {/*<!--- Submit Button --->*/}
        <div className="form-group row">
          <div className="col-md-3 sp24"></div>
          <div className="col-md-3">
            <button type="submit" className="btn btn-primary">Post for Sale</button>
          </div>
        </div>
      </div>


    )
  }
}
