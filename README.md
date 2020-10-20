# Golf Store - API Server w/ MongoDB 
##### MAIN URL: https://node-server-db.herokuapp.com/golf
*This server will return/update/create data at the described endpoints (URLs) below:*

## GET
##### URL: https://node-server-db.herokuapp.com/golf
*Hitting this endpoint will get all golf product JSON data from the database.*

## POST
##### URL: https://node-server-db.herokuapp.com/golf?name=SIM Driver&category=TaylorMade&price=$549.99&qty=7
*Hitting this endpoint will add a new golf product to the database with the above params.*

## DELETE
##### URL: https://node-server-db.herokuapp.com/golf/5f8e675e2302ef8a45b29131
*Hitting this endpoint and using this id will delete the ***Titleist Golf Glove*** from the database.*

## PUT (UPDATE)
##### URL: https://node-server-db.herokuapp.com/golf/5f8e66212302ef8a45b2912c?qty=15
*Hitting this endpoint and using this id will update ***TaylorMade Spider S Chalk Putter*** quantity in the database from
 ***25*** to ***15****

## GET
##### URL: https://node-server-db.herokuapp.com/manufactures
*Hitting this endpoint will get all manufactures JSON data from the database.*

## POST
##### URL: https://node-server-db.herokuapp.com/manufactures?name=Bridgestone&address=999 Park Ave. NY, U.S.A&phone=(455) 123-4567
*Hitting this endpoint will add a new manufacture to the database with the above params.*

## PUT (UPDATE)
##### URL: https://node-server-db.herokuapp.com/manufactures/5f8e65282302ef8a45b29129?address=1000 Beaverton, OR, U.S.A
*Hitting this endpoint and using this id will update the manufacture ***Nike's*** address in the database from
 ***Beaverton, OR*** to ***1000 Beaverton, OR, U.S.A****
 
## DELETE
##### URL: https://node-server-db.herokuapp.com/manufactures/5f8e65282302ef8a45b29129
*Hitting this endpoint and using this id will delete the manufacture ***Nike*** from the database.*

## GET
##### URL: https://node-server-db.herokuapp.com/manufactureProducts?name=TaylorMade
*Hitting this endpoint will get all golf products from a given manufacture from the database.*