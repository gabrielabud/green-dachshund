
<img src="https://gabrielabudeanu.ro/green-dachshund.svg" alt="logo" width="220">

# Green Dachshund Challenge
Build a `GET /search` endpoint that will return the most appropriate 20 items given `searchTerm`, `lat` (latitude) and `lng` (longitude). e.g. `/search?searchTerm=camera&lat=51.948&lng=0.172943`. It is up to you to decide how to weight the two factors to return the most relevant results. We have provided you with a sqlite database containing just under 2000 items with the relevant fields.

# Instructions
- $ git clone git@gitlab.com:gabrielabud/green-dachshund.git --> $ git checkout develop 
- $ npm install
- $ psql --> CREATE DATABASE green_dachshund; CREATE DATABASE green_dachshund_test;
- $ knex migrate:latest --> for running the database migrations on the development db green_dachshund
- $ knex migrate:latest --env test -> for running the db migrations on the test db green_dachshund_test
- To be able to query sampled data direclty from the development database directly import the data found in ./src/db/items.json into green_dachshund. 
  I have previously exported the json file from the sqlite database provided.
- $ npm run start --> for running the server

- $ npm run test:integration --> for running the tests.
  The seed data for the tests it's located at ./src/db/data and represents a smaller selection of data from the sqlite db provided in the challenge.

# Technologies
- I have build the API using Node.js and Express server framework
- The database is PostgresSQL, having used Knex for connecting to and querying the database
- For integration testing I have used Mocha(test framework running on Node.js), Chai(assertion library) and Chai-HTTP(making the http requests)

# Design
The API endpoints implemented is GET /search with optional query strings: searchTerm, lat and lng 
--> /search?searchTerm=camera&lat=51.948&lng=0.172943

- If no query strings are provided, the endpoint will return the first 20 items from the database.
- It is possible to provide only a searchTerm and no lat and lng coordinates, the items being filtered only by item_name.
- The user could only provide lat and lng, the results being the closest items by distance no matter the name of the items.

# If I had more time I would have:
- unit tested the db queries, controller and router files
- implemented a logger
- created a swagger for documenting the API, where I would have mentioned the required and option query strings
- used a middleware to validate the swagger files


 

 


