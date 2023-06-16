let domObject = document.createElement('div');

domObject.setAttribute('style', '');

document.body.appendChild(domObject);

domObject.classList.add('box');

let newDomObject = document.querySelector('.box');

const vw = window.innerWidth;
const vh = window.innerHeight;
const velocity = 10;
const boxHeight = 50;
const boxWidth = 50;

let x = Math.floor(vw / 2); // x starts half of width
let y = Math.floor(vh / 2); // y starts half of height

let isAnimating = false;
let animationInterval = 0;

document.body.addEventListener('keydown', (event) => {
    move(event.key)
})

function move(direction) {
    switch (direction) {
        case 'ArrowLeft':
            x -= velocity;
            break;
        case 'ArrowRight':
            x += velocity
            break;
        case 'ArrowUp':
            y -= velocity
            break;
        case 'ArrowDown':
            y += velocity;
            break;
    }

    renderBox(x, y)
}

function toggleAnimation() {
    console.log('animation')
    if (isAnimating) {
        stopAnimation();
    } else {
        startAnimation();
    }
}

function startAnimation() {
    animationInterval = setInterval(() => {
        animate();
    }, 100);
    isAnimating = true;
}

function stopAnimation() {
    clearInterval(animationInterval);
    isAnimating = false;
}

function renderBox(left, top) {
    if(x + boxWidth > window.innerWidth) {
        x = 0;
    }
    if(y + boxHeight > window.innerHeight) {
        y = 0;
    }
    newDomObject.setAttribute('style', `margin-left: ${left}px; margin-top: ${top}px; `)
}

const animate = ()=> {
    x += velocity;
    y += velocity;

    renderBox(x, y)
}

