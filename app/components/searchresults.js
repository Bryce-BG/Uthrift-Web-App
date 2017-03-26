import React from 'react';
import SEARCHITEM from './searchitem.js';

export default class SEARCHRESULTS extends React.Component{
	render(){
		return(
			<div>
				<h1 className="page-header">Search Result
					<small className="query">{this.props.query}</small>
				</h1>
				<div className="row">
					<SEARCHITEM des="Item 1 Description" src="img/book1.jpg" price = "18.00"/>
					<SEARCHITEM des="Item 2 Description" src="img/book2.jpg" price = "21.00"/>
					<SEARCHITEM des="Item 3 Description" src="img/book3.jpg" price = "25.00"/>
				</div>
				<hr/>
				<div className="row">
					<SEARCHITEM des="Item 4 Description" src="img/book4.jpg" price = "7.50"/>
					<SEARCHITEM des="Item 5 Description" src="img/book5.jpg" price = "5.00"/>
					<SEARCHITEM des="Item 6 Description" src="img/book6.jpg" price = "6.00"/>
        </div>
        <hr/>
			</div>
		)
 }
}
