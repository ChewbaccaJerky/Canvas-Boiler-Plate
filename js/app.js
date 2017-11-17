import * as RandomizeUtil from './util/randomize_util';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

//set height and width
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// mouse
const mouse = {
    x: undefined,
    y: undefined
};

// base event listeners
window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
    console.log(mouse);
});

window.addEventListener('resize', (e) => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
});

// implementations
let objects = [];
const init = () => {
    objects = [];

    for(let i = 0; i < 100; i++) {
        // objects.push();
    }
};

const animate = () => {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillText('CANVAS BOILER PLATE!', mouse.x, mouse.y);
    // objects.forEach(object => {
    //     object.draw();
    // });
};

init();
animate();