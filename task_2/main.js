const products = [];

const catalog = document.querySelector('#catalog');

class Product {
    constructor(title, price, img, id) {
        this.title = title;
        this.price = price;
        this.img = img;
        this.id = id;
    }
}

function createProductItem(productItem) {
    const product = document.createElement('DIV');
    product.classList.add('product');
    product.id = productItem.id;

    const title = document.createElement('P');
    title.classList.add('title');
    title.textContent = productItem.title;

    const img = document.createElement('IMG');
    img.setAttribute('src', productItem.img);
    img.setAttribute('alt', 'Product photo');
    img.classList.add('img');

    const price = document.createElement('P');
    price.classList.add('price');
    price.textContent = productItem.price + ' RUB';

    const button = document.createElement('BUTTON');
    button.classList.add('button');
    button.id = productItem.id;
    button.textContent = 'Buy';
    button.onclick = buy;


    product.appendChild(title);
    product.appendChild(img);
    product.appendChild(price);
    product.appendChild(button);
    return product;
}

function buy(e) {
  basketArr.push(products[e.target.id]);

  const purchase = document.createElement('DIV');
  purchase.classList.add('purchase');
  const purchaseTitle = document.createElement('DIV');
  purchaseTitle.classList.add('purchaseTitle');
  const purchasePrice = document.createElement('DIV');
  purchasePrice.classList.add('purchasePrice');

  purchaseTitle.textContent = products[e.target.id].title;
  purchasePrice.textContent = products[e.target.id].price + ' RUB';

  purchase.appendChild(purchaseTitle);
  purchase.appendChild(purchasePrice);
  basketContainer.appendChild(purchase);

  if (basketArr.length > 0) {
    basket.textContent = `Cart: ${basketArr.length} items, total ${countBasketPrice(basketArr)} RUB`;
  }

}


function render() {
    for (let productOne of products) {
        catalog.appendChild(createProductItem(productOne));
    }
}


const basketArr = [];

function countBasketPrice (arr){
  let sum = arr.reduce(function(acc, elem) {
      return acc + elem.price;
  }, 0);
  return sum;
}

const basketContainer = document.querySelector('#basket');
const basket = document.createElement('DIV');
basket.classList.add('total');
basket.textContent = 'Cart is empty';
basketContainer.appendChild(basket);


products.push(new Product('RUBBERISED BACKPACK', 45, 'product.png', '0'))
products.push(new Product('REGULAR BACKPACK', 38, 'product_5.png', '1'))
products.push(new Product('FABRIC BACKPACK', 72, 'product_2.png', '2'))
products.push(new Product('SOFT LEATHER BACKPACK', 80, 'product_5.png', '3'))

render();