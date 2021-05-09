function getResult(a, b, c) {
  const x = [];
  const discr = Number(b ** 2 - 4 * a * c);
  if (discr > 0) {
    x[0] = Number(((-1 * b) + Math.sqrt(discr)) / (2 * a));
    x[1] = Number(((-1 * b) - Math.sqrt(discr)) / (2 * a));
  } else if (discr === 0) {
    x[0] = -1 * b / (2 * a);
  };
  let x = showSolutionsMessage;
}
  function showSolutionsMessage(a, b, c) {
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

