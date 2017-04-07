import React from 'react';
import {getUserData} from '../server';

import PROFILEINFORMATION from './profileinformation';
import PROFILESELLINGHISTORY from './profilesellinghistory';

export default class PROFILEPAGE extends React.Component{
	render(){
		var userData = getUserData(this.props.userID);

		return(
			<div>
        <div className="container">
          <PROFILEINFORMATION data={userData}/>
          <PROFILESELLINGHISTORY data={userData}/>
        </div>

				<div className="button_shape">
					<button type="button" className="btn btn-default">
						Save
					</button>
				</div>

		</div>
	)
 }
}
