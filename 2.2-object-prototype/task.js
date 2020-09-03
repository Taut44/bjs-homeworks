String.prototype.isPalindrome = function () {
  let str = this.toLowerCase();
  for (var i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    };
    return true;
  };
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
  let userBirthday = +new Date(birthday);
  let diff = now - userBirthday;
  let age = diff / 31557600000;
  return age > 18 ? true : false;
};