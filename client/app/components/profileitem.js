import React from 'react';
import {Link} from 'react-router';

export default class PROFILESELLINGHISTORY extends React.Component{
	render(){
		return(
      <div className="col-md-2 profile-item-setsize">
        <div className="row">
          <Link to={"/itemPage/" + this.props.id}><img src={this.props.img} width="100" height="100" /></Link>
        </div>
        <div className="row">
					<Link to={"/itemPage/" + this.props.id}>{this.props.name}</Link>
        </div>
        <div className="row">
          Status: <font color={this.props.color}>{this.props.status}</font>
        </div>
      </div>
    )
  }
}
