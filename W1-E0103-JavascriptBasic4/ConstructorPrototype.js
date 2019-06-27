function Rectangle(x, y) {
    this.width = x;
    this.height = y;
}

function Square(x) {
    this.leng = x;
}

Square.prototype.getArea = Rectangle.prototype.getArea = function() {
    if (this.leng) {
        return this.leng * this.leng;
    } else {
        return this.width * this.height;
    }
};

var square = new Square(4);
console.log(square.getArea()); //16

var rect = new Rectangle(4, 5);
console.log(rect.getArea()); //20
