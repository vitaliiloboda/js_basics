class Product {
    constructor(price = 0, name = null, description = null){
        this.name = name;
        this.description = description;
        this.price = price;
    }
}

let a = new Product(65, 'Jacket');
let b = new Product(50, 'Jeans');
let c = new Product(155, 'Shoes');
let d = new Product(75, 'Bag');
let e = new Product(25, 'Shorts');
let f = new Product(15, 'Shirt');
let g = new Product(65, 'Knitwear');

let basketArr = [a, b, c, d, e, f, g];
// let basketArr = [];

function countBasketPrice (arr){
    let sum = arr.reduce(function(acc, elem) {
        return acc + elem.price;
    }, 0);
    return sum;
}

const container = document.querySelector('div');
const basket = document.createElement('DIV');
container.appendChild(basket);

if (basketArr.length > 0) {
    basket.textContent = `В корзине: ${basketArr.length} товаров на сумму ${countBasketPrice(basketArr)} рублей`;
} else {
    basket.textContent = 'Корзина пуста';
}

