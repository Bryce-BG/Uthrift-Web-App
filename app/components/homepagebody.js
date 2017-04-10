import React from 'react';
import HOMEPAGECAROUSELITEM from './homepageCarouselItem.js';
import  {getRecomendedItems} from '../server';
export default class HOMEPAGEBODY extends React.Component
{


  constructor(props) {
        super(props);
        this.state = {
          itemListr: [],
          slide1: new Array(3),
          slide2: new Array(3),
          slide3: new Array(3)
        };


          // console.log("state is:");
          // console.log(this.state);
      }

componentDidMount()
{


// console.log("init state");
//   console.log(this.state);
  var callbackFunction = (itemList) => {

            // console.log("passed into the callback was: ");
            // console.log( itemList);
            this.setState({itemListr: itemList});
          var tempSlide1 = new Array(3);
          for (var i = 0; i < 3; i++) {
            tempSlide1[i] = itemList[i];
          }
          this.setState({slide1: tempSlide1})


          var tempSlide2 = new Array(3);
          for (var i = 3; i < 6; i++) {
            tempSlide2[i-3] = itemList[i];
          }
          this.setState({slide2: tempSlide2})

          var tempSlide3 = new Array(3);
          for (var i = 6; i < 9; i++) {
            tempSlide3[i-6] = itemList[i];
          }
          this.setState({slide3: tempSlide3})
          // console.log("slide 3 is");
          // console.log(this.state.slide3);
          //
          // console.log("state is:");
          // console.log(this.state);

            };

   getRecomendedItems(callbackFunction);
    // console.log("itemlistr is")
    // console.log(this.state.itemListr);

}





  render() {
    return (
      <div className="container content-contain" id="main-content">

        <div id="myCarousel" className="carousel slide" data-ride="carousel">

            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>


            <div className="carousel-inner" role="listbox">
              <div className="item active">
                 <img src="img/uthriftslide1.jpg" alt="random" />
              </div>

              <div className="item">
                <img src="img/iclickerslide2.jpg" alt="random" />
              </div>

              <div className="item">
                <img src="img/textslide3.jpg" alt="random" />
              </div>
            </div>



            <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>

        <br />
        <hr/ >

        <h2>Recomended items</h2>
        <div id="myCarousel2" className="carousel slide" data-ride="carousel">

            <ol className="carousel-indicators">
              <li data-target="#myCarousel2" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel2" data-slide-to="1"></li>
              <li data-target="#myCarousel2" data-slide-to="2"></li>
            </ol>


            <div className="carousel-inner" role="listbox">
              <div className="item active col-md-offset-1">


                {this.state.slide1.map((item) => {
                  return (

                    <HOMEPAGECAROUSELITEM  item = {item} key = {item._id} id={item._id} name={item.Title} referance={item.photoRef} price = {item.Price}/>
                  )
                })}





              </div>

              <div className="item col-md-offset-1">
                {this.state.slide2.map((item) => {
                  return (

                    <HOMEPAGECAROUSELITEM key = {3+item._id} id={item._id} name={item.Title} referance={item.photoRef} price = {item.Price}/>
                  )
                })}
              </div>

              <div className="item col-md-offset-1">
                {this.state.slide3.map((item, i) => {
                  return (

                    <HOMEPAGECAROUSELITEM key = {6+i} id={item._id} name={item.Title} referance={item.photoRef} price = {item.Price}/>
                  )
                })}

              </div>
            </div>



            <a className="left carousel-control" href="#myCarousel2" role="button" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel2" role="button" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>

          <hr />
          <br /><br />

      </div>










    )
  }
}
