import React from 'react';

export default class SEARCHRESULTS extends React.Component{
	render(){
		return(
			<div>
				<div className="row">
	                <div className="col-md-4 portfolio-item">
	                    <a href="javascript:;" data-name="btnAddToFavorites" data-gid="92" className="fav-it">
	                    	<i className="fa fa-heart-o"></i>
	                    </a>
	                    <a href="#">
           					<img src="img/book1.jpg"/>
                        </a>
	                    <span className="glyphicon glyphicon-heart-empty"></span>
	                    <p className = "des"> Item 1 Description </p>
	                    <p className = "price"> $18.00 </p>
	                </div>
	                <div className="col-md-4 portfolio-item">
	                    <a href="javascript:;" data-name="btnAddToFavorites" data-gid="92" className="fav-it">
	                    	<i className="fa fa-heart-o"></i>
	                    </a>
	                    <a href="#">
           					<img src="img/book2.jpg"/>
                        </a>
	                    <span className="glyphicon glyphicon-heart-empty"></span>
	                    <p className = "des"> Item 2 Description </p>
	                    <p className = "price"> $21.00 </p>
	                </div>
					<div className="col-md-4 portfolio-item">
	                    <a href="javascript:;" data-name="btnAddToFavorites" data-gid="92" className="fav-it">
	                    	<i className="fa fa-heart-o"></i>
	                    </a>
	                    <a href="#">
           					<img src="img/book3.jpg"/>
                        </a>
	                    <span className="glyphicon glyphicon-heart-empty"></span>
	                    <p className = "des"> Item 3 Description </p>
	                    <p className = "price"> $25.00 </p>
	                </div>	                
            	</div>
            	<hr/>
            	<div className="row">
	                <div className="col-md-4 portfolio-item">
	                    <a href="javascript:;" data-name="btnAddToFavorites" data-gid="92" className="fav-it">
	                    	<i className="fa fa-heart-o"></i>
	                    </a>
	                    <a href="#">
           					<img src="img/book4.jpg"/>
                        </a>
	                    <span className="glyphicon glyphicon-heart-empty"></span>
	                    <p className = "des"> Item 4 Description </p>
	                    <p className = "price"> $7.50 </p>
	                </div>
	                <div className="col-md-4 portfolio-item">
	                    <a href="javascript:;" data-name="btnAddToFavorites" data-gid="92" className="fav-it">
	                    	<i className="fa fa-heart-o"></i>
	                    </a>
	                    <a href="#">
           					<img src="img/book5.jpg"/>
                        </a>
	                    <span className="glyphicon glyphicon-heart-empty"></span>
	                    <p className = "des"> Item 5 Description </p>
	                    <p className = "price"> $5.00 </p>
	                </div>
					<div className="col-md-4 portfolio-item">
	                    <a href="javascript:;" data-name="btnAddToFavorites" data-gid="92" className="fav-it">
	                    	<i className="fa fa-heart-o"></i>
	                    </a>
	                    <a href="#">
           					<img src="img/book6.jpg"/>
                        </a>
	                    <span className="glyphicon glyphicon-heart-empty"></span>
	                    <p className = "des"> Item 6 Description </p>
	                    <p className = "price"> $6.00 </p>
	                </div>	                
            	</div>
            	<hr/>
			</div>
	 )
 }
}