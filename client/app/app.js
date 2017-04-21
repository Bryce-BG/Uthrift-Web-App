/*import React from 'react';
import ReactDOM from 'react-dom';


// Each major browser view user interface must be imported.
import HOMEPAGE from './components/homepage.js';
import PROFILEPAGE from './components/profilepage.js';
import SEARCHPAGE from './components/searchpage.js';
import ITEM from './components/item.js';
import CLASSPAGE from './components/classpage.js';
import SUBMISSIONFORM from './components/submissionform/submissionform.js';

// For each view conditionally determine which view to display
// depending on if the ID is present in the HTML.



const loggedInUserid= "1";


if (document.getElementById('homepage') !== null) {
  ReactDOM.render(
    <HOMEPAGE UserID = {loggedInUserid} />,
    document.getElementById('homepage')
  );
}


else if (document.getElementById('profilepage') !== null) {
  ReactDOM.render(
    <PROFILEPAGE UserID = {loggedInUserid} />,
    document.getElementById('profilepage')
  );
}


else if (document.getElementById('searchpage') !== null) {
  ReactDOM.render(
    <SEARCHPAGE UserID = {loggedInUserid}/>,
    document.getElementById('searchpage')
  );
}

else if (document.getElementById('item') !== null) {
  ReactDOM.render(
    <ITEM UserID = {loggedInUserid}/>,
    document.getElementById('item')
  );
}

else if (document.getElementById('classpage') !== null) {
  ReactDOM.render(
    <CLASSPAGE UserID = {loggedInUserid}/>,
    document.getElementById('classpage')
  );
}

else if (document.getElementById('submissionform') !== null) {
  ReactDOM.render(
    <SUBMISSIONFORM UserID = {loggedInUserid}/>,
    document.getElementById('submissionform')
  );
}*/

import React from 'react';
import ReactDOM from 'react-dom';
import HOMEPAGE from './components/homepage.js';
import PROFILEPAGE from './components/profilepage.js';
import SUBMISSIONFORM from './components/submissionform/submissionform.js';
import SEARCHPAGE from './components/searchpage.js';
import CLASSPAGE from './components/classpage.js';
import ITEM from './components/item.js';
import NAVBAR from './components/navbar.js'; //new import
import ErrorBanner from './components/ErrorBanner.js'
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

class ProfilePage extends React.Component {
  render() {
    return <PROFILEPAGE user={1} />;
  }
}

class SubmitItem extends React.Component {
  render() {
    return <SUBMISSIONFORM user={1} />;
  }
}

class HomePage extends React.Component {
  render() {
    return <HOMEPAGE user={1} />;
  }
}


class SearchPage extends React.Component {
  render() {


    return <SEARCHPAGE user={1} searchCategory={this.props.params.searchCategory} searchTerm = {this.props.params.searchTerm}/>;
  }
}

class ClassPage extends React.Component {
  render() {
    return <CLASSPAGE user={1} id={this.props.params.id}/>;
  }
}
class ItemPage extends React.Component {
  render() {
    return <ITEM user={1} id={this.props.params.id}/>;
  }
}

class App extends React.Component {
  render() {

    var loggedinuser = 1;
    return (
      <div>
        <NAVBAR user={loggedinuser} />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ErrorBanner />
            </div>
          </div>
          <div className="row">

            {this.props.children}

          </div>
        </div>

      </div>

      // <div>
      // <div>
      //   <NAVBAR  user = {loggedinuser} />
      // </div>
      // <div>
      //   <ErrorBanner />
      // </div>
      //
      // </div>
    )
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="profile/:id" component={ProfilePage} />
      <Route path="submitItem/:id" component={SubmitItem} />
      <Route path="searchPage/:id/:searchCategory/:searchTerm" component={SearchPage} />
      <Route path="classPage/:id" component={ClassPage} />
      <Route path="itemPage/:id" component={ItemPage} />
    </Route>
  </Router>
),document.getElementById('homepage'));
