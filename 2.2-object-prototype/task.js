
String.prototype.isPalindrome = function isPalindrome() {
    
    let string = this.toLowerCase().replace(/\s/g, '').split("");
    
    if (string.join() === string.reverse().join()) {
        
        return true;
    } else { 
        return false;
    }
}

function getAverageMark(marks) {
    let sum = 0;
    if (marks.length === 0) {
        return 0;
    }
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }

    let averageMark = sum / marks.length;
    let roundedAverage = Math.round(averageMark);

    return roundedAverage;
}

 	

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}
