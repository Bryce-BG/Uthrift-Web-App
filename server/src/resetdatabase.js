var ObjectID = require('mongodb').ObjectID;

var databaseName = "uthrift";

var initialData = {
  "users": {
    "1": {
      "_id": new ObjectID("000000000000000000000001"),
      "Email": "johndoe@umass.edu",
      "Cellphone": "987-654-3210",
      "FirstName": "John",
      "LastName": "Doe",
      "NickName": "Someone",
      "Photo": "img/avatar.png",
      "trackList": [],
      "sellingList": [new ObjectID("000000000000000000000004"),new ObjectID("000000000000000000000005"),new ObjectID("000000000000000000000006"),new ObjectID("000000000000000000000007"),new ObjectID("000000000000000000000008"),new ObjectID("000000000000000000000009"),new ObjectID("000000000000000000000010"),new ObjectID("000000000000000000000011"),new ObjectID("000000000000000000000012"),new ObjectID("000000000000000000000013"),
      new ObjectID("000000000000000000000019"),new ObjectID("000000000000000000000020"),new ObjectID("000000000000000000000025"),new ObjectID("000000000000000000000033"),new ObjectID("000000000000000000000034"),new ObjectID("000000000000000000000035"),new ObjectID("000000000000000000000036"),new ObjectID("000000000000000000000039"),new ObjectID("000000000000000000000040"),new ObjectID("000000000000000000000041"),new ObjectID("000000000000000000000042"),
      new ObjectID("000000000000000000000043")],
      "Password": "123456",
      "viewingItem": new ObjectID("000000000000000000000001"),
      "recomendedItems": [new ObjectID("000000000000000000000001"),new ObjectID("000000000000000000000002"),new ObjectID("000000000000000000000003"),new ObjectID("000000000000000000000004"),new ObjectID("000000000000000000000005"),new ObjectID("000000000000000000000006"),new ObjectID("000000000000000000000007"),new ObjectID("000000000000000000000001"),new ObjectID("000000000000000000000001")]

    },
    "2": {
      "_id": new ObjectID("000000000000000000000002"),
      "Email": "janerando@umass.edu",
      "Cellphone": "012-345-5678",
      "FirstName": "Jane",
      "LastName": "Rando",
      "NickName": "AnotherOne",
      "Photo": "img/avatar2.png",
      "trackList": [],
      "sellingList": [new ObjectID("000000000000000000000001"),new ObjectID("000000000000000000000002"),new ObjectID("000000000000000000000003"),new ObjectID("000000000000000000000014"),new ObjectID("000000000000000000000015"),new ObjectID("000000000000000000000016"),new ObjectID("000000000000000000000017"),new ObjectID("000000000000000000000018"),new ObjectID("000000000000000000000021"),new ObjectID("000000000000000000000022"),
      new ObjectID("000000000000000000000023"),new ObjectID("000000000000000000000024"),new ObjectID("000000000000000000000026"),new ObjectID("000000000000000000000027"),new ObjectID("000000000000000000000028"),new ObjectID("000000000000000000000029"),new ObjectID("000000000000000000000030"),new ObjectID("000000000000000000000031"),new ObjectID("000000000000000000000032"),new ObjectID("000000000000000000000037"),new ObjectID("000000000000000000000038")],
      "Password": "233333",
      "viewingItem": new ObjectID("000000000000000000000001"),
      "recomendedItems": [new ObjectID("000000000000000000000001"),new ObjectID("000000000000000000000002"),new ObjectID("000000000000000000000003"),new ObjectID("000000000000000000000004"),new ObjectID("000000000000000000000005"),new ObjectID("000000000000000000000006"),new ObjectID("000000000000000000000007"),new ObjectID("000000000000000000000001"),new ObjectID("000000000000000000000001")]

    }
  },
  "items":
  {
    "1":
    {
      "_id": new ObjectID("000000000000000000000001"),
      "core_id": new ObjectID("000000000000000000000001"),
      "Title": "iclicker",
      "Price": "10,000",
      "Description": "Class Prison Key",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Tech",
      "photoRef": "img/iclicker.jpg",
      "SellerID": new ObjectID("000000000000000000000002")
    },
    "2":
    {
      "_id": new ObjectID("000000000000000000000002"),
      "core_id": new ObjectID("000000000000000000000002"),
      "Title": "Cracking The Code",
      "Price": "18.00",
      "Description": "Item 1 Description",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Textbooks",
      "photoRef": "img/book1.jpg",
      "SellerID": new ObjectID("000000000000000000000002")
    },
    "3":
    {
      "_id": new ObjectID("000000000000000000000003"),
      "core_id": new ObjectID("000000000000000000000003"),
      "Title": "Introductions to Algorithms",
      "Price": "21.00",
      "Description": "Item 2 Description",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Textbooks",
      "photoRef": "img/book2.jpg",
      "SellerID": new ObjectID("000000000000000000000002")
    },
    "4":
    {
      "_id": new ObjectID("000000000000000000000004"),
      "core_id": new ObjectID("000000000000000000000004"),
      "Title": "Artificial Intelligence",
      "Price": "25.00",
      "Description": "Item 3 Description",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Textbooks",
      "photoRef": "img/book3.jpg",
      "SellerID": new ObjectID("000000000000000000000001")
    },
    "5":
    {
      "_id": new ObjectID("000000000000000000000005"),
      "core_id": new ObjectID("000000000000000000000005"),
      "Title": "The Rules of Love",
      "Price": "7.50",
      "Description": "Item 4 Description",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Textbooks",
      "photoRef": "img/book4.jpg",
      "SellerID": new ObjectID("000000000000000000000001")
    },
    "6":
    {
      "_id": new ObjectID("000000000000000000000006"),
      "core_id": new ObjectID("000000000000000000000000"),
      "Title": "What I Wish I Knew When I was 20",
      "Price": "5.00",
      "Description": "Item 5 Description",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Textbooks",
      "photoRef": "img/book5.jpg",
      "SellerID": new ObjectID("000000000000000000000001")
    },
    "7":
    {
      "_id": new ObjectID("000000000000000000000007"),
      "core_id": new ObjectID("000000000000000000000006"),
      "Title": "Unlock Your Educational Potental",
      "Price": "6.00",
      "Description": "Item 6 Description",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Textbooks",
      "photoRef": "img/book6.jpg",
      "SellerID": new ObjectID("000000000000000000000001")
    },
    "8":
    {
      "_id": new ObjectID("000000000000000000000008"),
      "core_id": new ObjectID("000000000000000000000000"),
      "Title": "Dress",
      "Price": "6.00",
      "Description": "Classy Dress",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Clothing",
      "photoRef": "img/dress.jpg",
      "SellerID": new ObjectID("000000000000000000000001")
    }
    ,
    "9":
    {
      "_id": new ObjectID("000000000000000000000009"),
      "core_id": new ObjectID("000000000000000000000000"),
      "Title": "Skirt",
      "Price": "6.00",
      "Description": "Shining Skirt",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Clothing",
      "photoRef": "img/skirt.jpg",
      "SellerID": new ObjectID("000000000000000000000001")
    },
    "10":
    {
      "_id": new ObjectID("000000000000000000000010"),
      "core_id": new ObjectID("000000000000000000000000"),
      "Title": "Jacket",
      "Price": "6.00",
      "Description": "Old Jacket",
      "Condition": "Used",
      "Sold": false,
      "Category": "Clothing",
      "photoRef": "img/clothing3.png",
      "SellerID": new ObjectID("000000000000000000000001")
    },
    "11":
    {
      "_id": new ObjectID("000000000000000000000011"),
      "core_id": new ObjectID("000000000000000000000000"),
      "Title": "Bomber Jacket",
      "Price": "6.00",
      "Description": "Savy Bomber Jacket",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Clothing",
      "photoRef": "img/clothing4.jpg",
      "SellerID": new ObjectID("000000000000000000000001")
    },
    "12":
    {
      "_id": new ObjectID("000000000000000000000012"),
      "core_id": new ObjectID("000000000000000000000000"),
      "Title": "UMass Hoodie",
      "Price": "6.00",
      "Description": "ZooMass Swag",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Clothing",
      "photoRef": "img/clothing5.jpg",
      "SellerID": new ObjectID("000000000000000000000001")
    },
    "13":
    {
      "_id": new ObjectID("000000000000000000000013"),
      "core_id": new ObjectID("000000000000000000000000"),
      "Title": "Jacket",
      "Price": "66.00",
      "Description": "New Jacket",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Clothing",
      "photoRef": "img/clothing3.png",
      "SellerID": new ObjectID("000000000000000000000001")
    },
    "14":
    {
      "_id": new ObjectID("000000000000000000000014"),
      "core_id": new ObjectID("000000000000000000000000"),
      "Title": "lamp",
      "Price": "10",
      "Description": "Lighting Life",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Tech",
      "photoRef": "img/Lamp.jpg",
      "SellerID": new ObjectID("000000000000000000000002")
    },
    "15":
    {
      "_id": new ObjectID("000000000000000000000015"),
      "core_id": new ObjectID("000000000000000000000000"),
      "Title": "USB",
      "Price": "5",
      "Description": "Saves Your Data",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Tech",
      "photoRef": "img/tech2.jpg",
      "SellerID": new ObjectID("000000000000000000000002")
    },
    "16":
    {
      "_id": new ObjectID("000000000000000000000016"),
      "core_id": new ObjectID("000000000000000000000000"),
      "Title": "Earphones",
      "Price": "1",
      "Description": "Help U Concentrate",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Tech",
      "photoRef": "img/tech3.jpg",
      "SellerID": new ObjectID("000000000000000000000002")
    },
    "17":
    {
      "_id": new ObjectID("000000000000000000000017"),
      "core_id": new ObjectID("000000000000000000000000"),
      "Title": "Phone Case",
      "Price": "9",
      "Description": "Saves U Ton",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Tech",
      "photoRef": "img/tech4.jpg",
      "SellerID": new ObjectID("000000000000000000000002")
    },
    "18":
    {
      "_id": new ObjectID("000000000000000000000018"),
      "core_id": new ObjectID("000000000000000000000000"),
      "Title": "Master Clicker",
      "Price": "10,000",
      "Description": "Hack Your Score",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Tech",
      "photoRef": "img/iclicker.jpg",
      "SellerID": new ObjectID("000000000000000000000002")
    },
    "19":
    {
      "_id": new ObjectID("000000000000000000000019"),
      "core_id": new ObjectID("000000000000000000000000"),
      "Title": "Cuddle Up",
      "Price": "1",
      "Description": "Be Warm Friends",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Events",
      "photoRef": "img/clothing3.png",
      "SellerID": new ObjectID("000000000000000000000001")
    },
    "20":
    {
      "_id": new ObjectID("000000000000000000000020"),
      "core_id": new ObjectID("000000000000000000000000"),
      "Title": "Study",
      "Price": "0",
      "Description": "Study a Ton!",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Events",
      "photoRef": "img/Lamp.jpg",
      "SellerID": new ObjectID("000000000000000000000002")
    },
    "21":
    {
      "_id": new ObjectID("000000000000000000000021"),
      "core_id": new ObjectID("000000000000000000000000"),
      "Title": "Big Data",
      "Price": "5",
      "Description": "Data Science Talk",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Events",
      "photoRef": "img/tech2.jpg",
      "SellerID": new ObjectID("000000000000000000000002")
    },
    "22":
    {
      "_id": new ObjectID("000000000000000000000022"),
      "core_id": new ObjectID("000000000000000000000000"),
      "Title": "Listen Up",
      "Price": "1",
      "Description": "Concentrate",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Events",
      "photoRef": "img/tech3.jpg",
      "SellerID": new ObjectID("000000000000000000000002")
    },
    "23":
    {
      "_id": new ObjectID("000000000000000000000023"),
      "core_id": new ObjectID("000000000000000000000000"),
      "Title": "Phone Protection",
      "Price": "3",
      "Description": "Save Our Earth",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Events",
      "photoRef": "img/tech4.jpg",
      "SellerID": new ObjectID("000000000000000000000002")
    },
    "24":
    {
      "_id": new ObjectID("000000000000000000000024"),
      "core_id": new ObjectID("000000000000000000000000"),
      "Title": "Click and Hack",
      "Price": "10,000",
      "Description": "Hack into Moodle!",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Events",
      "photoRef": "img/iclicker.jpg",
      "SellerID": new ObjectID("000000000000000000000002")
    },
    "25":
    {
      "_id": new ObjectID("000000000000000000000025"),
      "core_id": new ObjectID("000000000000000000000000"),
      "Title": "Cuddle Up",
      "Price": "1",
      "Description": "Be Warm Friends",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Miscellaneous",
      "photoRef": "img/clothing3.png",
      "SellerID": new ObjectID("000000000000000000000001")
    },
    "26":
    {
      "_id": new ObjectID("000000000000000000000026"),
      "core_id": new ObjectID("000000000000000000000000"),
      "Title": "Study",
      "Price": "0",
      "Description": "Study a Ton!",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Miscellaneous",
      "photoRef": "img/Lamp.jpg",
      "SellerID": new ObjectID("000000000000000000000002")
    },
    "27":
    {
      "_id": new ObjectID("000000000000000000000027"),
      "core_id": new ObjectID("000000000000000000000000"),
      "Title": "Phone Protection",
      "Price": "3",
      "Description": "Save Our Earth",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Miscellaneous",
      "photoRef": "img/tech4.jpg",
      "SellerID": new ObjectID("000000000000000000000002")
    },
    "28":
    {
      "_id": new ObjectID("000000000000000000000028"),
      "core_id": new ObjectID("000000000000000000000000"),
      "Title": "Listen Up",
      "Price": "1",
      "Description": "Concentrate",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Miscellaneous",
      "photoRef": "img/tech3.jpg",
      "SellerID": new ObjectID("000000000000000000000002")
    },
    "29":
    {
      "_id": new ObjectID("000000000000000000000029"),
      "core_id": new ObjectID("000000000000000000000000"),
      "Title": "Big Data",
      "Price": "5",
      "Description": "Data Science Talk",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Miscellaneous",
      "photoRef": "img/tech2.jpg",
      "SellerID": new ObjectID("000000000000000000000002")
    },
    "30":
    {
      "_id": new ObjectID("000000000000000000000030"),
      "core_id": new ObjectID("000000000000000000000000"),
      "Title": "Click and Hack",
      "Price": "10,000",
      "Description": "Hack into Moodle!",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Miscellaneous",
      "photoRef": "img/iclicker.jpg",
      "SellerID": new ObjectID("000000000000000000000002")
    },
    "31":
    {
      "_id": new ObjectID("000000000000000000000031"),
      "core_id": new ObjectID("000000000000000000000002"),
      "Title": "Cracking The Code",
      "Price": "18.00",
      "Description": "CS187 Basic Coding",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Textbooks",
      "photoRef": "img/book1.jpg",
      "SellerID": new ObjectID("000000000000000000000002")
    },
    "32":
    {
      "_id": new ObjectID("000000000000000000000032"),
      "core_id": new ObjectID("000000000000000000000003"),
      "Title": "Introductions to Algorithms",
      "Price": "21.00",
      "Description": "CS311 Algorithms",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Textbooks",
      "photoRef": "img/book2.jpg",
      "SellerID": new ObjectID("000000000000000000000002")
    },
    "33":
    {
      "_id": new ObjectID("000000000000000000000033"),
      "core_id": new ObjectID("000000000000000000000004"),
      "Title": "Artificial Intelligence",
      "Price": "25.00",
      "Description": "CS383 AI",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Textbooks",
      "photoRef": "img/book3.jpg",
      "SellerID": new ObjectID("000000000000000000000001")
    },
    "34":
    {
      "_id": new ObjectID("000000000000000000000034"),
      "core_id": new ObjectID("000000000000000000000005"),
      "Title": "The Rules of Love",
      "Price": "7.50",
      "Description": "COLL200 Love",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Textbooks",
      "photoRef": "img/book4.jpg",
      "SellerID": new ObjectID("000000000000000000000001")
    },
    "35":
    {
      "_id": new ObjectID("000000000000000000000035"),
      "core_id": new ObjectID("000000000000000000000000"),
      "Title": "What I Wish I Knew When I was 20",
      "Price": "5.00",
      "Description": "COLL102 Life Advices",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Textbooks",
      "photoRef": "img/book5.jpg",
      "SellerID": new ObjectID("000000000000000000000001")
    },
    "36":
    {
      "_id": new ObjectID("000000000000000000000036"),
      "core_id": new ObjectID("000000000000000000000006"),
      "Title": "Unlock Your Educational Potental",
      "Price": "6.00",
      "Description": "COLL 101 Education",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Textbooks",
      "photoRef": "img/book6.jpg",
      "SellerID": new ObjectID("000000000000000000000001")
    },
    "37":
    {
      "_id": new ObjectID("000000000000000000000037"),
      "core_id": new ObjectID("000000000000000000000000"),
      "Title": "Bed",
      "Price": "49.00",
      "Description": "Cozy Bed",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Furniture",
      "photoRef": "img/furniture.jpg",
      "SellerID": new ObjectID("000000000000000000000002")
    },
    "38":
    {
      "_id": new ObjectID("000000000000000000000038"),
      "core_id": new ObjectID("000000000000000000000000"),
      "Title": "Bunk",
      "Price": "51.00",
      "Description": "Space Efficient Bunk",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Furniture",
      "photoRef": "img/furniture.jpg",
      "SellerID": new ObjectID("000000000000000000000002")
    },
    "39":
    {
      "_id": new ObjectID("000000000000000000000039"),
      "core_id": new ObjectID("000000000000000000000000"),
      "Title": "High Chair",
      "Price": "20.00",
      "Description": "High Chair for Babies",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Furniture",
      "photoRef": "img/furniture.jpg",
      "SellerID": new ObjectID("000000000000000000000001")
    },
    "40":
    {
      "_id": new ObjectID("000000000000000000000040"),
      "core_id": new ObjectID("000000000000000000000000"),
      "Title": "Chair",
      "Price": "10.50",
      "Description": "Chair for Sitting",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Furniture",
      "photoRef": "img/furniture.jpg",
      "SellerID": new ObjectID("000000000000000000000001")
    },
    "41":
    {
      "_id": new ObjectID("000000000000000000000041"),
      "core_id": new ObjectID("000000000000000000000000"),
      "Title": "Bookshelf",
      "Price": "15.00",
      "Description": "Used Bookshelf",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Furniture",
      "photoRef": "img/furniture.jpg",
      "SellerID": new ObjectID("000000000000000000000001")
    },
    "42":
    {
      "_id": new ObjectID("000000000000000000000042"),
      "core_id": new ObjectID("000000000000000000000000"),
      "Title": "Bookshelf",
      "Price": "36.00",
      "Description": "Sturdy Bookshelf",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Furniture",
      "photoRef": "img/furniture.jpg",
      "SellerID": new ObjectID("000000000000000000000001")
    },

    "43":
    {
      "_id": new ObjectID("000000000000000000000043"),
      "core_id": new ObjectID("000000000000000000000000"),
      "Title": "Sushi",
      "Price": "9999.00",
      "Description": "Rice + Fish + Tender, love and care",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Miscellaneous",
      "photoRef": "img/sushi.jpg",
      "SellerID": new ObjectID("000000000000000000000001")
    }
  },
  "classItems":
  {
    "1":
    {
      "_id": new ObjectID("000000000000000000000001"),
      "Title": "iclicker",
      "Description": "Class Prison Key",
      "Category": "Tech",
      "photoRef": "img/iclicker.jpg"
    },
    "2":
    {
      "_id": new ObjectID("000000000000000000000002"),
      "Title": "Cracking The Code",
      "Description": "Item 1 Description",
      "Category": "Textbooks",
      "photoRef": "img/book1.jpg"
    },
    "3":
    {
      "_id": new ObjectID("000000000000000000000003"),
      "Title": "Introductions to Algorithms",
      "Description": "Item 2 Description",
      "Category": "Textbooks",
      "photoRef": "img/book2.jpg"
    },
    "4":
    {
      "_id": new ObjectID("000000000000000000000004"),
      "Title": "Artificial Intelligence",
      "Description": "Item 3 Description",
      "Category": "Textbooks",
      "photoRef": "img/book3.jpg"
    },
    "5":
    {
      "_id": new ObjectID("000000000000000000000005"),
      "Title": "The Rules of Love",
      "Description": "Item 4 Description",
      "Category": "Textbooks",
      "photoRef": "img/book4.jpg"
    },
    "6":
    {
      "_id": new ObjectID("000000000000000000000006"),
      "Title": "Unlock Your Educational Potental",
      "Description": "Item 6 Description",
      "Category": "Textbooks",
      "photoRef": "img/book6.jpg"
    }
  },

  "classes":
  {
    "1":
    {
      "_id": new ObjectID("000000000000000000000001"),
      "title": "Web Developement",
      "code": "CS 326",
      "description": "We teach you how to make facebook",
      "instructor": "Tim Richards, First of his name",
      "credits": "3",
      "term": "Spring 2017",
      "subject": "Computer Science",
      "textbookList": [new ObjectID("000000000000000000000002"),new ObjectID("000000000000000000000003"),new ObjectID("000000000000000000000004")],
      "techList": [new ObjectID("000000000000000000000001")],
      "Photo": "img/class.png"
    },
    "2":
    {
      "_id": new ObjectID("000000000000000000000002"),
      "title": "Test",
      "code": "CS 000",
      "description": "This is just a test",
      "instructor": "No Man",
      "credits": "6",
      "term": "Spring 2017",
      "subject": "Computer Science",
      "textbookList": [new ObjectID("000000000000000000000004"),new ObjectID("000000000000000000000005")],
      "techList": [],
      "Photo": "img/class.png"
    },
    "3":
    {
      "_id": new ObjectID("000000000000000000000003"),
      "title": "Writing Composition",
      "code": "ENG 101",
      "description": "This class teaches you how to english well",
      "instructor": "Ten Goodmen",
      "credits": "3",
      "term": "Spring 2017",
      "subject": "English",
      "textbookList": [new ObjectID("000000000000000000000005")],
      "techList": [],
      "Photo": "img/class.png"
    },
    "4":
    {
      "_id": new ObjectID("000000000000000000000004"),
      "title": "Essay Hell",
      "code": "ENG 666",
      "description": "Death by a million essays",
      "instructor": "Satan",
      "credits": "666",
      "term": "Spring 2017",
      "subject": "English",
      "textbookList": [new ObjectID("000000000000000000000006")],
      "techList": [new ObjectID("000000000000000000000001")],
      "Photo": "img/class.png"
    }
  },
  "recomendedItems": [new ObjectID("000000000000000000000001"),new ObjectID("000000000000000000000002"),new ObjectID("000000000000000000000003"),new ObjectID("000000000000000000000004"),new ObjectID("000000000000000000000005"),new ObjectID("000000000000000000000006"),new ObjectID("000000000000000000000007"),new ObjectID("000000000000000000000001"),new ObjectID("000000000000000000000001")]
};

function resetDatabase(db, cb) {
  // The code below is a bit complex, but it basically emulates a
  // "for" loop over asynchronous operations.
  var collections = Object.keys(initialData);
  var i = 0;

  // Processes the next collection in the collections array.
  // If we have finished processing all of the collections,
  // it triggers the callback.
  function processNextCollection() {
    if (i < collections.length) {
      var collection = collections[i];
      i++;
      // Use myself as a callback.
      resetCollection(db, collection, processNextCollection);
    } else {
        addIndexes(db, cb);
    }
  }

  // Start processing the first collection!
  processNextCollection();
}

function resetCollection(db, name, cb) {
  // Drop / delete the entire object collection.
  db.collection(name).drop(function() {
    // Get all of the mock objects for this object collection.
    var collection = initialData[name];
    var objects = Object.keys(collection).map(function(key) {
      return collection[key];
    });
    // Insert objects into the object collection.
    db.collection(name).insertMany(objects, cb);
  });
}

// Check if called directly via 'node', or required() as a module.
// http://stackoverflow.com/a/6398335
if(require.main === module) {
  // Called directly, via 'node src/resetdatabase.js'.
  // Connect to the database, and reset it!
  var MongoClient = require('mongodb').MongoClient;
  var url = 'mongodb://localhost:27017/' + databaseName;
  MongoClient.connect(url, function(err, db) {
    if (err) {
      throw new Error("Could not connect to database: " + err);
    } else {
      console.log("Resetting database...");
      resetDatabase(db, function() {
        console.log("Database reset!");
        // Close the database connection so NodeJS closes.
        db.close();
      });
    }
  });
} else {
  // require()'d.  Export the function.
  module.exports = resetDatabase;
}

function addIndexes(db, cb) {
  db.collection('classes').createIndex({ "title": "text", "subject": "text", "code": "text" }, null, cb);
  db.collection('items').createIndex({ "Title": "text", "Description": "text" }, null, cb);
}
