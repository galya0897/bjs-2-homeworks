function parseCount(value) {
    let result = Number.parseFloat(value);
    if (Number.isNaN(result)) {
        throw new Error("Невалидное значение");
    } else {
        return result
    }
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        if ((side1 + side2 <= side3) || (side2 + side3 <= side1) || (side3 + side1 <= side2)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
        let perimeter = this.side1 + this.side2 + this.side3;
        return perimeter;
    }

    get area() {
        let semiperimeter = this.perimeter / 2;
        let area = Number(Math.sqrt(semiperimeter * (semiperimeter - this.side1) * (semiperimeter - this.side2) * (semiperimeter - this.side3)).toFixed(3));
        return area;
    }
}

function getTriangle(side1, side2, side3) {
    try {
        return new Triangle(side1, side2, side3);
    } catch (error) {
        return {
            get area() {
                return "Ошибка! Треугольник не существует"
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует"
            }
        }
    }
}