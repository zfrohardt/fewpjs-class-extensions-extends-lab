// Your code here

class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((acc, side) => acc + side, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.sides.length === 3) {
            return this.sides[0] < this.sides[1] + this.sides[2] &&
            this.sides[1] < this.sides[0] + this.sides[2] &&
            this.sides[2] < this.sides[0] + this.sides[1];
        }
        return false;
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.sides.length === 4) {
            return this.sides[0] === this.sides[1] &&
                   this.sides[1] === this.sides[2] &&
                   this.sides[2] === this.sides[3]
        }
        return false;
    }

    get area() {
        return this.sides[0] * this.sides[1];
    }
}