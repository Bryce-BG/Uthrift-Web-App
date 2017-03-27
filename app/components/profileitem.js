import React from 'react';

export default class PROFILESELLINGHISTORY extends React.Component{
	render(){
		return(
      <div className="col-md-2">
        <div className="row">
          <a href="#"><img src={this.props.img} width="80" height="80" /></a>
        </div>
        <div className="row center">
          <a href="#">{this.props.name}</a>
        </div>
        <div className="row">
          Status: <font color={this.props.color}>{this.props.status}</font>
        </div>
      </div>
    )
  }
}
