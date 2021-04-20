  function getResult(a, b, c)  {
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
    }
    return res;
 }
  console.log(getResult(2,4,-3));


    
function getAverageMark(marks) {
  let range = {
  from: 1,
  to: 5,
  }
  
  [Symbol.iterator]() {
    this.current = this.from;
  }
}
    return this;
  },
    
  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

for (let num of range) {
  alert(num); // 1, затем 2, 3, 4, 5
}


