const categories = ['Clothing', 'Beauty & Health', 'Home appliances', 'Accessories', 'Sports entertainment', 'Pet supplies'];
class Product {
    constructor(id, name, category, description, price) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.description = description;
        this.price = price;
    }
}

const products = [
    new Product(1, 'Coat', categories[0], 'Warm winter coat', 500),
    new Product(2, 'Perfume', categories[1], 'Elegant fragrance', 100),
    new Product(3, 'Refrigerator', categories[2], 'Energy-efficient fridge', 800),
    new Product(4, 'Sunglasses', categories[3], 'UV protection', 50),
    new Product(5, 'Football', categories[4], 'Official size and weight', 20),
    new Product(6, 'Pet Bed', categories[5], 'Comfortable for pets', 30),
    new Product(7, 'Running Shoes', categories[0], 'High-performance running shoes', 120),
    new Product(8, 'Blender', categories[2], 'Powerful blender for smoothies', 70),
    new Product(9, 'Handbag', categories[3], 'Stylish and spacious', 80),
    new Product(10, 'Dog Toy', categories[5], 'Interactive toy for dogs', 15),
    new Product(11, 'T-shirt', categories[0], 'Cotton T-shirt', 25),
    new Product(12, 'Lipstick', categories[1], 'Long-lasting lipstick', 15),
    new Product(13, 'Microwave', categories[2], 'Compact microwave oven', 120),
    new Product(14, 'Watch', categories[3], 'Water-resistant watch', 60),
    new Product(15, 'Basketball', categories[4], 'Indoor basketball', 30),
    new Product(16, 'Jeans', categories[0], 'Classic denim jeans', 45),
    new Product(17, 'Shampoo', categories[1], 'Revitalizing shampoo', 12),
    new Product(18, 'Coffee Maker', categories[2], 'Single-serve coffee maker', 90),
    new Product(19, 'Earrings', categories[3], 'Silver hoop earrings', 20),
    new Product(20, 'Yoga Mat', categories[4], 'Non-slip yoga mat', 15),
];
class Store {
    constructor(root) {
        this.root = root;
    }
    createElem( {type = 'div', content, attrs} ) {
        const $el = document.createElement(type);

        if (attrs) {
            Object.entries(attrs).forEach( ([key, value]) => {
                $el.setAttribute(key, value);
            })
        }
        if (content) $el.innerText = content;

        return $el;
    }
    createOrderCard(cardBody, key) {
        const $card = this.createElem({attrs: {class: 'card m-3'} });
        const $cardBody = this.createElem({attrs: {class: 'card-body'}, content: cardBody });
        const $deleteBtn = this.createElem({type: 'button', attrs: {class: 'btn btn-danger'}, content: 'Delete'});
        $deleteBtn.addEventListener('click', () => {
            localStorage.removeItem(key);
            $card.remove();
        })
        $card.append($cardBody);
        $card.append($deleteBtn);
        return $card;
    }
    clearContent (elem) {
        if(!elem && elem.nodeType !== 1) return;
        while(elem.firstChild) {
            elem.removeChild(elem.firstChild);
        }
    }
    filterProductsByCategory(category) {
        const filteredProducts = products.filter(product => product.category === category);
        const $itemContainer = document.getElementById('items-container');
        this.clearContent($itemContainer);
        filteredProducts.forEach(product => {
            const $product = this.createElem({
                type: 'div',
                content: `${product.name} - $${product.price.toFixed(2)}`,
                attrs: { class: 'list-group-item', 'data-product-id': product.id }
            });
            if ($itemContainer.classList.contains('list-group-item')) {
                const itemsButtons = $itemContainer.querySelectorAll('.list-group-item');
                itemsButtons.forEach((button) => {
                    button.classList.remove('active');
                });

                $selectedItem.classList.add('active');
            }
            $product.addEventListener('click', () => {
                const itemsButtons = $itemContainer.querySelectorAll('.list-group-item');
                itemsButtons.forEach((button) => {
                    button.classList.remove('active');
                });
                $product.classList.add('active');
                $product.setAttribute('data-selected-item', 'true');
                this.createProductInfo(product);
            });

            $itemContainer.insertAdjacentElement('beforeend', $product);
        });
    }
    createCategory(categories) {
        const $listCategories = document.getElementById('category-container');
        const $showOrdersBtn = document.getElementById('show-orders-btn');
        categories.forEach((category) => {
            const button = this.createElem({
                type: 'button',
                content: category,
                attrs: {class: 'list-group-item list-group-item-action'}
            });
            $listCategories.append(button);
        });
        $listCategories.addEventListener('click', (e) => {
            const $itemInfo = document.getElementById('info-container');
            this.clearContent($itemInfo);
            const $selectedItem = e.target;
            if ($selectedItem.classList.contains('list-group-item')) {
                const categoryButtons = $listCategories.querySelectorAll('.list-group-item');
                categoryButtons.forEach((button) => {
                    button.classList.remove('active');
                });

                $selectedItem.classList.add('active');
            }
            this.filterProductsByCategory($selectedItem.textContent);
        } );
        $showOrdersBtn.addEventListener('click', () => {
            const $ordersList = document.getElementById('orders-container');
            for(let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                const productData = localStorage.getItem(key);
                const card = this.createOrderCard(productData, key);
                $ordersList.classList.remove('d-none');
                $ordersList.insertAdjacentElement('beforeend', card);
            }
        })

    }
    createProductInfo(item) {
        const infoContainer = document.getElementById('info-container');
        this.clearContent(infoContainer);
        if(!item) return;
        const $card = this.createElem({attrs: {class: 'card'} });
        const $cardBody = this.createElem({attrs: {class: 'card-body'} });
        const $cardTitle = this.createElem( {
            type: 'h3',
            attrs: {class: 'card-title'},
            content: item.name,
        });
        const $cardBodyFragment = document.createDocumentFragment();
        $cardBodyFragment.append($cardTitle);
        const $cardList = this.createElem(
            {
                type: 'ul',
                attrs: {class: 'list-group list-group-flush'}
            }
        );
        const $listFragment = document.createDocumentFragment();
        Object.entries(item).forEach( ([key, value]) => {
            if(key !== 'name' && key !== 'id') {
                $listFragment.append(
                    this.createElem(
                        {
                            type: 'li',
                            attrs: { class: 'list-group-item' },
                            content: `${key}: ${value}`,
                        }
                    )
                );
            }
        });

        $cardList.append($listFragment);
        $cardBodyFragment.append($cardList);
        const buyBtn = this.createElem({
            type: 'button',
            attrs: {class: 'btn btn-dark my-3'},
            content: 'Buy',
        });
        $cardBodyFragment.append(buyBtn);
        buyBtn.addEventListener('click', (e) => {
            document.forms.orderingForm.classList.remove('d-none');
        })

        $cardBody.append($cardBodyFragment);
        $card.insertAdjacentElement('beforeend', $cardBody);
        infoContainer.insertAdjacentElement('beforeend', $card);
    }
    init() {
        const $mainContainer = this.createElem({ attrs: { class: 'container m-4' } });
        const $row = this.createElem({attrs: {class: 'row' } });
        const $lowerRow = this.createElem({attrs: {class: 'row', id: 'formContainer' } });
        const $errorMessage = this.createElem({attrs: {class: 'alert alert-danger d-none mt-3', id: 'errorMessage'}});
        const $form = document.forms.orderingForm;
        const $orderInfo = this.createElem({attrs: {class: 'alert alert-success d-none mt-3', id: 'order-info'}});
        const $ordersContainer = this.createElem({attrs: {class: 'container d-none', id: 'orders-container'}})
        const $categoryContainer = this.createElem({ attrs: { class: 'col-md-4', id: 'category-container' }});
        const $itemsContainer = this.createElem({ attrs: { class: 'col-md-4', id: 'items-container' }});
        const $infoContainer = this.createElem({ attrs: { class: 'col-md-4', id: 'info-container' }});
        const $showOrdersBtn = this.createElem({type: 'button', attrs: {class: 'btn btn-dark mb-2', id: 'show-orders-btn', style: 'width: 200px;'}, content: 'My orders'})

        $row.insertAdjacentElement('beforeend', $categoryContainer);
        $categoryContainer.insertAdjacentElement('afterbegin', $showOrdersBtn);
        $row.insertAdjacentElement('beforeend', $ordersContainer);
        $row.insertAdjacentElement('beforeend', $itemsContainer);
        $row.insertAdjacentElement('beforeend', $infoContainer);

        $lowerRow.insertAdjacentElement('beforeend', $errorMessage);
        $lowerRow.insertAdjacentElement('beforeend', $form);
        $lowerRow.insertAdjacentElement('beforeend', $orderInfo);

        $mainContainer.insertAdjacentElement('beforeend', $row);
        $mainContainer.insertAdjacentElement('beforeend', $lowerRow);
        this.root.insertAdjacentElement('beforeend', $mainContainer);
    }
}
class Order {
    displayOrderInfo(product) {
        const orderInfoContainer = document.getElementById('order-info');
        if(orderInfoContainer.classList.contains('d-none')) orderInfoContainer.classList.remove('d-none');
        const order = `Product: ${product.name}
            Price: $${product.price.toFixed(2)}
            Count: ${this.productCount}
            Total: $${(product.price * this.productCount).toFixed(2)}
            Name: ${this.name}
            City: ${this.city}
            Post: ${this.post}
            Type of Payment: ${this.typeOfPayment}
            Comments: ${this.comments}`;
        localStorage.setItem(product.id, order);
        orderInfoContainer.innerText = 'Product added successfully. You can see it in the order list';
        setInterval(
            () => {
                orderInfoContainer.innerText = '';
                orderInfoContainer.classList.add('d-none');
            },
            2000
        );

    }
    createOrder() {
        const errorMessage = document.getElementById('errorMessage');
        const userName = document.forms.orderingForm.userName;
        const citySelect = document.forms.orderingForm.selectCity;
        const selectPost = document.forms.orderingForm.selectPost;
        const productCount = document.forms.orderingForm.productCount;
        const byCardRadio = document.forms.orderingForm.byCard;
        const onDeliveryRadio = document.forms.orderingForm.onDelivery;
        const comments = document.forms.orderingForm.comments;

        document.forms.orderingForm.addEventListener('submit', (event) => {
            event.preventDefault();
            errorMessage.innerText = '';
            if(!userName.value){
                event.preventDefault();
                if(errorMessage.classList.contains('d-none')) errorMessage.classList.remove('d-none');
                errorMessage.innerText += 'Wrong name\n';
            } else {
                this.name = userName.value;
                errorMessage.innerText = '';
                if(!errorMessage.classList.contains('d-none')) errorMessage.classList.add('d-none');
            }
            if(byCardRadio.checked) this.typeOfPayment = 'Payment by card';
            if(onDeliveryRadio.checked) this.typeOfPayment = 'Payment on delivery';
            if(productCount.value <= 0) {
                event.preventDefault();
                if(errorMessage.classList.contains('d-none')) errorMessage.classList.remove('d-none');
                errorMessage.innerText += `Count of products must be bigger than 0`;
            } else {
                this.productCount = productCount.value;
                errorMessage.innerText = '';
                if(!errorMessage.classList.contains('d-none')) errorMessage.classList.add('d-none');
            }
            if(!comments.value) this.comments = comments.value;
            this.city = citySelect.value;
            this.post = selectPost.value;

            if(errorMessage.textContent === '') {
                const selectedItem = document.querySelector('.list-group-item[data-selected-item]');
                const productId = selectedItem.getAttribute('data-product-id');
                const selectedProduct = products.find(product => product.id === parseInt(productId));
                this.displayOrderInfo(selectedProduct);

                document.forms.orderingForm.classList.add('d-none');
                document.forms.orderingForm.reset();
            }

        });
    }
}

const body = document.querySelector('body');

const myStore = new Store(body);
const myOrder = new Order();

myStore.init();
myStore.createCategory(categories);
myOrder.createOrder();
