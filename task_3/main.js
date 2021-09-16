const products = [];
const catalog = document.querySelector('#catalog');

class Product {
    constructor(title, price, description, img) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.img = img;
    }
}

function createProductItem(productItem) {
    const product = document.createElement('DIV');
    product.classList.add('product');

    const title = document.createElement('P');
    title.classList.add('title');
    title.textContent = productItem.title;

    const img = document.createElement('IMG');
    img.setAttribute('src', productItem.img);
    img.setAttribute('alt', 'Product photo');

    const price = document.createElement('P');
    price.classList.add('price');
    price.textContent = productItem.price;

    const description = document.createElement('P');
    description.classList.add('description');
    description.textContent = productItem.description;

    product.appendChild(title);
    product.appendChild(img);
    product.appendChild(price);
    product.appendChild(description);

    return product;
}

function render() {
    for (let productOne of products) {
        catalog.appendChild(createProductItem(productOne));
    }
}

products.push(new Product('RUBBERISED BACKPACK', '45 EUR', 'Rubberised backpack. Water-resistant exterior, thermo-sealed and designed for all types of climates.', 'product.png'))
products.push(new Product('GRAINY MONOCHROME BACKPACK', '55 EUR', 'Rubberised backpack. Water-resistant exterior, thermo-sealed and designed for all types of climates.', 'product_2.png'))
products.push(new Product('MULTI-POCKET BACKPACK', '50 EUR', 'Rubberised backpack. Water-resistant exterior, thermo-sealed and designed for all types of climates.', 'product_3.png'))
products.push(new Product('RECTANGULAR BACKPACK', '38 EUR', 'Rubberised backpack. Water-resistant exterior, thermo-sealed and designed for all types of climates.', 'product_5.png'))
products.push(new Product('NYLON EXPLORER BACKPACK', '62 EUR', 'Rubberised backpack. Water-resistant exterior, thermo-sealed and designed for all types of climates.', 'product_3.png'))
products.push(new Product('NYLON BACKPACK WITH FLAP', '44 EUR', 'Rubberised backpack. Water-resistant exterior, thermo-sealed and designed for all types of climates.', 'product.png'))
products.push(new Product('FABRIC BACKPACK', '72 EUR', 'Rubberised backpack. Water-resistant exterior, thermo-sealed and designed for all types of climates.', 'product_2.png'))
products.push(new Product('SOFT LEATHER BACKPACK', '80 EUR', 'Rubberised backpack. Water-resistant exterior, thermo-sealed and designed for all types of climates.', 'product_5.png'))

render();



