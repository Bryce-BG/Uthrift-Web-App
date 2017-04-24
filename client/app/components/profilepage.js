import React from 'react';

import PROFILEPAGEBODY from './profilepagebody';

export default class PROFILEPAGE extends React.Component{
	render(){
		return(
			<div>
				<PROFILEPAGEBODY userID={this.props.user}/>
			</div>
		)
 }
}
