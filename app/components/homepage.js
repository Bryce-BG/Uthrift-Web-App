import React from 'react';
import NAVBAR from './navbar.js';
import HOMEPAGEBODY from './homepagebody.js';



export default class HOMEPAGE extends React.Component {
  render() {
    return (
      <div>
        <NAVBAR  />

        <HOMEPAGEBODY />

      </div>

    )
  }
}
