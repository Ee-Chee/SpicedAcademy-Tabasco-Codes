var sky = document.querySelector('.sky')
var cloud = document.getElementsByClassName('cloud-container')[0]
var board = document.querySelector('.board')
var player = document.querySelector('.player')

var left = 50


// ------- moving player using RIGHT ARROW KEY
// document.addEventListener('keydown', function(evt) {
//     console.log('event', evt);
//     // 39 = the right arrow key on your keyboard
//     if (evt.keyCode === 39) {
//         left += 10
//         player.style.left = left + 'px'
//     }
// })


// ------- moving player using CLICK
board.addEventListener('click', function() {
    left += 70
    player.style.left = left + 'px'
})


// ------- make sky black when clicking on CLOUD
cloud.addEventListener('click', function(evt) {
    evt.stopPropagation()
    sky.style.background = 'black'
})




// -------------- randomly generate colors!
function rgbColors() {
    var rgbArr = []
    for (var i = 0; i < 3; i++) {
        var r = Math.floor(Math.random() * 256)
        rgbArr.push(r)
    }
    return rgbArr
}

var rgb = rgbColors()

someElement.style.background = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')'
