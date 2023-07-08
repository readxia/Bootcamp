Take a look at this code snippet

  https://jsbin.com/rufarat/edit?html,output

## Question: 

1. Why can I not set the margin-top on the span with the id "txt" ? 

Spans are not block level elements who can have margins on all 4 sides, spans are inline elements that can only have left and right margins.

1. Why can I not set the margin-top on the img with the id "pic" in the head section?

The margin-top 200px is being overruled by the inline style (margin top 50px). Removing the inline style will allow the pic id tag margintop to show.
