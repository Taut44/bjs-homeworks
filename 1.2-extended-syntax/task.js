function getResult(a,b,c){
    let discr = b**2 - 4*a*c;
    let massiv = [];
    if (discr > 0) {
        let x1 = (-b + Math.sqrt(discr))/2*a;
        let x2 = (-b - Math.sqrt(discr))/2*a;
        massiv.push(x1, x2);
    } else if (discr === 0) {
        let x1 = (-b + Math.sqrt(discr))/2*a;
        massiv.push(x1);
    };
    return massiv;
};

function getAverageMark(marks){
    let sum = 0;
    let averageMarks;
    if (marks.length === 0) {
        averageMarks = 0;
    }
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
      if (marks.length > 4) {
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
    let result;
    const age = new Date().getFullYear() - dateOfBirthday.getFullYear()
    if (age >= 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
    return result;
}