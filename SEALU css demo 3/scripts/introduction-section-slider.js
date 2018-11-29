
let i = 0; // start point
let slideDivs = document.querySelectorAll('.introduction-carousel');
const slideInterval = 2000;

slideDivs[0] = document.querySelector('#carousel-1');
slideDivs[1] = document.querySelector('#carousel-2');
slideDivs[2] = document.querySelector('#carousel-3');

function switchDiv() {

    slideDivs.forEach(div => {
        div.style.display = 'none';
        for (i = 0; i < slideDivs.length; i++) {
            if (slideDivs[i]) {
                div.style.display = 'block';
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', setInterval(switchDiv, slideInterval));


