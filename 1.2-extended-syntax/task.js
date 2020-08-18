function getResult(a,b,c){
    let discriminant = b**2 - 4*a*c;
    let array = [];
    if (discriminant > 0) {
        let x1 = (-b + Math.sqrt(discriminant))/2*a;
        let x2 = (-b - Math.sqrt(discriminant))/2*a;
        array.push(x1, x2);
    } else if (discriminant === 0) {
        let x1 = (-b + Math.sqrt(discriminant))/2*a;
        array.push(x1);
    };
    return array;
};

function getAverageMark(marks){
    let sum = 0;
    let averageMarks;
    if (marks.length === 0) {
        averageMarks = 0;
    }
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
      const excessMarks = 5;
      if (marks.length > excessMarks) {
        console.log('Оценок больше пяти')
        marks.splice (5);
        averageMarks = sum / marks.length;
      } else {
        averageMarks = sum / marks.length;
      };
    };
    return averageMarks;
};
 

function askDrink(name,dateOfBirthday){
    const age = new Date().getFullYear() - dateOfBirthday.getFullYear()
    if (age >= 18) {
        return `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
}