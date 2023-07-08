db.getCollection("doggy").find({})

show dbs
db.animals.distinct('type')
db.animals.distinct('eggsAreEdible')
db.animals.find({})

    use readQ9
    db.animals.insert( { type : ['dog', 'cat'] } );
    db.animals.insert( { type :  ['cat'] } );
    db.animals.insert( { type : ['cow'] } );
    db.animals.insert( { type: ['duck', 'hen', 'ostrich'], eggsAreEdible : true}  )