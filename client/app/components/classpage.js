import React from 'react';
import CLASSPAGEBODY from './classpagebody.js';

export default class CLASSPAGE extends React.Component {
  render() {
    //console.log(this.props.classID);
    return (
      <div>

        <CLASSPAGEBODY userID ={this.props.user} classID={this.props.id}/>
      </div>
    )
  }
}
