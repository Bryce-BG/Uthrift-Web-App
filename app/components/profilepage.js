import React from 'react';
import NAVBAR from './navbar';
import PROFILEPAGEBODY from './profilepagebody';

export default class PROFILEPAGE extends React.Component{
	render(){
		return(
			<div>
				<NAVBAR  user = {this.props.user} />
				<PROFILEPAGEBODY userID={this.props.user}/>
			</div>
		)
 }
}
