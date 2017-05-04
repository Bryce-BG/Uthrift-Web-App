// Imports the express Node module.
var express = require('express');
// Parses response bodies.
var ResetDatabase = require('./resetdatabase');
var bodyParser = require('body-parser');
//var database = require('./database');
//var validate = require('express-jsonschema').validate;

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


//var addDocument = database.addDocument;
//var readDocument = database.readDocument;
//var getArray = database.getArray;

MongoClient.connect(url, function(err, db) {
  app.use(bodyParser.text());
  app.use(bodyParser.json());
  app.use(express.static('../client/build'));
  app.use('/mongo_express', mongo_express(mongo_express_config));

  function getClassItem(itemID, callback) {
    db.collection('classItems').findOne({
      _id: itemID
    }, function(err, item) {
      // console.log("item: ");
      // console.log(item);
      if (err) {
        // An error occurred.
        return callback(err);
      } else if (item === null) {
          // Feed item not found!
          return callback(null, null);
        }
      callback(null, item);
    });
  }

  // Class data route
  app.get('/classItem/:classItemID', function(req, res) {

    var classItemID = req.params.classItemID;

    // change this when other parts use DB
    getClassItem(new ObjectID(classItemID), function(err, classData) {
      if (err) {
        // A database error happened.
        // Internal Error: 500.
        res.status(500).send("Database error: " + err);
      } else if (classData === null) {
        // Couldn't find the class in the database.
        res.status(400).send("Could not look up class data: " + classItemID);
      } else {
        // Send data.
        res.send(classData);
      }
    });
  });

  function getItemInfo(itemID, callback) {
    db.collection('items').findOne({
      _id: itemID
    }, function(err, item) {
      // console.log("item: ");
      // console.log(item);
      if (err) {
        // An error occurred.
        return callback(err);
      } else if (item === null) {
          // Feed item not found!
          return callback(null, null);
        }
      callback(null, item);
    });
  }

  // Get class data
  function getClassData(classID, callback) {
    db.collection('classes').findOne({
      _id: classID
    }, function(err, classData) {
      if (err) {
        return callback(err);
      } else if (classData === null) {
        return callback(null, null);
      }
      var Textbooks = [];
      var Tech = [];

      function processBooks(i) {
        getClassItem(classData.textbookList[i], function(err, item) {
          if (err) {
            callback(err);
          } else {
            Textbooks.push(item);
            if (Textbooks.length === classData.textbookList.length) {
              classData.textbookList = Textbooks;
              if (classData.techList.length === 0) {
                callback(null, classData);
              } else {
                processTech(0);
              }
            } else {
              processBooks(i + 1);
            }
          }
        });
      }

      function processTech(i) {
        getClassItem(classData.techList[i], function(err, item) {
          if (err) {
            callback(err);
          } else {
            Tech.push(item);
            if (Tech.length === classData.techList.length) {
              classData.techList = Tech;
              callback(null, classData);
            } else {
              processTech(i + 1);
            }
          }
        });
      }

      if (classData.textbookList.length === 0) {
        callback(null, classData);
      } else {
        processBooks(0);
      }
    });
  }

  // Class data route
  app.get('/classPage/:classID', function(req, res) {

    var classID = req.params.classID;

    // change this when other parts use DB
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

  // for searching class items
  app.get('/searchPageClassItems/:term', function(req, res) {
    //console.log(req);
    var term = req.params.term;

    // Look for feed items within the feed that contain queryText.
    db.collection('items').find({
      core_id: new ObjectID(term)
    }).toArray(function(err, items) {
      if (err) {
        return sendDatabaseError(res, err);
      }

      var resolvedItems = [];
      var errored = false;
      function onResolve(err, item) {
        if (errored) {
          return;
        } else if (err) {
          errored = true;
          sendDatabaseError(res, err);
        } else {
          resolvedItems.push(item);
          if (resolvedItems.length === items.length) {
            // Send resolved items to the client!
            res.send(resolvedItems);
          }
        }
      }
      // Resolve all of the matched feed items in parallel.
      //console.log(items);
      for (var i = 0; i < items.length; i++) {
        // Would be more efficient if we had a separate helper that
        // resolved feed items from their objects and not their IDs.
        // Not a big deal in our small applications, though.
          getItemInfo(items[i]._id, onResolve);
      }

      // Special case: No results.
      if (items.length === 0) {
        res.send([]);
      }
    });
  });

  // for searching items
  app.get('/searchPage/:cat/:term', function(req, res) {
    //console.log(req);
    var term = req.params.term;
    //res.send(getClassSearch(term));
    var queryText = term.toLowerCase();

    // Look for feed items within the feed that contain queryText.
    db.collection('items').find({
      $text: {
        $search: queryText
      }
    }).toArray(function(err, items) {
      if (err) {
        return sendDatabaseError(res, err);
      }
      // Resolve all of the feed items.
      items = items.filter( (item)=>{ return req.params.cat.trim().toLowerCase() === "all" ||
      req.params.cat.trim().toLowerCase() === item.Category.trim().toLowerCase()});

      var resolvedItems = [];
      var errored = false;
      function onResolve(err, item) {
        if (errored) {
          return;
        } else if (err) {
          errored = true;
          sendDatabaseError(res, err);
        } else {
          resolvedItems.push(item);
          if (resolvedItems.length === items.length) {
            // Send resolved items to the client!
            res.send(resolvedItems);
          }
        }
      }
      // Resolve all of the matched feed items in parallel.
      //console.log(items);
      for (var i = 0; i < items.length; i++) {
        // Would be more efficient if we had a separate helper that
        // resolved feed items from their objects and not their IDs.
        // Not a big deal in our small applications, though.
          getItemInfo(items[i]._id, onResolve);
      }

      // Special case: No results.
      if (items.length === 0) {
        res.send([]);
      }
    });
  });

  function sendDatabaseError(res, err) {
    res.status(500).send("A database error occurred: " + err);
  }
  // function getClassSearch(term, callback) {
  //
  // }

  // for class searches
  app.get('/searchPage/:term', function(req, res) {
    //console.log(req);
    var term = req.params.term;
    //res.send(getClassSearch(term));
    var queryText = term.toLowerCase();

    // Look for feed items within the feed that contain queryText.
    db.collection('classes').find({
      $text: {
        $search: queryText
      }
    }).toArray(function(err, items) {
      if (err) {
        return sendDatabaseError(res, err);
      }

      // Resolve all of the feed items.
      var resolvedItems = [];
      var errored = false;
      function onResolve(err, item) {
        if (errored) {
          return;
        } else if (err) {
          errored = true;
          sendDatabaseError(res, err);
        } else {
          resolvedItems.push(item);
          if (resolvedItems.length === items.length) {
            // Send resolved items to the client!
            res.send(resolvedItems);
          }
        }
      }
      //console.log(items);
      // Resolve all of the matched feed items in parallel.
      for (var i = 0; i < items.length; i++) {
        // Would be more efficient if we had a separate helper that
        // resolved feed items from their objects and not their IDs.
        // Not a big deal in our small applications, though.
        getClassData(items[i]._id, onResolve);
      }

      // Special case: No results.
      if (items.length === 0) {
        res.send([]);
      }
    });
  });

  function getUserIdFromToken(authorizationLine) {
    try {
      // Cut off "Bearer " from the header value.
      var token = authorizationLine.slice(7);
      // Convert the base64 string to a UTF-8 string.
      var regularString = new Buffer(token, 'base64').toString('utf8');
      // Convert the UTF-8 string into a JavaScript object.
      var tokenObj = JSON.parse(regularString);
      var id = tokenObj['id'];
      // Check that id is a string.
      if (typeof id === 'string') {
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

    function getRecomendedItems(user, callback)
    {
    //  console.log("getRecomendedItems was called");


      db.collection('users').findOne({ _id: user}, function(err,itemData){
        if (err) {
          return callback(err);
        }

        var len = itemData.recomendedItems.length;
        var recomendedItems = [];
        if (len === 0){
          callback(null, itemData);
        }else{
          for (var i = 0; i < len; i ++){
            db.collection('items').findOne({_id: new ObjectID(itemData.recomendedItems[i])}, function(err, item){
              if (err) {
                return callback(err);
              }
              recomendedItems.push(item);
              if (recomendedItems.length === len){
                itemData.recomendedItems = recomendedItems;
                callback(null, itemData);
              }

            });
          }
        }
      });
    }

  app.get('/recomendedItems/:userid', function(req, res) {
    var userid = req.params.userid;
    var fromUser = getUserIdFromToken(req.get('Authorization'));
    // userid is a string. We need it to be a number.
    // Parameters are always strings.

  //  var useridNumber = parseInt(userid, 10);
    if (fromUser === userid) {
      // Send response.

    getRecomendedItems(new ObjectID(userid), function(err, recomendedItems) {
        if (err) {
          res.status(500).send("Database error: " + err);
        } else if (recomendedItems === null) {
          res.status(400).send("Could not look up feed for user " + userid);
        } else {
        //  console.log("recomendedItems ARE: ");
          //console.log(recomendedItems);
          res.send(recomendedItems.recomendedItems);
        }
      })
    }
     else {
      // 401: Unauthorized request.
      res.status(401).end();
    }
  });

  app.get('/getClassItemList/', function(req, res) {
    db.collection('classItems').find().toArray(function(err, items) {
      if (err) {
        return sendDatabaseError(res, err);
      }

      var resolvedItems = [];
      var errored = false;
      function onResolve(err, item) {
        if (errored) {
          return;
        } else if (err) {
          errored = true;
          sendDatabaseError(res, err);
        } else {
          resolvedItems.push(item);
          if (resolvedItems.length === items.length) {
            // Send resolved items to the client!
            res.send(resolvedItems);
          }
        }
      }
      // Resolve all of the matched feed items in parallel.
      //console.log(items);
      for (var i = 0; i < items.length; i++) {
        // Would be more efficient if we had a separate helper that
        // resolved feed items from their objects and not their IDs.
        // Not a big deal in our small applications, though.
          getItemInfo(items[i]._id, onResolve);
      }

      // Special case: No results.
      if (items.length === 0) {
        res.send([]);
      }
    });
  });

  function getUserData(user, callback){
    db.collection('users').findOne({ _id: user}, function(err,userData){
      if (err) {
        return callback(err);
      }

      var len = userData.sellingList.length;
      var sell = [];
      if (len === 0){
        callback(null, userData);
      }else{
        for (var i = 0; i < len; i ++){
          db.collection('items').findOne({_id: new ObjectID(userData.sellingList[i])}, function(err, item){
            if (err) {
              return callback(err);
            }
            sell.push(item);
            if (sell.length === len){
              userData.sellingList = sell;
              callback(null, userData);
            }

          });
        }
      }
    });
  }

  //Get User data
  app.get('/profile/:userid', function(req, res) {
    var userid = req.params.userid;
    //console.log("Before");
    var fromUser = getUserIdFromToken(req.get('Authorization'));
    //var useridNumber = parseInt(userid, 10);
    // Was using an int instead of string
    if (fromUser === userid) {
      getUserData(new ObjectID(userid), function(err, userData) {
        if (err) {
          res.status(500).send("Database error: " + err);
        } else if (userData === null) {
          res.status(400).send("Could not look up feed for user " + userid);
        } else {
          res.send(userData);
        }
      });
    } else {
      res.status(401).end();
    }
  });


  function updateUserData(userId, cellphone, firstname, lastname, nickname, email, password, photo, callback){
    db.collection('users').updateOne({_id: userId},
      {
        $set:{
          "Cellphone": cellphone,
          "FirstName": firstname,
          "LastName": lastname,
          "NickName": nickname,
          "Email": email,
          "Password": password,
          "Photo": photo
        }
      }, function(err){
      if (err) {
        return callback(err);
      }
    });
  }

  var UserDataSchema = require('./schemas/userdata.json');
  var validate = require('express-jsonschema').validate;

  //Update user information
  app.put('/profile', validate({ body:  UserDataSchema }), function(req, res) {
    var body = req.body;
    var fromUser = getUserIdFromToken(req.get('Authorization'));
    if (fromUser === body.userId) {
      updateUserData(new ObjectID(body.userId), body.cellphone, body.firstname, body.lastname, body.nickname, body.email, body.password, body.photo, function(err){
        if (err) {
          res.status(500).send("A database error occurred: " + err);
        } else {
          res.status(201);
          res.send(getUserData(new ObjectID(body.userId)));
        }
      });
    } else {
      res.status(401).end();
    }
  });


  //submission form junk
  function xxsubmitItem(core_id, title, price, condition, conDesc, classRelated,
      subject, courseNumber, category, categoryDescription, photoRef, sold, sellerId, callback){
    db.collection('items').find({}).toArray(function(err, items){
       var itemIDint = items.length+1; //generate id number
          var id = itemIDint.toString();
          var idSize = id.length;
          var newId = "";
          for (var x = 0; x < 24 - idSize; x++){ //add enough zeros in front of id number
            newId += "0";
          }
          newId += id;
          var itemIDstring = newId;

        var itemData = { //create item
          "core_id": new ObjectID(core_id),
          "Title": title,
          "Price": price,
          "Condition": condition,
          "Description": conDesc,
          "Sold": sold,
          "Category": category,
          "photoRef": photoRef,
          "SellerID":  new ObjectID(sellerId)
        };
        itemData._id = new ObjectID(itemIDstring);

        // Add the item to the database.
        db.collection('items').insertOne(itemData, function(err) {
          if (err) {
            return callback(err);
          }

          //let path = "users." + sellerId + ".sellingList";

          db.collection('users').findOneAndUpdate({
            _id: new ObjectID(sellerId)
          },
            {
              $addToSet: {
                sellingList: new ObjectID(itemIDstring)
              }
           });
           callback(null, null);
         });
    });
  }

  var ItemsSchema = require('./schemas/items.json');

  app.post('/submissionForm', validate({ body:  ItemsSchema }), function(req, res) {
    var body = req.body;
    var fromUser = getUserIdFromToken(req.get('Authorization'));
    if (fromUser === body.SellerId) {
      xxsubmitItem(body.core_id, body.Title, body.Price, body.Condition, body.Description, body.classRelated, body.subject,
        body.courseNumber, body.Category, body.categoryDescription, body.photoRef, body.Sold, body.SellerId, function(err, newItem) {
        if (err) {
          res.status(500).send("A database error occurred: " + err);
        } else {
          res.status(201);

          res.send(newItem);
        }
      });
    } else {
      res.status(401).end();
    }
  });

  function getUserDataItem(id, user, callback) {

      //user
      db.collection('users').findOne({
              _id: user
          }, function (err, userData) {
              if (err) {
                  return callback(err);
              }

              var len = userData.sellingList.length;
              var sell = [];
              if (len === 0) {
                  callback(null, userData);
              } else {
                  for (var i = 0; i < len; i++) {
                      db.collection('items').findOne({
                          _id: new ObjectID(userData.sellingList[i])
                      }, function (err, item) {
                          if (err) {
                              return callback(err);
                          }
                          sell.push(item);
                          if (sell.length === len) {
                              userData.sellingList = sell;
                              getItemInfo(id, function (err, item) {
                                  if (err) {
                                      callback(err);
                                  } else {
                                      userData.viewingItem = item;
                                      callback(null, userData);
                                  }
                              });
                          }
                      });
                  }
              }
      });
  }

  app.get('/ItemPage/:itemID', function(req, res) {

    var itemID = req.params.itemID;

    // change this when other parts use DB
    getItemInfo(new ObjectID(itemID), function(err, itemData) {
      if (err) {
        // A database error happened.
        // Internal Error: 500.
        res.status(500).send("Database error: " + err);
      } else if (itemID === null) {
        // Couldn't find the class in the database.
        res.status(400).send("Could not look up item data: " + itemID);
      } else {
        // Send data.
        res.send(itemData);
      }
    });
  });

  app.get('/ItemPage/:userID/:itemID', function(req, res) {

    var itemID = req.params.itemID;
    var userID = req.params.userID;
    //var fromUser = getUserIdFromToken(req.get('Authorization'));
    // change this when other parts use DB
    getUserDataItem(new ObjectID(itemID), new ObjectID(userID), function(err, itemData) {
      if (err) {
        // A database error happened.
        // Internal Error: 500.
        res.status(500).send("Database error: " + err);
      } else if (itemID === null) {
        // Couldn't find the class in the database.
        res.status(400).send("Could not look up item data: " + itemID);
      }else if (userID === null) {
        // Couldn't find the class in the database.
        res.status(400).send("Could not look up user data: " + userID);
      } else {
        // Send data.
        res.send(itemData);
      }
    });
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
