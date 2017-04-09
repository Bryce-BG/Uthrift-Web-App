import React from 'react';

export default class SEARCHITEM extends React.Component
{
  render() {
    return (
      <div className="col-md-4 portfolio-item">
          <a href="#">
            <img src={this.props.src}/>
          </a>
          <span className="glyphicon glyphicon-heart-empty"></span>
          <p className="des">{this.props.des}</p>
          <p className="price">${this.props.price}</p>
      </div>
    )
  }
}
