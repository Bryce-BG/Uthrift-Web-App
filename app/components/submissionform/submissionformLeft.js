import React from 'react';
import SUBMISSIONFORMPICTURE from './submissionformPicture.js';
import SUBMISSIONFORMDESCRIPTION from './submissionformDescription.js';
import SUBMISSIONFORMSUBMITBTN from './submissionformSubmitBTN.js';



export default class SUBMISSIONFORMLEFT extends React.Component {
  render() {
    return (
      <div>
        {/*<!--- Start Left Side --->*/}

          <div className = "col-md-4 sp42 left-column">

            <SUBMISSIONFORMPICTURE />
            <SUBMISSIONFORMDESCRIPTION />
            <SUBMISSIONFORMSUBMITBTN />

          </div>
        {/*<!--- End Left Side --->*/}

      </div>

    )
  }
}
