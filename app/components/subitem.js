import React from 'react';
import {Link} from 'react-router';

export default class SUBITEM extends React.Component {
  render() {
    return (
      <div className="col-md-3">
          <Link to={"/ItemPage/" + this.props.id}>
              <img className="img-responsive item" src={this.props.subitemimgsrc} alt="" />
          </Link>
          <h5 className="item-title-related">{this.props.subitemname}: </h5>
          <h5>Condition is: {this.props.subitemcondition}</h5>
      </div>
    )
  }
}
