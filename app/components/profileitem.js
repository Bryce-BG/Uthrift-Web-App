import React from 'react';

export default class PROFILESELLINGHISTORY extends React.Component{
	render(){
		return(
      <div className="col-md-2">
        <div className="row">
          <a href={"#/ItemPage/" + this.props.id}><img src={this.props.img} width="100" height="100" /></a>
        </div>
        <div className="row">
					<a href="#">{this.props.name}</a>
        </div>
        <div className="row">
          Status: <font color={this.props.color}>{this.props.status}</font>
        </div>
      </div>
    )
  }
}
