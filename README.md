# Golf Store - API Server w/ MongoDB 
*This server will return/update/create data at the described endpoints (URLs) below:*

## GET
##### URL: https://nodejs-api-server-dgm3760.herokuapp.com/api/characters
*Hitting this endpoint will load Harry Potter JSON data of 3 characters from local memory.*

## POST
##### URL: https://nodejs-api-server-dgm3760.herokuapp.com/api/characters/new
*Hitting this endpoint will add the object with Sirius Black onto the characters array with JSON data (4 item) to local memory.*

## PUT (UPDATE)
##### URL: https://nodejs-api-server-dgm3760.herokuapp.com/api/characters/update/:id
##### USE PATH VAR ID -> 5a12327c0f5ae10021650d94
*Hitting this endpoint and using this id will update the 3rd item in the JSON data's name from ***Salazar Slytherin*** to ***Tyler Ivie****

## DELETE
##### URL: https://nodejs-api-server-dgm3760.herokuapp.com/api/characters/delete/:id
##### USE PATH VAR ID -> 5a12327c0f5ae10021650d94
*Hitting this endpoint and using this id will delete the 3rd item in the JSON data.*