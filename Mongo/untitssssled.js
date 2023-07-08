db.animals.countDocuments({type: 'cat'})
db.animals.update({type: 'duck'}, {$set: {eggsAreEdible: false}})