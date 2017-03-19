import React from 'react';
import PROFILESAVE from './profilesave';
import PROFILEINFORMATION from './profileinformation';
import PROFILESELLINGHISTORY from './profilesellinghistory';

export default class PROFILEPAGE extends React.Component{
	render(){
		return(
			<div>
        <div className="container">
          <PROFILEINFORMATION />
          <PROFILESELLINGHISTORY />
        </div>

        <PROFILESAVE />
		  </div>
	 )
 }
}
