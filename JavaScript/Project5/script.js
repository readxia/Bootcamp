let backgrounds = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg']
let counter = 0

function nextImage() {
    counter += 1
    if (counter >= backgrounds.length) {
        counter = 0
    }
    document.querySelector('img').setAttribute('src', backgrounds[counter])

}

function prevImage() {
    counter -= 1
    if (counter < 0) {
        counter = backgrounds.length - 1
    }
    document.querySelector('img').setAttribute('src', backgrounds[counter])
}