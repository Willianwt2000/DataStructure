function checkIfExist(arr) {
    for (var i = 0; i < arr.length; i++) {
        var numberOne = arr[i];
        for (var j = 0; j < arr.length; j++) {
            var numberTwo = arr[j];
            if (i !== j && numberOne === 2 * numberTwo) {
                return true;
            }
        }
    }
    return false;
}
;
var input = [10, 2, 5, 3];
console.log(checkIfExist(input)); //true
