import React from 'react';

import SUBMISSIONFORMBODY from './submissionformBody.js';


export default class SUBMISSIONFORM extends React.Component {
  render() {
    return (
      <div>


        <SUBMISSIONFORMBODY user = {this.props.user}/>

      </div>

    )
  }
}
