import React from 'react';
import {Link} from 'react-router';

export default class SEARCHCLASS extends React.Component
{
  render() {
    return (
      <div className="col-md-4 portfolio-item">
          <Link to={"/classPage/" + this.props.id}>
            <img src={this.props.src}/>
          </Link>

          <p className="title">{this.props.title}</p>
      </div>
    )
  }
}
