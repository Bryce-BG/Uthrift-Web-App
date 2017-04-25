import React from 'react';
import {Link} from 'react-router';


export default class HOMEPAGECAROUSELITEM extends React.Component
{



  render() {

    return (
      <div className = "col-md-3 middle-carousel-item">
          <h3>{this.props.name}</h3>
            <Link to={"/ItemPage/" + this.props.id}>
              <img className ="img-responsive" src={this.props.referance} alt= {this.props.name}/>
            </Link>
          <hr />
          <p>price: ${this.props.price} </p>


      </div>
    )
  }
}
