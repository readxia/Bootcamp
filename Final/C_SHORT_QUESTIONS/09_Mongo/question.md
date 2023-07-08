# MongoDB related questions. 

For testing these questions you may access the class server database using Studio 3T.

## Question A:

Suppose you run the following code on a MongoDB database

```
    use INSERT_YOUR_FIRST_NAME_AS_DB_NAME_HERE
    db.animals.insert( { type : ['dog', 'cat'] } );
    db.animals.insert( { type :  ['cat'] } );
    db.animals.insert( { type : ['cow'] } );
    db.animals.insert( { type: ['duck', 'hen', 'ostrich'], eggsAreEdible : true}   } );
```

On the data written above, write a mongo query that would return unique values of each of the keys:

	- type 
    db.animals.distinct('type')
    - eggs
    db.animals.distinct('eggsAreEdible')

## Question B:

In the above database, how would you count the number of mongo documents which contain a type "cat".

db.animals.countDocuments({type: 'cat'})

Note: these questions may seem challenging, but are quite easy to research on the documentation and try a few examples you may see online till you get an expected response.



## Question C: 

In the above dataset, update the document with `eggsAreEdible: true` to false.

db.animals.update({type: 'duck'}, {$set: {eggsAreEdible: false}})