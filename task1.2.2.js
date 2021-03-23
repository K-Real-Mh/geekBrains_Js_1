'use strict'

class PostES6 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(text) {
        this.text = text;
    }
}

class AttachedPostES6 extends PostES6 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}


let obj2ES6 = new AttachedPostES6('Vasya', 'some text', '10.12.2014');
obj2ES6.edit('one more text');
obj2ES6.makeTextHighlighted();

