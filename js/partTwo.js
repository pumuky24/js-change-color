
const button = document.querySelector('.button');

const colorDisplay = document.querySelector('.color');


function toggleBackgroundColor() {

    const currentColor = document.body.style.backgroundColor;


    if (currentColor === 'darkblue') {
        document.body.style.backgroundColor = 'red';
        colorDisplay.textContent = 'red';
    } else {
        document.body.style.backgroundColor = 'darkblue';
        colorDisplay.textContent = 'darkblue';
    }
}


button.addEventListener('click', toggleBackgroundColor);