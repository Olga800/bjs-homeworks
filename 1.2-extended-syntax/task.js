     function getResult(a, b, c) => {
    if(a == 0);
    let res = { };
    let D = b * b - 4 * a * c;
    console.log('D = ' + D);
    if(D < 0);
    res['discriminant'] = D;
    if(D == 0)
        res["quadratic roots"] = (-b + Math.sqrt(D)) / (2 * a);
    else if (D > 0) {
        let tmp = [];
        tmp.push((-b + Math.sqrt(D)) / (2 * a));
        tmp.push((-b - Math.sqrt(D)) / (2 * a));
        res["quadratic roots"] = tmp;
    }
    return res;
 }
  console.log(getResult(2,4,-3));

{
  discriminant: 40,
  'quadratic roots': [ 0.5811388300841898, -2.58113883008419 ]
    
    
function getAverageMark(marks){
    // код для задачи №2 писать здесь
    // return averageMark;
}


