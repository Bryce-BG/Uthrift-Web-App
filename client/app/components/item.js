import React from 'react';
import ITEMHERO from './itemhero.js';
import MOREITEMS from './moreitems.js';
import {getUserDataItem} from '../server';




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
    this.refresh();

	}

  componentDidUpdate (prevProps) {
    // respond to parameter change in scenario 3
    let oldId = prevProps.id
    let newId = this.props.id
    if (newId !== oldId)
      this.refresh();
  }

  render() {
    return (
      <div>

        <ITEMHERO name={this.state.viewingItem.Title} itembigpic={this.state.viewingItem.photoRef}
          descriptionparagraph={this.state.viewingItem.Description}
          condition={this.state.viewingItem.Condition}
          price={this.state.viewingItem.Price}
          seller={this.state.FirstName}
          sellerEmail={this.state.Email}
          sellerPhone={this.state.Cellphone}
          />

        <MOREITEMS data={this.state} itemscat="More by Seller"/>

      </div>
    )
  }
}
