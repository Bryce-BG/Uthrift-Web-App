import React from 'react';
import NAVBAR from './navbar.js';
import CLASSPAGEBODY from './classpagebody.js';

export default class CLASSPAGE extends React.Component {
  render() {
    return (
      <div>
        <NAVBAR />
        <CLASSPAGEBODY />
      </div>
    )
  }
}
