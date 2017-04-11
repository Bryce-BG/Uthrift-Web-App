import React from 'react';
import NAVBAR from './navbar.js';
import CLASSPAGEBODY from './classpagebody.js';

export default class CLASSPAGE extends React.Component {
  render() {
    //console.log(this.props.classID);
    return (
      <div>
        <NAVBAR  user = {this.props.user} />
        <CLASSPAGEBODY classID={this.props.id}/>
      </div>
    )
  }
}
