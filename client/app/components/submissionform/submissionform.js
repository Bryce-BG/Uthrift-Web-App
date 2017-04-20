import React from 'react';
import NAVBAR from '../navbar.js';
import SUBMISSIONFORMBODY from './submissionformBody.js';


export default class SUBMISSIONFORM extends React.Component {
  render() {
    return (
      <div>
        <NAVBAR />

        <SUBMISSIONFORMBODY />

      </div>

    )
  }
}
