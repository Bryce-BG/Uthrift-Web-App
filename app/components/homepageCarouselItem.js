import React from 'react';



export default class HOMEPAGECAROUSELITEM extends React.Component
{



  render() {
    console.log(this.props.name);
    return (
      <div className = "col-md-3 middle-carousel-item">
          <h3>{this.props.name}</h3>
          <img className ="img-responsive" src={this.props.referance} alt= {this.props.name}/>
          <hr />
          <p>price: ${this.props.price} </p>
          

      </div>
    )
  }
}
