// function to generate a random number of a certain range
function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

const randomNumber = getRandomNumber(1, 9);

const image = document.createElement('img');
image.src = `images/${randomNumber}.jpg`;
image.alt = 'Cat image';
image.style.width = '500px';

const imageContainer = document.getElementById('image-container');
imageContainer.appendChild(image);

