'use strict'

function PostES5(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

PostES5.prototype.edit = function (text) {
    this.text = text;
}

function AttachedPostES5(author, text, date) {
    PostES5.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPostES5.prototype = Object.create(PostES5.prototype);
AttachedPostES5.prototype.constructor = AttachedPostES5;

AttachedPostES5.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

let obj2ES5 = new AttachedPostES5('Vasya', 'some text', '10.12.2014');
obj2ES5.edit('one more text');
obj2ES5.makeTextHighlighted();

