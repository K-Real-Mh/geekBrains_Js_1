'use strict'

class ProductES6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        this.price = this.price - (this.price / 100) * 15;
    }
}
let obj1ES6 = new ProductES6('apple', 123);

obj1ES6.make25PercentDiscount();
