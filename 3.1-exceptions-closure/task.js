function parseCount(value) {
    this.value = Number.parseInt(value);
    if (isNaN(value)) {
        throw Error("Невалидное значение");
    };
    return this.value;
};

function validateCount(value) {
    try {
        this.value = parseCount(value);
        return this.value;
    } catch (e) {
        return e;
    };
};

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (a + b < c || b + c < a || c + a < b) {
            throw Error("Треугольник с такими сторонами не существует")
        };
    };

    getPerimeter() {
        return (this.a + this.b + this.c);
    };

    getArea() {
        const p = this.getPerimeter() / 2;
        const area = (Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)));
        return Number.parseFloat(area.toFixed(3));
    };
};

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (e) {
        return {
            getPerimeter: () => 'Ошибка! Треугольник не существует',
            getArea: () => 'Ошибка! Треугольник не существует'
        };
    };
};