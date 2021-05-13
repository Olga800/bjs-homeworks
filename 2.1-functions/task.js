function getSolutions( a, b, c ) {
	let D = (Math.pow(b, 2)) - (4 * a * c);
	let x = [];
    switch (true) {
    	case (D < 0):
      	  break;
    	case (D == 0):
    	  x = [(-1 * b) / ( 2 * a)];
    	  break;
    	case (D > 0):
    	  x = [((-b) + Math.pow(D,0.5))/(2 * a), ((-b)-Math.pow(D,0.5))/(2 * a)];
    	  break;
    }
    return { roots: x, D: D };
}

function showSolutionsMessage( a, b, c ) {
	let result = getSolutions( a, b, c );
	console.log(`Вычисляем корни квадратного уравнения ${a}x** + ${b}x + ${c}`);
	console.log(`Значение дискриминанта: ${result.D}`);
	let rootsArray = result.roots;
	switch (true) {
    	case (result.D < 0):
    	  console.log(`Уравнение не имеет вещественных корней`);
    	  break;
    	case (result.D == 0):
       	  console.log(`Уравнение имеет один корень X₁ = ${rootsArray[0]}`);
    	  break;
    	case (result.D > 0):
    	 console.log(`Уравнение имеет два корня. X₁ = ${rootsArray[0]}, X₂ = ${rootsArray[1]}`);
    	  break;
    }
}
 showSolutionsMessage( 1, 2, 3 );
 showSolutionsMessage( 7, 20, -3 );
 showSolutionsMessage( 2, 4, 2 );



function getAverageScore(data) {
    let averageScore = {};
    let objectLength = 0;

    for (let key in data) {
        averageScore[key] = getAverageMark(data[key]);
        objectLength++;
    }
    if (objectLength === 0) {
        return averageScore.average = 0;
    }

    averageScore.average = (Object.values(averageScore).reduce((a, b) => a + b)) / objectLength;

    return averageScore;
}

function getAverageMark(marks) {
    let sum = 0;

    if (marks.length === 0) {
        return 0;
    }

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }

    let averageSum = sum / marks.length;
    
    return averageSum;
};

console.log(getAverageScore({geometry: [2, 4, 5],
    algebra: [2,4,5,2,3,4],
    russian: [3,3,4,5],
    physics:[5,5]}));
