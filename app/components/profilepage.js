import React from 'react';
import NAVBAR from './navbar';
import PROFILEPAGEBODY from './profilepagebody';

export default class PROFILEPAGE extends React.Component{
	render(){
		return(
			<div>
				<NAVBAR />
				<PROFILEPAGEBODY />
			</div>
		)
 }
}
