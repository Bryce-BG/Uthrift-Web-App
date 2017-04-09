import React from 'react';
import SEARCHITEM from './searchitem.js';
import  {getRecomendedItems} from '../server';

export default class SEARCHRESULTS extends React.Component{
	constructor(props) {
    super(props);
    this.state = {
			itemListr: [],
      row1: new Array(3),
      row2: new Array(3)
    };
  }

	render(){
		return(
			<div>
				<h1 className="page-header">Search Result
					<small className="query">{this.props.query}</small>
				</h1>
				<div className="row">
					<SEARCHITEM des="Item 1 Description" src="img/book1.jpg" price = "18.00"/>
				</div>
				<hr/>
				<div className="row">
					<SEARCHITEM des="Item 4 Description" src="img/book4.jpg" price = "18.00"/>
        </div>
        <hr/>
			</div>
		)
 }
}
