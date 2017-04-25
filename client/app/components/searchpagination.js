import React from 'react';
import SEARCHPAGINATIONID from './searchpaginationid.js';

export default class SEARCHPAGINATION extends React.Component{
	render(){
		return(
			<div>
				<div className="row text-center">
					<div className="col-lg-12">
						<ul className="pagination">
							<li>
								<a href="#">&laquo;</a>
							</li>
							<SEARCHPAGINATIONID active="active" pagenum="1"/>
							<SEARCHPAGINATIONID pagenum="2"/>
							<SEARCHPAGINATIONID pagenum="3"/>
							<SEARCHPAGINATIONID pagenum="4"/>
							<SEARCHPAGINATIONID pagenum="5"/>
							<li>
								<a href="#">&raquo;</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
 }
}
