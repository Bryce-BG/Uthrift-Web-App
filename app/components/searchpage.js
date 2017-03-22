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
	        				<h1 className="page-header">Search Result    
				                <small> "Books on how to hack life"</small>
				            </h1>
				            <SEARCHRESULTS />
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
