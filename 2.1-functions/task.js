function getSolutions(a, b, c) {
	const discriminant = b ** 2 - 4 * a * c;
	const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
	const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
	if (discriminant > 0) {
		return {
			D: discriminant,
			roots: [x1, x2]
		};
	} else if (discriminant === 0) {
		return {
			D: discriminant,
			roots: [x1]
		};
	} else {
		return {
			D: discriminant,
			roots: []
		};
	};
};
function showSolutionsMessage(a, b, c) {
	let result = getSolutions(a, b, c);
	console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
	console.log(`Значение дискриминанта: ${result.D}`);
	if (result.D > 0) {
		console.log(`Уравнение имеет два корня. ${result.roots[0]}, ${result.roots[1]}`);
	} else if (result.D === 0) {
		console.log(`Уравнение имеет один корень ${result.roots[0]}`);
	} else {
		console.log(`Уравнение не имеет вещественных корней`);
	};
};

function getAverageScore(data) {
	let average = [];
	for (let prop in data) {
		data[prop] = getAverageMark(data[prop]);
		average.push(data[prop])
	}
	data['average'] = getAverageMark(average);
	return data;
}

function getAverageMark(marks) {
	let sum = 0;
	if (marks.length === 0) {
        return 0;
    }
	for (let i = 0; i < marks.length; i++) {
		sum += marks[i];
	};
	return sum / marks.length;
};

function getPersonData(secretData) {
	return {
	  firstName : getDecodedValue(secretData.aaa),
	  lastName : getDecodedValue(secretData.bbb)
	};
  };
  
  function getDecodedValue(secret) {
	return !secret ? 'Родриго' : 'Эмильо'
  };
