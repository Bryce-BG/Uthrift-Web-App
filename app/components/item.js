import React from 'react';
import NAVBAR from './navbar.js';
import ITEMHERO from './itemhero.js';
import MOREITEMS from './moreitems.js';
import {getUserData} from '../server';
import {getItemInfo} from '../server';



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

	componentDidMount(){
			var callbackFunction = (userData) => {
			this.setState(userData);
		}

		getUserData(this.props.user, callbackFunction);

	}


  render() {
    return (
      <div>
        <NAVBAR  user = {this.props.user} />
        <ITEMHERO name="i>clicker" itembigpic="img/dummy-item-main.jpg"/>

        <MOREITEMS data={this.state} itemscat="More by Seller"/>

      </div>
    )
  }
}
