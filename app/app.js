import React from 'react';
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
}
