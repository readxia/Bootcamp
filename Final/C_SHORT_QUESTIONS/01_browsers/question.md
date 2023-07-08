Does the HTML below trigger a HTTP GET request for the picture file, when the page first loads?  

Put it in a sample page, load it and check out the network tab in the Devtools.

Provide the test page and image that you used within the answer to this question.

Case 1:
    `<img src="dog.jpg" style="visibility: hidden" alt="my dog">`

    Yes, this triggered an HTTP GET request as seen on dev tools with the hiddenVisibility.png
    this makes sense because the image is taking up space, but is just hidden


Case 2:
    `<img src="dog.jpg" style="display:none" alt="my dog">`

    Yes, this also triggered an HTTP GET request as seen on dev tools with the displayNone.png
    even though the image did not take up any space
