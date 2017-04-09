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

	componentDidMount() {
		var callbackFunction = (itemList) => {
			this.setState({itemListr: itemList});
			var tempSlide1 = new Array(3);
			for (var i = 0; i < 3; i++) {
				tempSlide1[i] = itemList[i];
			}
			this.setState({row1: tempSlide1})

			var tempSlide2 = new Array(3);
			for (var i = 3; i < 6; i++) {
				tempSlide2[i-3] = itemList[i];
			}
			this.setState({row2: tempSlide2})
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
					{this.state.row1.map((item) => {
						return (
							<SEARCHITEM des={item.Description} src={item.photoRef} price = {item.Price}/>
						)
					})}
					//<SEARCHITEM des="Item 1 Description" src="img/book1.jpg" price = "18.00"/>
				</div>
				<hr/>
				<div className="row">
					{this.state.row2.map((item) => {
						return (
							<SEARCHITEM des={item.Description} src={item.photoRef} price = {item.Price}/>
						)
					})}
					//<SEARCHITEM des="Item 4 Description" src="img/book4.jpg" price = "18.00"/>
        </div>
        <hr/>
			</div>
		)
 }
}
