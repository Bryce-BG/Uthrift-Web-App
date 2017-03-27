import React from 'react';

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

				<div className="button_shape">
					<button type="button" className="btn btn-default">
						Save
					</button>
				</div>



		</div>
	)
 }
}
