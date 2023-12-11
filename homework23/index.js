const body = document.body;
const options = ['images/christmas-tree.png', 'images/mitten.png', 'images/santa-claus.png', 'images/star.png', 'images/wreath.png'];
const votes = Array(options.length).fill(0);

const votingContainer = document.createElement('div');
body.appendChild(votingContainer);

function updateView() {
    votingContainer.innerHTML = '';

    options.forEach((option, index) => {
        const smileyContainer = document.createElement('div');
        const smileyDiv = document.createElement('div');
        const img = document.createElement('img');

        img.src = option;
        img.alt = 'image';
        smileyDiv.appendChild(img);

        smileyDiv.addEventListener('click', () => {
            votes[index]++;
            updateView();
        });

        const counterDiv = document.createElement('div');

        counterDiv.textContent = `${votes[index]}`;

        // adding to html
        smileyContainer.appendChild(smileyDiv);
        smileyContainer.appendChild(counterDiv);
        votingContainer.appendChild(smileyContainer);

        // styles
        votingContainer.style.display = 'flex';
        votingContainer.style.flexDirection = 'row';
        smileyContainer.style.margin = '10px';
        counterDiv.style.marginLeft = '28px';
    });
}

updateView();
