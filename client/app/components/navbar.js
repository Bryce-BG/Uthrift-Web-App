import React from 'react';
import RESET from './resetdatabase.js'; //now calling the seperate reset function
import SEARCHBAR from './searchbar.js';
import {Link} from 'react-router';

export default class NAVBAR extends React.Component {

constructor()
{
  super()
  this.state = {
    user: {}
  }
}

render() {
  return (
    <div >
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container" id ="navContainer">
          <div className="row row1">
            <ul className="largenav pull-right">
    
                <li className="upper-links"><Link to={"/submitItem/" + this.props.user}>sell item</Link></li>
                  <li className="upper-links"><Link to={"/profile/" + this.props.user}>Profile</Link></li>
            </ul>
          </div>
          <div className="row row2">
            <div className="col-md-2">
              <Link to={"/"}><span className="largenav" id="largenavlogo"><img src="img/uthrift.png" alt="logo" /></span></Link>
            </div>
              <SEARCHBAR user = {this.props.user}/>
            <div className="cart largenav col-md-2">
              <RESET />
              {/*}<a className="cart-button">
              <svg className="cart-svg " width="16 " height="16 " viewBox="0 0 16 16 ">
              <path d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86 " fill="#fff "></path>
              </svg> Watching
              </a>*/}
            </div>
          </div>
        </div>
      </nav>
      <script src="../database.js"></script>
    </div>
    )
  }
}
