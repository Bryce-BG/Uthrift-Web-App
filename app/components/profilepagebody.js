import React from 'react';
import {getUserData} from '../server';

import PROFILEINFORMATION from './profileinformation';
import PROFILESELLINGHISTORY from './profilesellinghistory';

export default class PROFILEPAGE extends React.Component{
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
      "Password": ""
    };
  }

	componentDidMount(){
			var callbackFunction = (userData) => {
			this.setState(userData);
		}
		getUserData(this.props.userID, callbackFunction);
	}

	render(){
		if (this.state._id != ""){
			return(
				<div>
					<div className="container">
						<PROFILEINFORMATION data={this.state}/>
						<PROFILESELLINGHISTORY data={this.state}/>
					</div>
				</div>
			)
		}
		else{
			return(<div></div>)
		}
 }
}
