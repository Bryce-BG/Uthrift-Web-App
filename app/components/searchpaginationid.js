import React from 'react';

export default class SEARCHPAGINATIONID extends React.Component{
	render(){
		return(
			<li className={this.props.active}>
				<a href="#" className="pagenum">
					{this.props.pagenum}
				</a>
			</li>
    )
  }
}
