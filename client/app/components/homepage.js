import React from 'react';

import HOMEPAGEBODY from './homepagebody.js';



export default class HOMEPAGE extends React.Component {
  //console.log("props passed in are:" + this.props);
  render() {

    return (
      <div>
        <HOMEPAGEBODY user = {this.props.user} />

      </div>

    )
  }
}
