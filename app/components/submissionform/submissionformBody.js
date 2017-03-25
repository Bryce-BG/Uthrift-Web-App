import React from 'react';
import SUBMISSIONFORMLEFT from './submissionformLeft.js';


export default class SUBMISSIONFORMBODY extends React.Component {
  render() {
    return (
      <div className = "container content-contain">
        {/*<!-- Start Heading -->*/}
        <div className="row">
            <div className="col-md-12">
                <h1 className="page-header">Submit an Item for Sale</h1>
            </div>
        </div>
        {/*<!-- End Heading -->*/}

        <div className = "row">

          <SUBMISSIONFORMLEFT />


        </div>
      </div>


    )
  }
}
