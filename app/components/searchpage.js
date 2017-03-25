import React from 'react';
import NAVBAR from './navbar';
import SEARCHPAGINATION from './searchpagination';
import SEARCHRESULTS from './searchresults';

export default class SEARCHPAGE extends React.Component{
	render(){
		return(
			<div>
				<NAVBAR />
				<div className="container content-contain">
					<div className="row">
						<div className="col-md-2 fb-left-sidebar">
						</div>
						<div className="col-md-7">
							<SEARCHRESULTS query=" Books on how to hack life"/>
							<SEARCHPAGINATION />
						</div>
						<div className="col-md-2 fb-right-sidebar">
						</div>
					</div>
				</div>
			</div>
		)
	}
}
