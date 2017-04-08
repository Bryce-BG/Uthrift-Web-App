import React from 'react';
import NAVBAR from './navbar.js';
import HOMEPAGEBODY from './homepagebody.js';



export default class HOMEPAGE extends React.Component {
  //console.log("props passed in are:" + this.props);
  render() {
    // console.log("props are");
    // console.log(this.props.UserID);
    //passed in the logged in userid from app.js as this.props.UserID
    return (
      <div>

        <NAVBAR  UserID = {this.props.UserID} />//author = "1"/>

        <HOMEPAGEBODY />

      </div>

    )
  }
}
