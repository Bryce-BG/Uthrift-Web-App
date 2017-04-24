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


/**
 * Get the feed data for a particular user.
 */
 function getClassData(classID) {
   //console.log(classID);
   var classData = readDocument('classes', classID);
   classData.textbookList = classData.textbookList.map((itemId) => readDocument('items', itemId));
   classData.techList = classData.techList.map((itemId) => readDocument('items', itemId));
   return(classData);
 }

 /**
 * Get the class data.
 */
app.get('/classPage/:classID', function(req, res) {
  var classID = req.params.classID;

    res.send(getClassData(classID));
});

 function getSearch(search) {
  var itemList= getArray('items'); //get array for items
  var refinedList = [];
  var index = 0;
  if (search[0] !== "") {
    //console.log(itemList);
    //var itemlistArray = Object.values(itemList);
    var itemlistArray = Object.keys(itemList).map(function(key) {return itemList[key];});
    console.log(itemlistArray);
    var itemListLength = itemlistArray.length;
    for (var i = 1; i < itemListLength+1; i++) { //loop through and see only add items that have the correct category.
      //var itemArray = Object.values(itemList[i]);
      var itemArray = Object.keys(itemList[i]).map(function(key) {return itemList[i][key];});
      //console.log(itemArray);
      if (itemArray[6] === search[0]) {
          refinedList[index] = itemArray;
          index+=1;
        }
      }
  }

  //take the list of all items with correct category and then try to narrow them down further by applying hte search filter
  var searchResults = [];
  index = 0; //reset to 0 for next search
  for (var ie = 1; i < refinedList.length; ie++) {
    if (refinedList[ie].Title === search[1] || refinedList[ie]._id === search[1]) {
        searchResults[index] = refinedList[ie];
        index+=1;
      }
 }
 if (searchResults.length < 2) {
   searchResults = refinedList; // for now
 }
 return (searchResults);
}


  app.get('/searchPage/:cat/:term', function(req, res) {
    console.log(req.params.cat);
    console.log(req.params.term);
    var cat = req.params.cat;
    var term = req.params.term;
    var search = [cat, term]
    //console.log(req.params.term);
    //var searchArray = [req.params.cat, ""]
    res.send(getSearch(search));
  });

app.get('/recomendedItems/:userid', function(req, res) {
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

function getUserData(user){
  var userData = readDocument('users', user);
  userData.sellingList = userData.sellingList.map((itemId) => readDocument('items', itemId));
  return userData;
}

//Get User data
app.get('/profile/:userid', function(req, res) {
  var userid = req.params.userid;
  var fromUser = getUserIdFromToken(req.get('Authorization'));
  var useridNumber = parseInt(userid, 10);
  if (fromUser === useridNumber) {
    res.send(getUserData(userid));
  } else {
    res.status(401).end();
  }
});

function updateUserData(userId, cellphone, firstname, lastname, nickname, email, password, photo){
  var userData = readDocument('users', userId);
  userData.Cellphone = cellphone;
  userData.FirstName = firstname;
  userData.LastName = lastname;
  userData.NickName = nickname;
  userData.Email = email;
  userData.Password = password;
  userData.Photo = photo;
  writeDocument('users', userData);
}

var UserDataSchema = require('./schemas/userdata.json');
var validate = require('express-jsonschema').validate;

//Update user information
app.put('/profile', validate({ body:  UserDataSchema }), function(req, res) {
  var body = req.body;
  var fromUser = getUserIdFromToken(req.get('Authorization'));
  if (fromUser === body.userId) {
    updateUserData(body.userId, body.cellphone, body.firstname, body.lastname, body.nickname, body.email, body.password, body.photo);
    res.send(getUserData(body.userId));
  } else {
    res.status(401).end();
  }
});


//submission form junk
function submitItem(title, price, condition, conDesc, classRelated,
    subject, courseNumber, category, categoryDescription, photoRef, sold, sellerId){
  var itemData = readDocument('items', 1);
  var time = new Date().getTime();

  var itemID = (Object.keys(getArray('items')).length) + 1;
  itemData._id = itemID; //not sure if this should be itemData.itemId because the json has itemId instead of _id
  itemData.postDate = time;
  itemData.Title = title;
  itemData.Price = price;
  itemData.Condition = condition;
  itemData.Description = conDesc;
  itemData.classRelated = classRelated;
  itemData.subject = subject;
  itemData.courseNumber = courseNumber;
  itemData.Category = category;
  itemData.categoryDescription = categoryDescription;
  itemData.photoRef = "img/iclicker.jpg";
  itemData.Sold = sold;
  itemData.SellerId = sellerId;
  writeDocument('items', itemData);

  //Update selling list by copying seller profile and adding item # to array
  var userInfo = readDocument('users', sellerId);
  userInfo.sellingList.push(itemID);
}

var ItemsSchema = require('./schemas/items.json');

//no idea what vvv this file path is supposed to be
app.post('/submissionForm/', validate({ body:  ItemsSchema }), function(req, res) {
  var body = req.body;
  var fromUser = getUserIdFromToken(req.get('Authorization'));
  if (fromUser === body.sellerId) {
    submitItem(body.Title, body.Price, body.Condition, body.Description, body.classRelated, body.subject,
      body.courseNumber, body.Category, body.categoryDescription, body.photoRef, body.Sold, body.SellerId);
    res.send(getUserData(body.SellerId));
  } else {
    res.status(401).end();
  }
});




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
