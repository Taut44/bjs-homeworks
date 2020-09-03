String.prototype.isPalindrome = function() {
    let str = this.toLowerCase();
    for (var i = 0; i < str.length / 2; i++) {
     if (str[i] === str[str.length - 1 - i]) {
         return true;
     };
   };
   return false;
  };
  
  
  function getAverageMark(marks) {
    let average = 0;
    for (let i = 0; i < marks.length; i++) {
      average += marks[i] / marks.length;
    };
    let roundedAverage = Math.round(average);
    return roundedAverage;
  };
  
  function checkBirthday(birthday) {
      let now = Date.now();
      let userBirthday = Date.now(birthday);
      let diff = userBirthday - now
      let age = diff / 31557600000;
      let verdict = (age > 18 ? true : false);
      return age > 18 ? `Не желаете ли олд-фэшн?` : `Сожалею, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  };