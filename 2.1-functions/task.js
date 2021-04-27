function getSolutions(a, b, c) {
  let d = b * b - 4 * a * c;
  if (d < 0) {
    string = `пара комплексно-сопряженных корней<br>x<sub>1</sub> = (`;
    string += - b / (2 * a);
    string += Math.sqrt(- d) / (2 * a);
    string += ` ), x<sub>2</sub> = (`;
    string += - b / (2 * a);
    string += `,`;
    string += - Math.sqrt(-d) / (2 * a);
    return d: `значение_дискриминанта`, roots: [];
  } else {
    if (d == 0) {
      let x1 = -b / 2a;
      string = `два одинаковых вещественных корня:<br>x<sub>1</sub> = x<sub>2</sub> = `;
      string += -b / (2 * a);
      return d:, roots: [значение_x1];
    } else (d > 0){
      let x1 = (-b + √D) / 2a;
      let x2 = (-b - √D) / 2a; 
      string = `два различных вещественных корня:<br>x<sub>1</sub> = `;
      string += -b / (2 * a) - Math.sqrt(d) / (2 * a);
      string += ", x<sub>2</sub> = ";
      string += -b / (2 * a) + Math.sqrt(d) / (2 * a);
    }
  }
  getSolutions(d:, roots: [значение_x1, значение_x2]);

  function showSolutionsMessage(a, b, c) {
    let result = showSolutionsMessage(a, b, c);
    concole.log(`Вычисляем корни квадратного уравнения ax² + bx + c»`);
    concole.log(`Значение дискриминанта: D`);
    if (d < 0) {
      concole.log(`Уравнение не имеет вещественных корней`);
    };
    if (d == 0) {
      concole.log(`Уравнение имеет один корень X₁ = значение_корня`);
    };
    if (d == 0) {
      concole.log(`Уравнение имеет два корня. X₁ = значение_корня_1, X₂ = значение_корня_2`);
    };
  }
  showSolutionsMessage();

