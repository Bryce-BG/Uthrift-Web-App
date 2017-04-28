// Imports the express Node module.
var express = require('express');
// Parses response bodies.
var ResetDatabase = require('./resetdatabase');
var bodyParser = require('body-parser');
var database = require('./database');
var validate = require('express-jsonschema').validate;

var mongo_express = require('mongo-express/lib/middleware');
// Import the default Mongo Express configuration
var mongo_express_config = require('mongo-express/config.default.js');

var MongoDB = require('mongodb');
var MongoClient = MongoDB.MongoClient;
var ObjectID = MongoDB.ObjectID;
var url = 'mongodb://localhost:27017/uthrift';

// Implement your server in this file.
// We should be able to run your server with node src/server.js

// Creates an Express server.
var app = express();
app.use(express.static('../client/build'));
app.use(bodyParser.text());
app.use(bodyParser.json());

// Defines what happens when it receives the `GET /` request
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

var writeDocument = database.writeDocument;
var addDocument = database.addDocument;
var readDocument = database.readDocument;
var getArray = database.getArray;

MongoClient.connect(url, function(err, db) {
  app.use(bodyParser.text());
  app.use(bodyParser.json());
  app.use(express.static('../client/build'));
  app.use('/mongo_express', mongo_express(mongo_express_config));

  // Get class data
  function getClassData(classID, callback) {

    db.collection('classes').findOne({
      _id: classID
    }, function(err, classData) {
        if (err) {
          // An error occurred.
          return callback(err);
        } else if (feedItem === null) {
          // Feed item not found!
          return callback(null, null);
        }

      // //console.log(classID);
      // var classData = readDocument('classes', classID);
      // classData.textbookList = classData.textbookList.map((itemId) => readDocument('items', itemId));
      // classData.techList = classData.techList.map((itemId) => readDocument('items', itemId));
      // return(classData);
      callback(null, feedData);
    });
  }

  // Class data route
  app.get('/classPage/:classID', function(req, res) {

    var classID = req.params.classID;

    getClassData(new ObjectID(classID), function(err, classData) {
      if (err) {
        // A database error happened.
        // Internal Error: 500.
        res.status(500).send("Database error: " + err);
      } else if (classData === null) {
        // Couldn't find the class in the database.
        res.status(400).send("Could not look up class data: " + classID);
      } else {
        // Send data.
        res.send(classData);
      }
    });
  });

  function getSearch(cat, term) {
    var queryText = term.toLowerCase();
    var category = cat.toLowerCase();
    var searchResults;
    // Search the user's feed.
    var itemList= getArray('items');
    //console.log(getArray('items')); //DEBUG
    var itemlistArray = Object.keys(itemList).map(function(key) {return itemList[key];}); //convert into array

    console.log(category);
    if(category.trim() === "all")
    {
      searchResults = (itemlistArray.filter((item) => {
        //console.log(item.Category.toLowerCase().indexOf(category) !== -1 && (item.Title.toLowerCase().indexOf(queryText) !== -1  || item.Description.toLowerCase().indexOf(queryText) !== -1));
        return (item.Title.toLowerCase().indexOf(queryText) !== -1  || item.Description.toLowerCase().indexOf(queryText) !== -1);
      }));
    }

    else{
      searchResults = (itemlistArray.filter((item) => {
        //console.log(item.Category.toLowerCase().indexOf(category) !== -1 && (item.Title.toLowerCase().indexOf(queryText) !== -1  || item.Description.toLowerCase().indexOf(queryText) !== -1));
        return item.Category.toLowerCase().indexOf(category) !== -1 && (item.Title.toLowerCase().indexOf(queryText) !== -1  || item.Description.toLowerCase().indexOf(queryText) !== -1);
      }));
    }

  return searchResults;
  }


    app.get('/searchPage/:cat/:term', function(req, res) {
      //console.log(req);
      var cat = req.params.cat;
      var term = req.params.term;

      res.send(getSearch(cat, term));
    });


    function getClassSearch(term) {
      var queryText = term.toLowerCase();

      // Search the user's feed.
      var classList= getArray('classes');
      var classListArray = Object.keys(classList).map(function(key) {return classList[key];}); //convert into array

      var searchResults = (classListArray.filter((item) => {
        return item.title.toLowerCase().indexOf(queryText) !== -1  || item.subject.toLowerCase().indexOf(queryText) !== -1;
      }));
    return searchResults;
    }

      // for class searches
      app.get('/searchPage/:term', function(req, res) {
        //console.log(req);
        var term = req.params.term;

        res.send(getClassSearch(term));
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
  function xxsubmitItem(title, price, condition, conDesc, classRelated,
      subject, courseNumber, category, categoryDescription, photoRef, sold, sellerId){
    //var itemData = readDocument('items', 1);
    // var time = new Date().getTime();

    var itemID = (Object.keys(getArray('items')).length) + 1;
    var itemData = {

      //"postDate": time,
      "Title": title,
      "Price": price,
      "Condition": condition,
      "Description": conDesc,
      "Sold": sold,
      "Category": category,
      "photoRef": "img/iclicker.jpg",
      "SellerId": "" + sellerId
    };

    //var itemInfo = getArray('items');

    //itemInfo.itemID = itemData;

    addDocument('items', itemData);

    //  console.log(getArray('items'));
      //Update selling list by copying seller profile and adding item # to array
      var userInfo = readDocument('users', sellerId);
      userInfo.sellingList.push(itemID);

      console.log(getArray('items'));
    return itemData;

  }

  var ItemsSchema = require('./schemas/items.json');

  //no idea what vvv this file path is supposed to be
  app.post('/submissionForm', validate({ body:  ItemsSchema }), function(req, res) {
    var body = req.body;
    var fromUser = getUserIdFromToken(req.get('Authorization'));
    if (fromUser === body.SellerId) {
      var newItem = xxsubmitItem(body.Title, body.Price, body.Condition, body.Description, body.classRelated, body.subject,
        body.courseNumber, body.Category, body.categoryDescription, body.photoRef, body.Sold, body.SellerId);



      res.send(newItem); //not sure what this should be
    } else {
      res.status(401).end();
    }
  });



  function getItemInfo(itemID) {
    var itemdata = readDocument('items', itemID);
    return itemdata;
  }

  function getUserDataItem(id, user) {
    var userData = readDocument('users', user);
    var itemData = readDocument('items', id);
    userData.sellingList = userData.sellingList.map((itemId) => readDocument('items', itemId));
    userData.viewingItem = itemData;

    return userData;
  }

  app.get('/ItemPage/:itemID', function(req, res) {
      var itemID = req.params.itemID;

      res.send(getItemInfo(itemID));
  });

  app.get('/ItemPage/:userID/:itemID', function(req,res){
      //var itemID = req.params.itemID;
      res.send(getUserDataItem(req.params.itemID, req.params.userID));

  });

  // Reset the database.
  app.post('/resetdb', function(req, res) {
    console.log("Resetting database...");
    ResetDatabase(db, function() {
      res.send();
    });
  });

  // Starts the server on port 3000!
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
});
