import React from 'react';
import SEARCHITEM from './searchitem.js';
import SEARCHCLASS from './searchclass.js';
import  {getUserData, getSearch, getClassSearch, getClassItemSearch, getClassItem} from '../server';

export default class SEARCHRESULTS extends React.Component{
	constructor(props) {
    super(props);
    this.state = {
			itemListr: [],
      row1: new Array(3),
			row2: new Array(3),
			searchArray: new Array(2),
			displayTerm: this.props.searchTerm
    };
  }

	refresh() {
		if (this.props.category === "Classes")
		{
			document.getElementById("classes").style.visibility = "visible";
			document.getElementById("items").style.visibility = "hidden";
		}
		else {
			document.getElementById("classes").style.visibility = "hidden";
			document.getElementById("items").style.visibility = "visible";
		}

		var callbackFunction = (itemList) => {
      this.setState({itemListr: itemList});

		};

		var callbackFunction2 = (item) => {
      this.setState({displayTerm: item.Title});

		};

		if(this.props.category === "Classes")
		{
			document.getElementById("items").style.visibility = "hidden";
			getClassSearch(this.props.searchTerm, callbackFunction);

		}
		else
		{
			document.getElementById("classes").style.visibility = "hidden";
			if(this.props.category === "ClassItem"){
				getClassItemSearch(this.props.searchTerm, callbackFunction);
				getClassItem(this.props.searchTerm, callbackFunction2);
			}
			else
				getSearch(this.props.category, this.props.searchTerm, callbackFunction);
		}
	}

	componentDidMount(){
      this.refresh();
  }
  componentDidUpdate (prevProps) {
    // respond to parameter change in scenario 3
    let oldCat = prevProps.category
    let newCat = this.props.category
		let oldItem = prevProps.searchTerm
		let newItem = this.props.searchTerm
		if (this.props.category === "Classes")
		{
			document.getElementById("classes").style.visibility = "visible";
			document.getElementById("items").style.visibility = "hidden";
		}
		else {
			document.getElementById("classes").style.visibility = "hidden";
			document.getElementById("items").style.visibility = "visible";
		}


    if (oldCat !== newCat || oldItem !== newItem){
      this.refresh();
		}
  }

	render(){
		return(
			<div>
				<h1 className="page-header">Search Result
					<small className="query">"{this.state.displayTerm}" in Category "{this.props.category}"</small>
				</h1>
				<div className="row" id = "items">
					{this.state.itemListr.map((items, i) => {


						return(

							<SEARCHITEM key = {i} id={this.state.itemListr[i]._id} des={this.state.itemListr[i].Title} src={this.state.itemListr[i].photoRef} price = {"$" + this.state.itemListr[i].Price}/>
						)
					})}
				</div>

					<div className="row" id = "classes">
						{this.state.itemListr.map((items, i) => {


							return(

								<SEARCHCLASS key = {i} id={this.state.itemListr[i]._id} title={this.state.itemListr[i].title} code={this.state.itemListr[i].code} src={this.state.itemListr[i].Photo} />
							)
						})}



				</div>
				<hr/>

			</div>
		)
 }
}
