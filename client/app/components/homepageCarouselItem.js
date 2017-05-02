import React from 'react';
import {Link} from 'react-router';


export default class HOMEPAGECAROUSELITEM extends React.Component
{



  render() {

    return (
      <div className = "col-md-3 middle-carousel-item">

            <Link to={"/ItemPage/" + this.props.id}>

              <img className ="img-responsive" src={this.props.referance} alt= {this.props.name}/>
            </Link>
          <hr />
          <h4>{this.props.name}</h4>
          <p>price: ${this.props.price} </p>


      </div>
    )
  }
}
