import React from 'react';
// import {getItemData} from '../server';
import {Link} from 'react-router';

export default class CLASSITEM extends React.Component{

  render() {
    //console.log(this.props);
    return (
      <div className = "classitem col-md-4">
        <Link to={"/searchPage/" + this.props.user + "/" + "ClassItem" +  "/"  + this.props.item._id}>
          <img src={this.props.item.photoRef} alt=""/>
        </Link>
        <h4 className="title">{this.props.item.Title}</h4>
        <h5 className="description">{this.props.item.Description}</h5>
        {/*<h3>{this.props.name}</h3>*/}
      </div>
    )
  }
}
