
String.prototype.isPalindrome = function isPalindrome() {
    
    let string = this.toLowerCase().replace(/\s/g, '').split("");
    
    if (string.join() === string.reverse().join()) {
        
        return true;
    } else { 
        return false;
    }
}

function getAverageMark(marks) {
    function getAverageScore( data ) {	
 	let list = {};
 	let average = 0;
 	let quantity = 0;
 	for (let discipline in data) {
 		let value = data[discipline];
 		let averageMark = 0;
	    for (let i=0; i < value.length; i++) {
	    	averageMark = averageMark + value[i];
	    }
	    averageMark = (averageMark/value.length);
	    list[discipline] = averageMark;
	    quantity++;
	    average = average + averageMark;
 	}
 	list.average = average / quantity;
 	return list;
 }

 console.log(getAverageScore({
 	algebra: [2, 4, 5, 2, 3, 4],
 	geometry: [2, 4, 5],
 	russian: [3, 3, 4, 5]
 }))

    // return averageMark
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}
