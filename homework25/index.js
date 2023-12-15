const previousBtn = document.getElementById('previousBtn');
const nextBtn = document.getElementById('nextBtn');
let img = document.getElementById('image');

const images = ['imgs/1.jpg', 'imgs/2.jpg', 'imgs/3.jpg', 'imgs/4.jpg', 'imgs/5.jpg'];
let i = 0;
previousBtn.classList.add('disabled');
img.src = images[i];

nextBtn.addEventListener('click', function() {
    i++;
    if(images[i] !== undefined) {
        img.src = images[i];
        console.log(images[i]);
    }
    if(images[i+1] === undefined) {
        nextBtn.classList.add('disabled'); 
    }   
    if (previousBtn.classList.contains('disabled')) {
        previousBtn.classList.remove('disabled');
    }
});

previousBtn.addEventListener('click', function() {
    i--;
    if(images[i] !== undefined) {
        img.src = images[i];
        console.log(images[i]);
    }
    if(images[i-1] === undefined) {
        previousBtn.classList.add('disabled'); 
    }
    if (nextBtn.classList.contains('disabled')) {
        nextBtn.classList.remove('disabled');
    }
});