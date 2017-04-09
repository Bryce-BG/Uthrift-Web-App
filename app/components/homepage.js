import React from 'react';
import NAVBAR from './navbar.js';
import HOMEPAGEBODY from './homepagebody.js';



export default class HOMEPAGE extends React.Component {
  //console.log("props passed in are:" + this.props);
  render() {
    
    return (
      <div>

        <NAVBAR  UserID = {this.props.UserID} />

        <HOMEPAGEBODY />

      </div>

    )
  }
}
