$('img').attr('src', 'https://images.dog.ceo/breeds/terrier-russell/iguet5.jpg')

$("button").on("click", function() {
    let endpoint = 'https://dog.ceo/api/breeds/image/random'
    fetch(endpoint)
    .then((response) => {
        //parse this response
        /* response will look like this:
        {
          "message": "https://images.dog.ceo/breeds/spaniel-irish/n02102973_2902.jpg",
           "status": "success"
        }*/
        if (response.ok) return response.json()
        throw Error(!response.json() ? 'no data' : 'cannot connect!')
    })
    .then((data) => {
        // do something with the data
        $('img').attr('src', data['message'])
    })
    .catch((error) => {
        //do this if there was an error
        let theStyles = {
            color: 'red',
            marginTop: 0
        }
        $('error').text(error).css(theStyles)
    })
})

/*
    fetch(endpoint)
    .then((response) => {
        //parse this response
    })
    .then((data) => {
        // do something with the data
    })
    .catch((error) => {
        //do this if there was an error
    })
    */