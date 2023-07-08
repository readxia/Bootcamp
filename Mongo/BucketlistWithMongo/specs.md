

when we consume an API:
1. THEY decides what endpoints we can use
2. THEY decide on format returned - JSON or XML
3. THEY decide on the amount of data returned
4. THEY decide what the data looks like (arrays, objects, etc)

when we want to build our own API, we have to decide all these things ^

Need to build a CRUD (create, read, update, delete) functional API but we only get two routes:
/bucket
/bucket/:id

example data:
{
    id: 1,
    description: 'call mom!',
    isComplete: false
}

where are we getting the data? Mongo
 
 Create - POST
 Read - GET
 Update - PUT/PATCH
 Delete - DELETE

 GET
 1. get route = /bucket
 2. returns JSON of whole list

 POST
 1. post route = /bucket
 2. post object
 
 DELETE
 1. Delete route = /bucket/:id
 2. send JSON of new list with item removed
 

 UPDATE
 1. PUT route = /bucket/:id
