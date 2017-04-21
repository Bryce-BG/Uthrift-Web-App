// Implement your server in this file.
// We should be able to run your server with node src/server.js

var express = require('express');

var bodyParser = require('body-parser'); //import body parser



// Creates an Express server.
var app = express();
app.use(express.static('../client/build'));
app.use(bodyParser.text());
app.use(bodyParser.json());



// Defines what happens when it receives the `GET /` request
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

var database = require('./database.js');

var writeDocument = database.writeDocument;
var addDocument = database.addDocument;
var readDocument = database.readDocument;
var getArray = database.getArray;




app.get('/recomendedItems', function(req, res) {
  var userid = req.params.userid;
  var fromUser = getUserIdFromToken(req.get('Authorization'));
  // userid is a string. We need it to be a number.
  // Parameters are always strings.
  var useridNumber = parseInt(userid, 10);
  if (fromUser === useridNumber) {
    // Send response.
    res.send(getRecomendedItems()); //INDUCING ERROR when commented out
  } else {
    // 401: Unauthorized request.
    res.status(401).end();
  }
});


function getRecomendedItems()
{

  var recomendeditemIndexList= getArray('recomendedItems'); //get array for items
  // console.log("item list is:");
  // console.log(recomendeditemIndexList);
  var recomendedItems = new Array(9);
  for (var i = 0; i < 9; i++) {
    //console.log("looking for: " + i + " with value of  " + recomendeditemIndexList[i]);
    recomendedItems[i] = readDocument("items", recomendeditemIndexList[i]); //actually get the items
     //console.log("actual result: ")
     //console.log(recomendedItems[i]);
  }


//console.log("size of recomended item list: " + recomendedItems.length);

  return recomendedItems;
}



function getUserIdFromToken(authorizationLine) {
  try {
    // Cut off "Bearer " from the header value.
    var token = authorizationLine.slice(7);
    // Convert the base64 string to a UTF-8 string.
    var regularString = new Buffer(token, 'base64').toString('utf8');
    // Convert the UTF-8 string into a JavaScript object.
    var tokenObj = JSON.parse(regularString);
    var id = tokenObj['id'];
    // Check that id is a number.
    if (typeof id === 'number') {
      return id;
    } else {
      // Not a number. Return -1, an invalid ID.
      return -1;
    }
  } catch (e) {
    // Return an invalid ID.
    return -1;
  }
}

// Reset database.
app.post('/resetdb', function(req, res) {
  console.log("Resetting database...");
  // This is a debug route, so don't do any validation.
  database.resetDatabase();
  // res.send() sends an empty response with status code 200
  res.send();
});



// Starts the server on port 3000!
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
