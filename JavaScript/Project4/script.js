let backgrounds = ['url("background1.jpg")', 'url("background2.jpg")', 'url("background3.jpg")']
let counter = 0

function rotateImages() {
    counter += 1
    if (counter >= backgrounds.length) {
        counter = 0
    }
    document.querySelector('body').style.backgroundImage = backgrounds[counter]
}

setInterval(rotateImages, 3000)

