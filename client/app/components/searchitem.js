import React from 'react';
import {Link} from 'react-router';

export default class SEARCHITEM extends React.Component
{
  render() {
    return (
      <div className="col-md-4 portfolio-item">
          <Link to={"/ItemPage/" + this.props.id}>
            <img src={this.props.src}/>
          </Link>
          <span className="glyphicon glyphicon-heart-empty"></span>
          <p className="des">{this.props.des}</p>
          <p className="price">{this.props.price}</p>
      </div>
    )
  }
}
