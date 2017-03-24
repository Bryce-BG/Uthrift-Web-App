import React from 'react';
import ReactDOM from 'react-dom';

// Each major browser view user interface must be imported.
import HOMEPAGE from './components/homepage.js';
import PROFILEPAGE from './components/profilepage.js';
import SEARCHPAGE from './components/searchpage.js';
import CLASSPAGE from './components/classpage.js';
import UI02 from './components/ui-02.js';

// For each view conditionally determine which view to display
// depending on if the ID is present in the HTML.
if (document.getElementById('ui-02') !== null) {
  ReactDOM.render(
    <UI02 />,
    document.getElementById('ui-02')
  );
}

else if (document.getElementById('homepage') !== null) {
  ReactDOM.render(
    <HOMEPAGE />,
    document.getElementById('homepage')
  );
}


else if (document.getElementById('profilepage') !== null) {
  ReactDOM.render(
    <PROFILEPAGE />,
    document.getElementById('profilepage')
  );
}

else if (document.getElementById('searchpage') !== null) {
  ReactDOM.render(
    <SEARCHPAGE />,
    document.getElementById('searchpage')
  );
}

else if (document.getElementById('classpage') !== null) {
  ReactDOM.render(
    <CLASSPAGE />,
    document.getElementById('classpage')
  );
}
