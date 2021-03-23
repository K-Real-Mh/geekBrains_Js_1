'use strict'
function ProductES5(name, price) {
    this.name = name;
    this.price = price;
}

ProductES5.prototype.make25PercentDiscount = function() {
    this.price = this.price - (this.price / 100) * 15;
}

let obj1ES5 = new ProductES5('apple', 123);

obj1ES5.make25PercentDiscount();
