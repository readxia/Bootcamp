let text = $('h1').text()
alert('The content of my h1 tag is: ' + text)
$('h1').text("This is Read's header")
$('li#canine').text('lion')
$("li.feline:nth-of-type(2)").text('leopard')

$('img').attr('src', "https://i.imgur.com/YVmUMw7.gif")
let source = $('img').attr('src')
$('#imageSrc').text(source)
$('input:first').attr('type', 'color')
let color = $('input:first').attr('id')
$('input:first').attr('value', color)

$(':text').keydown(function() {
    let message = $(':text').val()
    $('#aboveValue').text(message)
})

let dropdownValue = $("select").val()