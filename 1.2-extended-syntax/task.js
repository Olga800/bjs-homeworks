let quadraticEquation = (a, b, c)  {
    if(a == 0) {
        return false;
    let res = {};
    let D = b * b - 4 * a * c;
    console.log('D = ' + D);
    }
    if(D < 0) {
        return false;
    res['discriminant'] = D;
       }
    if(D == 0) {
        res["quadratic roots"] = (-b + Math.sqrt(D)) / (2 * a);
        }
    else if(D > 0) {
        let tmp = [];
        tmp.push((-b + Math.sqrt(D)) / (2 * a));
        tmp.push((-b - Math.sqrt(D)) / (2 * a));
        res["quadratic roots"] = tmp;
    }
    return res;
}
}
console.log(quadraticEquation(1,12,36))
}

    
function getAverageMark(marks) {
  
let marks = new Object();
marks.algebra = [5,4,4,4,5,5,5];
marks.history = [3,2,4,4,3,3,5];
marks.gegraphy =[4,4,4,4,3,3,3];
    if (marks==0) {
        console log('Пустой массив');
  } else (marks ==!0) {
     let sum.marks.algebra = ((a, b) => (a + b)) / algebra.length;slice(5));
     let sum.marks.history = ((a, b) => (a + b)) / history.length;slice(5));
     let sum.marks.gegraphy = ((a, b) => (a + b)) / gegraphy.length;slice(5));
      console.log(sum.marks.algebra + sum.marks.history + sum.marks.gegraphy/3);
  }
}
     





