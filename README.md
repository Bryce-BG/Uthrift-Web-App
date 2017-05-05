# team-project-client-template

Uthrift has two main folders, client and server

Installation

1. Install node.js  https://nodesource.com/blog/installing-nodejs-tutorial-windows/
2. Install mongodb  https://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/
3. Git clone the project
4. Install Node dependencies 
   1. Client folder
      1. npm install
      2. npm install history@2.0
   2. Server folder
      1. npm install
5. Create a data folder outside the project folder
6. Run three prompts
   1. Server folder: 
      1. Run: node src/resetdatabase.js
      2. Run: node src/server.js
   2. Client folder
      1. Run: npm run watch
   3. Outside data folder
      Windows
         1. "C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe" --dbpath datafoldername
      Mac/Linux
         1. mongod --dbpath datafoldername
7. Go to http://localhost:3000 in a browser

Current features

1. Can search for items in the database (whole word match)
2. Can search for classes in the database (must choose category 'classes')
3. Pressing on items links to the respective item page
4. Can sell an item via the sell item link in navbar.
   Must enter in a Title, price, category, condition and description
   Can also select from a list of class items to use as templates
      These items still require the user to fill in price and condition of the listing
5. Can view the user profile and modify account info

