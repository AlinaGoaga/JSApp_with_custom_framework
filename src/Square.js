class Square {
    constructor(size, unit='cm') {
        if (isNaN(size)) {
            throw new Error('argument is not a number');
        }
        if (size < 0) {
            throw new Error('size should be a positive number');
        }
        this.size = size;
        this.unit = unit;
    }

    area() {
        return this.size * this.size;
    }

    typeOfSquare() {
      return 'This is a square with a side length of ' + `${this.size}` + `${this.unit}`
    }

}
