$('img').click(function() {
    alert('You have click the image')
})
// $('li').click(function() {
//     alert('You have clicked on a list element')
// })

$('li').click(function() {
    $(this).fadeOut()
    alert('You just clicked on: ' + $(this).text())
})

$('span').click(function(event) {
    this.remove()
    event.stopPropagation()
})

$('p').click(function() {
    this.remove()
})

//The span and the paragraph are removed

$('div').click(function() {
    this.remove()
})

//The div and the paragraph and the span are removed all together

$('#keyDemo').keypress(function(event) {
    if (event.which === 13) {
        alert('you have pressed enter or carriage return')
    }
})

$('ol').append('Purple!')
$('ol').prepend('Green!!!')

$('img').click(function() {
    $(this).fadeOut(1000, 'linear', function() {
        alert('the image is now GONE')
    })
    
})