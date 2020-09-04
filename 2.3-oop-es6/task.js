class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    };

    fix() {
        return this.state *= 1.5;
    };

    set state(number) {
        if (number < 0) {
            return this._state = 0;
        } else if (number > 100) {
            return this._state = 100;
        };
        return this._state = number;
    };

    get state() {
        return this._state;
    };
};

class Magazine extends PrintEditionItem {
    constructor(...parentParameters) {
        super(...parentParameters);
        this.type = 'magazine';
    };
};

class Book extends PrintEditionItem {
    constructor(author, ...parentParameters) {
        super(...parentParameters);
        this.type = 'book';
        this.author = author;
    };
};

class NovelBook extends Book {
    constructor(...parentParameters) {
        super(...parentParameters);
        this.type = 'novel';
    };
};

class FantasticBook extends Book {
    constructor(...parentParameters) {
        super(...parentParameters);
        this.type = 'fantastic';
    };
};

class DetectiveBook extends Book {
    constructor(...parentParameters) {
        super(...parentParameters);
        this.type = 'detective';
    };
};

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    };

    addBook(book) {
        if (book.state > 30) {
            return this.books.push(book)
        };
    };

    findBookBy(type, value) {
        for (let key in this.books) {
            if (this.books[key][type] === value) {
                return this.books[key];
            };
        };
        return null
    };

    giveBookByName(bookName) {
        for (let key in this.books) {
            if (this.books[key].name === bookName) {
                return this.books.splice(key, 1)[0];
            };
        };
        return null;
    };
};


class StudentLog {
    constructor(name) {
        this.name = name;
        this.subjectMarks = {};
    };

    getName() {
        return this.name;
    };

    addGrade(grade, subject) {
        if (grade > 0 && grade < 6 && Number.isInteger(grade)) {
            if (this.subjectMarks[subject] === undefined) {
                this.subjectMarks[subject] = [grade];
            } else {
                this.subjectMarks[subject].push(grade);
            };
        } else {
            console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
        };

        if (this.subjectMarks[subject] === undefined) {
            return 0;
        } else {
            return this.subjectMarks[subject].length;
        };
    };

    getAverageBySubject(subject) {
        if (this.subjectMarks[subject] === undefined) {
            return 0
        } else {
            let sumMarks = 0;
            for (let mark of this.subjectMarks[subject]) {
                sumMarks += mark;
            };
            return sumMarks / this.subjectMarks[subject].length;
        };
    };

    getTotalAverage() {
        if (Object.keys(this.subjectMarks).length === 0) {
            return 0;
        } else {
            let sumAverage = 0;
            for (let subject in this.subjectMarks) {
                sumAverage += this.getAverageBySubject(subject);
            };
            return sumAverage / Object.keys(this.subjectMarks).length;
        };
    };
};
