import React from 'react';

export default class ITEM extends React.Component
{
  render() {
    return (
      <div className = "col-md-4">
          <a href="#">
            <img src={this.props.reference} alt=""/>
          </a>
          <h5 className="description">{this.props.description}</h5>
          <h4 className="price">${this.props.price}</h4>
          {/*<h3>{this.props.name}</h3>*/}
      </div>
    )
  }
}
