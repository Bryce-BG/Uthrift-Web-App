import React from 'react';
import SUBMISSIONFORMCLASS from './submissionformClass.js';
import SUBMISSIONFORMCATEGORY from './submissionformCategory.js';



export default class SUBMISSIONFORMRIGHT extends React.Component {
  render() {
    return (
      <div>

          <div className = "col-md-7" htmlStyle="padding-bottom: 50px;">
        <SUBMISSIONFORMCLASS />

        <SUBMISSIONFORMCATEGORY />
          </div>
      </div>

    )
  }
}
