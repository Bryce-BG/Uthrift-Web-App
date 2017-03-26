import React from 'react';
import PROFILESAVE from './profilesave';
import PROFILEINFORMATION from './profileinformation';
import PROFILESELLINGHISTORY from './profilesellinghistory';

export default class PROFILEPAGE extends React.Component{
	render(){
		return(
			<div>
        <div className="container">
          <PROFILEINFORMATION nickname="Eric" password="123456789" email="yixiangxu@umass.edu" tel="(413)406-8347"/>
          <PROFILESELLINGHISTORY />
        </div>

        <PROFILESAVE />
		  </div>
	 )
 }
}
