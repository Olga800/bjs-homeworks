
String.prototype.isPalindrome = function isPalindrome() {
    
    let string = this.toLowerCase().replace(/\s/g, '').split("");
    
    if (string.join() === string.reverse().join()) {
        
        return true;
    } else { 
        return false;
    }
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    // return averageMark
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}
