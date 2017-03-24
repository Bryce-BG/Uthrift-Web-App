import React from 'react';

export default class ITEM extends React.Component
{
  render() {
    return (
      <div className = "col-md-4 portfolio-item">
          <a href="#">
            <img src={this.props.referance} alt=""/>
          </a>
          <h4 className="description"> {this.props.description} </h4>
          <h3 className="price"> ${this.props.price} </h3>
          {/*<h3>{this.props.name}</h3>*/}
      </div>
    )
  }
}
