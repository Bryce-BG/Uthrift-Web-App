import React from 'react';
// import {getItemData} from '../server';
//import {Link} from 'react-router';

export default class CLASSITEM extends React.Component{

  render() {
    //console.log(this.props);
    return (
      <div className = "col-md-4">
          <a href={"#/classPage/" + 2}>
            <img src={this.props.item.photoRef} alt=""/>
          </a>
          <h5 className="description">{this.props.item.Description}</h5>
          <h4 className="price">${this.props.item.Price}</h4>
          {/*<h3>{this.props.name}</h3>*/}
      </div>
    )
  }
}
