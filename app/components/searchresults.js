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
      //slide3: new Array(3)
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
			for (var i2 = 3; i2 < 6; i2++) {
				tempSlide2[i2-3] = itemList[i2];
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
					{this.state.slide1.map((item) => {
						return (
							<SEARCHITEM key = {item._id} des={item.title} src={item.photoRef} price = {item.Price}/>
						)
					})}
				</div>
				<hr/>
				<div className="row">
					{this.state.slide2.map((item) => {
						return (
							<SEARCHITEM key = {item._id} des={item.title} src={item.photoRef} price = {item.Price}/>
						)
					})}
        </div>
        <hr/>
			</div>
		)
 }
}
