## Question A (50% credit): 

What does the following code do?  How can you reverse the order?

    
    var points = [40, 100, 1, 5, 25, 10];
    points.sort(function(roo,raa){return roo-raa});

The code sorts the array points from smallest to largest, specifically numbers. To reverse the order, we can swap the positions of roo and raa in the return statement, OR in the parameters (but only one of them)
    

## Question B (50% credit): 

What's wrong with my code below?  How would you fix it?  Would using `var pi =` help? Why or why not?

    https://jsbin.com/tefuyir/edit?js,console
    
First, you need to declare var pi before using it in calculation for var boundary. You can omit var pi altogether and just put 3.1415926 in the boundary calculation anyways.
Next, I would remove the console log for calling the function at the end. Since the function is already console logging a response and not returning a value, console logging the function will not have a value and will be undefined