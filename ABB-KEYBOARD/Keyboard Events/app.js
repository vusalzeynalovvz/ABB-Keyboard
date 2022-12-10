
let circle = document.querySelector('.circle');
let move = 10;

window.addEventListener('load', () => {
    circle.style.position = 'absolute';
    circle.style.left = 0;
    circle.style.top = 0;
});


window.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
        case 37:
            circle.style.left = parseInt(circle.style.left) - move + 'px';
            break;
        case 39:
            circle.style.left = parseInt(circle.style.left) + move + 'px';
            break;
        case 38:
            circle.style.top = parseInt(circle.style.top) - move + 'px';
            break;
        case 40:
            circle.style.top = parseInt(circle.style.top) + move + 'px';
            break;
    }
});



// let x = 10;
// let y = 10;

// let box = document.getElementById('box1');
// document.body.onkeyup = function (e) {
//     if (e.onkeyup == 39) {
//         x+=10
//     } //right arrow
//     else if (e.onkeyup == 37) {
//         x+=10;
//     } //left arrow
//     else if (e.onkeyup == 38) {
//         y-=10;
//     } //up arrow
//     else if (e.onkeyup == 40) {
//         y+=10;

// }
// }
   