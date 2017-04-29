// Your startup's initial mock objects go here
var initialData = {
  "users": {

    "1": {
      "_id": 1,
      "Email": "johndoe@umass.edu",
      "Cellphone": "987-654-3210",
      "FirstName": "John",
      "LastName": "Doe",
      "NickName": "Someone",
      "Photo": "img/avatar.png",
      "trackList": [],
      "sellingList": [4,5,6,7,8,9,10,11,12,13,19,20,25,33,34,35,36,39,40,41,42],
      "Password": "123456",
      "searchGory": "Textbooks",
      "searchTerm": "Books on how to hack life",
      "viewingItem": 1
    },
    "2": {
      "_id": 2,
      "Email": "janerando@umass.edu",
      "Cellphone": "012-345-5678",
      "FirstName": "Jane",
      "LastName": "Rando",
      "NickName": "AnotherOne",
      "Photo": "img/avatar2.png",
      "trackList": [],
      "sellingList": [1,2,3,14,15,16,17,18,21,22,23,24,26,27,28,29,30,31,32,37,38],
      "Password": "233333",
      "searchGory": "Textbooks",
      "searchTerm": "",
      "viewingItem": 1
    }
  },
  "items":
  {
    "1":
    {
      "_id": 1,
      "Title": "iclicker",
      "Price": "10,000",
      "Description": "Class Prison Key",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Tech",
      "photoRef": "img/iclicker.jpg",
      "SellerId": "2"
    },
    "2":
    {
      "_id": 2,
      "Title": "Cracking The Code",
      "Price": "18.00",
      "Description": "Item 1 Description",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Textbooks",
      "photoRef": "img/book1.jpg",
      "SellerID": "2"
    },
    "3":
    {
      "_id": 3,
      "Title": "Introductions to Algorithms",
      "Price": "21.00",
      "Description": "Item 2 Description",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Textbooks",
      "photoRef": "img/book2.jpg",
      "SellerID": "2"
    },
    "4":
    {
      "_id": 4,
      "Title": "Artificial Intelligence",
      "Price": "25.00",
      "Description": "Item 3 Description",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Textbooks",
      "photoRef": "img/book3.jpg",
      "SellerID": "1"
    },
    "5":
    {
      "_id": 5,
      "Title": "The Rules of Love",
      "Price": "7.50",
      "Description": "Item 4 Description",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Textbooks",
      "photoRef": "img/book4.jpg",
      "SellerID": "1"
    },
    "6":
    {
      "_id": 6,
      "Title": "What I Wish I Knew When I was 20",
      "Price": "5.00",
      "Description": "Item 5 Description",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Textbooks",
      "photoRef": "img/book5.jpg",
      "SellerID": "1"
    },
    "7":
    {
      "_id": 7,
      "Title": "Unlock Your Educational Potental",
      "Price": "6.00",
      "Description": "Item 6 Description",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Textbooks",
      "photoRef": "img/book6.jpg",
      "SellerID": "1"
    },
    "8":
    {
      "_id": 8,
      "Title": "Dress",
      "Price": "6.00",
      "Description": "Classy Dress",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Clothing",
      "photoRef": "img/dress.jpg",
      "SellerID": "1"
    }
    ,
    "9":
    {
      "_id": 9,
      "Title": "Skirt",
      "Price": "6.00",
      "Description": "Shining Skirt",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Clothing",
      "photoRef": "img/skirt.jpg",
      "SellerID": "1"
    },
    "10":
    {
      "_id": 10,
      "Title": "Jacket",
      "Price": "6.00",
      "Description": "Old Jacket",
      "Condition": "Used",
      "Sold": false,
      "Category": "Clothing",
      "photoRef": "img/clothing3.png",
      "SellerID": "1"
    },
    "11":
    {
      "_id": 11,
      "Title": "Bomber Jacket",
      "Price": "6.00",
      "Description": "Savy Bomber Jacket",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Clothing",
      "photoRef": "img/clothing4.jpg",
      "SellerID": "1"
    },
    "12":
    {
      "_id": 12,
      "Title": "UMass Hoodie",
      "Price": "6.00",
      "Description": "ZooMass Swag",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Clothing",
      "photoRef": "img/clothing5.jpg",
      "SellerID": "1"
    },
    "13":
    {
      "_id": 13,
      "Title": "Jacket",
      "Price": "66.00",
      "Description": "New Jacket",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Clothing",
      "photoRef": "img/clothing3.png",
      "SellerID": "1"
    },
    "14":
    {
      "_id": 14,
      "Title": "lamp",
      "Price": "10",
      "Description": "Lighting Life",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Tech",
      "photoRef": "img/Lamp.jpg",
      "SellerId": "2"
    },
    "15":
    {
      "_id": 15,
      "Title": "USB",
      "Price": "5",
      "Description": "Saves Your Data",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Tech",
      "photoRef": "img/tech2.jpg",
      "SellerId": "2"
    },
    "16":
    {
      "_id": 16,
      "Title": "Earphones",
      "Price": "1",
      "Description": "Help U Concentrate",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Tech",
      "photoRef": "img/tech3.jpg",
      "SellerId": "2"
    },
    "17":
    {
      "_id": 17,
      "Title": "Phone Case",
      "Price": "9",
      "Description": "Saves U Ton",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Tech",
      "photoRef": "img/tech4.jpg",
      "SellerId": "2"
    },
    "18":
    {
      "_id": 18,
      "Title": "Master Clicker",
      "Price": "10,000",
      "Description": "Hack Your Score",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Tech",
      "photoRef": "img/iclicker.jpg",
      "SellerId": "2"
    },
    "19":
    {
      "_id": 19,
      "Title": "Cuddle Up",
      "Price": "1",
      "Description": "Be Warm Friends",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Events",
      "photoRef": "img/clothing3.png",
      "SellerID": "1"
    },
    "20":
    {
      "_id": 20,
      "Title": "Study",
      "Price": "0",
      "Description": "Study a Ton!",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Events",
      "photoRef": "img/Lamp.jpg",
      "SellerId": "2"
    },
    "21":
    {
      "_id": 21,
      "Title": "Big Data",
      "Price": "5",
      "Description": "Data Science Talk",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Events",
      "photoRef": "img/tech2.jpg",
      "SellerId": "2"
    },
    "22":
    {
      "_id": 22,
      "Title": "Listen Up",
      "Price": "1",
      "Description": "Concentrate",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Events",
      "photoRef": "img/tech3.jpg",
      "SellerId": "2"
    },
    "23":
    {
      "_id": 23,
      "Title": "Phone Protection",
      "Price": "3",
      "Description": "Save Our Earth",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Events",
      "photoRef": "img/tech4.jpg",
      "SellerId": "2"
    },
    "24":
    {
      "_id": 24,
      "Title": "Click and Hack",
      "Price": "10,000",
      "Description": "Hack into Moodle!",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Events",
      "photoRef": "img/iclicker.jpg",
      "SellerId": "2"
    },
    "25":
    {
      "_id": 25,
      "Title": "Cuddle Up",
      "Price": "1",
      "Description": "Be Warm Friends",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Miscellaneous",
      "photoRef": "img/clothing3.png",
      "SellerID": "1"
    },
    "26":
    {
      "_id": 26,
      "Title": "Study",
      "Price": "0",
      "Description": "Study a Ton!",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Miscellaneous",
      "photoRef": "img/Lamp.jpg",
      "SellerId": "2"
    },
    "27":
    {
      "_id": 27,
      "Title": "Phone Protection",
      "Price": "3",
      "Description": "Save Our Earth",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Miscellaneous",
      "photoRef": "img/tech4.jpg",
      "SellerId": "2"
    },
    "28":
    {
      "_id": 28,
      "Title": "Listen Up",
      "Price": "1",
      "Description": "Concentrate",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Miscellaneous",
      "photoRef": "img/tech3.jpg",
      "SellerId": "2"
    },
    "29":
    {
      "_id": 29,
      "Title": "Big Data",
      "Price": "5",
      "Description": "Data Science Talk",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Miscellaneous",
      "photoRef": "img/tech2.jpg",
      "SellerId": "2"
    },
    "30":
    {
      "_id": 30,
      "Title": "Click and Hack",
      "Price": "10,000",
      "Description": "Hack into Moodle!",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Miscellaneous",
      "photoRef": "img/iclicker.jpg",
      "SellerId": "2"
    },
    "31":
    {
      "_id": 31,
      "Title": "Craking The Code",
      "Price": "18.00",
      "Description": "CS187 Basic Coding",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Classes",
      "photoRef": "img/book1.jpg",
      "SellerID": "2"
    },
    "32":
    {
      "_id": 32,
      "Title": "Introductions to Algorithms",
      "Price": "21.00",
      "Description": "CS311 Algorithms",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Classes",
      "photoRef": "img/book2.jpg",
      "SellerID": "2"
    },
    "33":
    {
      "_id": 33,
      "Title": "Artificial Intelligence",
      "Price": "25.00",
      "Description": "CS383 AI",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Classes",
      "photoRef": "img/book3.jpg",
      "SellerID": "1"
    },
    "34":
    {
      "_id": 34,
      "Title": "The Rules of Love",
      "Price": "7.50",
      "Description": "COLL200 Love",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Classes",
      "photoRef": "img/book4.jpg",
      "SellerID": "1"
    },
    "35":
    {
      "_id": 35,
      "Title": "What I Wish I Knew When I was 20",
      "Price": "5.00",
      "Description": "COLL102 Life Advices",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Classes",
      "photoRef": "img/book5.jpg",
      "SellerID": "1"
    },
    "36":
    {
      "_id": 36,
      "Title": "Unlock Your Educational Potental",
      "Price": "6.00",
      "Description": "COLL 101 Education",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Classes",
      "photoRef": "img/book6.jpg",
      "SellerID": "1"
    },
    "37":
    {
      "_id": 37,
      "Title": "Bed",
      "Price": "49.00",
      "Description": "Cozy Bed",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Furniture",
      "photoRef": "img/furniture.jpg",
      "SellerID": "2"
    },
    "38":
    {
      "_id": 38,
      "Title": "Bunk",
      "Price": "51.00",
      "Description": "Space Efficient Bunk",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Furniture",
      "photoRef": "img/furniture.jpg",
      "SellerID": "2"
    },
    "39":
    {
      "_id": 39,
      "Title": "High Chair",
      "Price": "20.00",
      "Description": "High Chair for Babies",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Furniture",
      "photoRef": "img/furniture.jpg",
      "SellerID": "1"
    },
    "40":
    {
      "_id": 40,
      "Title": "Chair",
      "Price": "10.50",
      "Description": "Chair for Sitting",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Furniture",
      "photoRef": "img/furniture.jpg",
      "SellerID": "1"
    },
    "41":
    {
      "_id": 41,
      "Title": "Bookshelf",
      "Price": "15.00",
      "Description": "Used Bookshelf",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Furniture",
      "photoRef": "img/furniture.jpg",
      "SellerID": "1"
    },
    "42":
    {
      "_id": 42,
      "Title": "Bookshelf",
      "Price": "36.00",
      "Description": "Sturdy Bookshelf",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Furniture",
      "photoRef": "img/furniture.jpg",
      "SellerID": "1"
    },

    "43":
    {
      "_id": 43,
      "Title": "Sushi",
      "Price": "9999.00",
      "Description": "Rice + Fish + Tender, love and care",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Miscellaneous",
      "photoRef": "img/sushi.jpg",
      "SellerID": "1"
    }
  },

  "classes":
  {
    "1":
    {
      "_id": 1,
      "title": "CS 326",
      "description": "We teach you how to make facebook",
      "instructor": "Tim Richards, First of his name",
      "credits": "3",
      "term": "Spring 2017",
      "subject": "Computer Science",
      "textbookList": [2,3,4],
      "techList": [1],
      "Photo": "img/class.png"
    },
    "2":
    {
      "_id": 2,
      "title": "CS Test",
      "description": "This is just a test",
      "instructor": "No Man",
      "credits": "6",
      "term": "Spring 2017",
      "subject": "Computer Science",
      "textbookList": [4,5,6],
      "techList": [1],
      "Photo": "img/class.png"
    }
  },
  "recomendedItems": [1,2,3,4,5,6,7,1,1]
};

var data;
// If 'true', the in-memory object representing the database has changed,
// and we should flush it to disk.
var updated = false;
// Pull in Node's file system and path modules.
var fs = require('fs'),
  path = require('path');

try {
  // ./database.json may be missing. The comment below prevents ESLint from
  // complaining about it.
  // Read more about configuration comments at the following URL:
  // http://eslint.org/docs/user-guide/configuring#configuring-rules
  /* eslint "node/no-missing-require": "off" */
  data = require('./database.json');
} catch (e) {
  // ./database.json is missing. Use the seed data defined above
  data = JSONClone(initialData);
}

/**
 * A dumb cloning routing. Serializes a JSON object as a string, then
 * deserializes it.
 */
function JSONClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Emulates reading a "document" from a NoSQL database.
 * Doesn't do any tricky document joins, as we will cover that in the latter
 * half of the course. :)
 */
function readDocument(collection, id) {
  // Clone the data. We do this to model a database, where you receive a
  // *copy* of an object and not the object itself.
  var collectionObj = data[collection];
  if (!collectionObj) {
    throw new Error(`Object collection ${collection} does not exist in the database!`);
  }
  var obj = collectionObj[id];
  if (obj === undefined) {
    throw new Error(`Object ${id} does not exist in object collection ${collection} in the database!`);
  }
  return JSONClone(data[collection][id]);
}
module.exports.readDocument = readDocument;

/**
 * Emulates writing a "document" to a NoSQL database.
 */
function writeDocument(collection, changedDocument) {
  var id = changedDocument._id;
  if (id === undefined) {
    throw new Error(`You cannot write a document to the database without an _id! Use AddDocument if this is a new object.`);
  }
  // Store a copy of the object into the database. Models a database's behavior.
  data[collection][id] = JSONClone(changedDocument);
  // Update our 'database'.
  updated = true;
}
module.exports.writeDocument = writeDocument;

/**
 * Adds a new document to the NoSQL database.
 */
function addDocument(collectionName, newDoc) {
  var collection = data[collectionName];
  var nextId = Object.keys(collection).length;
  if (newDoc.hasOwnProperty('_id')) {
    throw new Error(`You cannot add a document that already has an _id. addDocument is for new documents that do not have an ID yet.`);
  }
  while (collection[nextId]) {
    nextId++;
  }
  newDoc._id = nextId;
  writeDocument(collectionName, newDoc);
  return newDoc;
}
module.exports.addDocument = addDocument;

/**
 * Deletes a document from an object collection.
 */
function deleteDocument(collectionName, id) {
  var collection = data[collectionName];
  if (!collection[id]) {
    throw new Error(`Collection ${collectionName} lacks an item with id ${id}!`);
  }
  delete collection[id];
  updated = true;
}
module.exports.deleteDocument = deleteDocument;


//Semple's great way of pulling an array from the database
function getArray(collection) {
 // Clone the data. We do this to model a database, where you receive a
 // *copy* of an object and not the object itself.
 return JSONClone(data[collection]);
 }
module.exports.getArray = getArray;




/**
 * Returns an entire object collection.
 */
function getCollection(collectionName) {
  return JSONClone(data[collectionName]);
}
module.exports.getCollection = getCollection;

/**
 * Reset the database.
 */
function resetDatabase() {
  data = JSONClone(initialData);
  updated = true;
}
module.exports.resetDatabase = resetDatabase;

// Periodically updates the database on the hard drive
// when changed.
setInterval(function() {
  if (updated) {
    fs.writeFileSync(path.join(__dirname, 'database.json'), JSON.stringify(data), { encoding: 'utf8' });
    updated = false;
  }
}, 200);
