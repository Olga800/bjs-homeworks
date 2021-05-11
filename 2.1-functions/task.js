function showSolutionsMessage(a, b, c) {
  const result = getSolutions(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);
  if (result.D > 0) {
    console.log(`Уравнение имеет два корня X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  } else if (result.D === 0) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
  } else if (result.D < 0) {
    console.log('Уравнение не имеет вещественных корней');
  }
}

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
}

console.log(getAverageScore({geometry: [2, 4, 5],
    algebra: [2,4,5,2,3,4],
    russian: [3,3,4,5],
    physics:[5,5]}));
