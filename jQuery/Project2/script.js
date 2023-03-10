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