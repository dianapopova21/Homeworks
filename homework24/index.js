const body = document.querySelector('body');

// creating elements
const mainContainer = document.createElement('div');
const row = document.createElement('div');
const col1 = document.createElement('div');
const col2 = document.createElement('div');
const col3 = document.createElement('div');
const categories = document.createElement('ul');
const productsList = document.createElement('ul');
const infoCard = document.createElement('div');
const cardBody = document.createElement('div');
const cardTitle = document.createElement('h5');
const cardText = document.createElement('div');
const buyBtn = document.createElement('button');
const closeBtn = document.createElement('button');
const notification = document.createElement('div');

class Product {
    constructor(id, name, category, price, color, info) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.color = color;
        this.info = info;
    }

}

// list of products
const products = [
    new Product(1, 'T-shirt', 'clothes', 200, 'black', 'Black cotton t-shirt'),
    new Product(2, 'T-shirt', 'clothes', 200, 'white', 'White cotton t-shirt'),
    new Product(3, 'Coat', 'clothes', 500, 'brown', 'Warm coat'),
    new Product(4, 'Jeans', 'clothes', 350, 'blue', 'Skinny jeans'),
    new Product(5, 'Hairpin', 'accessories', 30, 'pink', 'Hair Accessories Hairpins'),
    new Product(6, 'Hairband', 'accessories', 50, 'white', 'Hair Accessories'),
    new Product(7, 'Sunglasses', 'accessories', 150, 'white', 'Summer sunglasses'),
    new Product(8, 'Sun cap', 'accessories', 200, 'blue', 'Cool sun cap'),
    new Product(9, 'Eyeliner', 'cosmetics', 100, 'black', 'Highlighter Eyeliner Eye Makeup'),
    new Product(10, 'Lipstick', 'cosmetics', 150, 'red', 'Red lipstick'),
    new Product(11, 'Brushes', 'cosmetics', 150, 'pink', 'Makeup brushes'),
    new Product(12, 'Pencil Eye', 'cosmetics', 100, 'brown', 'Brown pencil eye'),
];

function addCategory(id, name) {
    const category = document.createElement('li');
    category.id = id;
    category.textContent = name;
    category.classList.add('list-group-item');
    category.addEventListener('click', () => displayProducts(products, id));
    return category;
}

function displayProducts(products, category) {
    col2.style.display = 'block';

    productsList.textContent = '';
    const filteredProducts = products.filter(product => product.category === category);

    filteredProducts.forEach(product => {
        const productElement = document.createElement('li');
        productElement.classList.add('list-group-item');
        productElement.textContent = `${product.name}`;
        productsList.appendChild(productElement);
        col2.appendChild(productsList);
        productElement.addEventListener('click', () => displayProductInfo(product));
    });
}

function displayProductInfo(product, id) {
    col3.style.display = 'block';

    infoCard.textContent = '';
    cardTitle.textContent = product.name;
    cardText.innerText = `Price: ${product.price} \n Color: ${product.color}\nInfo: ${product.info}`;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    infoCard.appendChild(cardBody);
    infoCard.appendChild(buyBtn);
    
    buyBtn.textContent = 'Buy';
    buyBtn.addEventListener('click', function(){
        notification.textContent = `You ordered ${product.name}`;
        mainContainer.appendChild(notification);
        col2.style.display = 'none';
        col3.style.display = 'none';
        setTimeout(() => {
            notification.remove();
          }, 2000);
    });
}

categories.appendChild(addCategory('clothes', 'Clothes'));
categories.appendChild(addCategory('accessories', 'Accessories'));
categories.appendChild(addCategory('cosmetics', 'Cosmetics'));

// styles
row.style.display = 'flex';
row.style.flexDirection = 'row';
row.classList.add('mx-5');
col1.classList.add('mx-5');
col2.classList.add('mx-5');
col3.classList.add('mx-5');
infoCard.classList.add('card');
cardBody.classList.add('card-body');
cardTitle.classList.add('card-title');
cardText.classList.add('card-text');
categories.classList.add('list-group');
productsList.classList.add('list-group');
buyBtn.classList.add('btn-primary');
notification.classList.add('alert');
notification.classList.add('alert-success');

// adding to html
col1.appendChild(categories);
col3.appendChild(infoCard);
row.appendChild(col1);
row.appendChild(col2);
row.appendChild(col3);
mainContainer.appendChild(row);
body.appendChild(mainContainer);

