import React from 'react';
import HOMEPAGECAROUSELITEM from './homepageCarouselItem.js';

export default class HOMEPAGEBODY extends React.Component
{
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
              <HOMEPAGECAROUSELITEM name="book 50 bout bla" referance="img/book1.jpg" price = "#10,000,000"/>
              <HOMEPAGECAROUSELITEM name="book2" referance="img/book2.jpg" price = "$100,000"/>
              <HOMEPAGECAROUSELITEM name="book3" referance="img/book3.jpg" price = "$10,000"/>
              </div>

              <div className="item col-md-offset-1">
              <HOMEPAGECAROUSELITEM name="Iclicker" referance="img/iclicker.jpg" price = "$10,000"/>
              <HOMEPAGECAROUSELITEM name="Iclicker" referance="img/iclicker.jpg" price = "$10,000"/>
              <HOMEPAGECAROUSELITEM name="Iclicker" referance="img/iclicker.jpg" price = "$10,000"/>
              </div>

              <div className="item col-md-offset-1">
                <HOMEPAGECAROUSELITEM name="Iclicker" referance="img/iclicker.jpg" price = "$10,000"/>
                <HOMEPAGECAROUSELITEM name="Iclicker" referance="img/iclicker.jpg" price = "$10,000"/>
                <HOMEPAGECAROUSELITEM name="Iclicker" referance="img/iclicker.jpg" price = "$10,000"/>
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
