$('#btn').click(function() {
    let endpoint = 'https://api.coindesk.com/v1/bpi/currentprice.json'
    fetch(endpoint)
    .then((response) => {
        if (response.ok) return response.json()
        throw Error(!response.json() ? 'no data' : 'cannot connect!')
    })
    .then((data) => {
        let country = $('input[name="country"]:checked').val()
        $('#displayPrice').text(data.bpi[country].rate)
    })
    .catch((error) => {

    })
})