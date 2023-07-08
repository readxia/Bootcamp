Consider the following code.  What would be console logged?  Why is apple type reported incorrectly?

What would you change to address this issue (the Apple type is mis-represented in the last line below)?

We need to make a deeper clone of the apple object since var orange is just a reference to the apple object. Using the spread operater, I would change the 

```js
var orange = apple
```
to 
```js
var orange = {...apple}
```
This will make a slightly deeper copy of apple.


```js
    const apple = {
        type: 'Granny Smith',
        weight:  4
    }

    var orange = apple

    orange.type = 'Clementine'

    console.log('Apple type is ', apple.type)
```

Why does this comparison return false?  Please explain.

When you compare two objects using the == operator, you compare the reference pointers and not the contents of the objects, and since the objects were initiated seperately and not in reference to each other, their reference pointers are unique. To use the === operator, we would first have to json.stringify() the objects.

```js    
    var school_a = {name: 'UTexas', place: 'Austin'};
    var school_b = {name: 'UTexas', place: 'Austin'};

    console.log(school_a == school_b);   // returns false, why?
```