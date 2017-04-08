import React from 'react';
import SEARCHITEM from './searchitem.js';
import  {getRecomendedItems} from '../server';

export default class SEARCHRESULTS extends React.Component{
	constructor(props) {
    super(props);
    this.state = {
			itemListr: [],
      slide1: new Array(3),
      slide2: new Array(3)
    };
  }

	componentDidMount() {
		var callbackFunction = (itemList) => {
			this.setState({itemListr: itemList});
			var tempSlide1 = new Array(3);
			for (var i = 0; i < 3; i++) {
				tempSlide1[i] = itemList[i];
			}
			this.setState({slide1: tempSlide1})

			var tempSlide2 = new Array(3);
			for (var i = 3; i < 6; i++) {
				tempSlide2[i-3] = itemList[i];
			}
			this.setState({slide2: tempSlide2})
		};
		getRecomendedItems(callbackFunction);
	}

	render(){
		return(
			<div>
				<h1 className="page-header">Search Result
					<small className="query">{this.props.query}</small>
				</h1>
				<div className="row">
					<SEARCHITEM des="Item 1 Description" src="img/book1.jpg" price = "18.00"/>
					<SEARCHITEM des="Item 2 Description" src="img/book2.jpg" price = "18.00"/>
					<SEARCHITEM des="Item 3 Description" src="img/book3.jpg" price = "18.00"/>
				</div>
				<hr/>
				<div className="row">
					<SEARCHITEM des="Item 4 Description" src="img/book4.jpg" price = "18.00"/>
					<SEARCHITEM des="Item 5 Description" src="img/book5.jpg" price = "18.00"/>
        </div>
        <hr/>
			</div>
		)
 }
}
