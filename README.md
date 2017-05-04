# Uthrift-Web-App

To try uthrift out. Uthrift has two main folders, client and server

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
      1. "C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe" --dbpath datafoldername
7. Go to http://localhost:3000 in a browser
