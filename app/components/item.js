import React from 'react';
import NAVBAR from './navbar.js';
import ITEMHERO from './itemhero.js';
import MOREITEMS from './moreitems.js';
import {getUserDataItem} from '../server';
// import {getItemInfo} from '../server';



export default class ITEM extends React.Component {

  constructor(props) {
    super(props);
		this.state = {
			"_id": "",
      "Email": "",
      "Cellphone": "",
      "FirstName": "",
      "LastName": "",
      "NickName": "",
      "Photo": "",
      "trackList": [],
      "sellingList": [],
      "Password": "",
      "viewingItem": ""
    };
  }

  refresh() {
    window.scrollTo(0,0);
    var callbackFunction = (userData) => {
    this.setState(userData);
    }

    getUserDataItem(this.props.id, this.props.user, callbackFunction);
  }

	componentDidMount(){
		// 	var callbackFunction = (userData) => {
		// 	this.setState(userData);
		// }
    //
		// getUserDataItem(this.props.id, this.props.user, callbackFunction);
    this.refresh();

	}


  render() {
    console.log(this.state.viewingItem);
    return (
      <div>
        <NAVBAR  />
        // <ITEMHERO name={this.state.viewingItem.Title} itembigpic={this.state.viewingItem.photoRef}/>
        <ITEMHERO item={this.state.viewingItem}/>

        <MOREITEMS data={this.state} itemscat="More by Seller"/>

      </div>
    )
  }
}
