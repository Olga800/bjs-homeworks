function getResult(a, b, c) {
  const x = [];
  const discr = Number(b ** 2 - 4 * a * c);
  if (discr > 0) {
    x[0] = Number(((-1 * b) + Math.sqrt(discr)) / (2 * a));
    x[1] = Number(((-1 * b) - Math.sqrt(discr)) / (2 * a));
  } else if (discr === 0) {
    x[0] = -1 * b / (2 * a);
  };
};
  function showSolutionsMessage(a, b, c) {
    concole.log(`Вычисляем корни квадратного уравнения ax² + bx + c`);
    concole.log(`Значение дискриминанта: discr`);
    if (discr < 0) {
      concole.log(`Значение дискриминанта: discr`);
      concole.log(`Уравнение не имеет вещественных корней`);
    };
    if (discr == 0) {
      concole.log(`Значение дискриминанта: discr`);
      concole.log(`Уравнение имеет один корень X₁ = значение_корня`);
    };
    if (discr == 0) {
      concole.log(`Значение дискриминанта: discr`);
      concole.log(`Уравнение имеет два корня. X₁ = значение_корня_1, X₂ = значение_корня_2`);
    };
  }
  showSolutionsMessage();

