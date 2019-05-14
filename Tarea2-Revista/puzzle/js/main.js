var numberA = 0;
var numberB = 0;
var typeOperation;
var justSolved = false;


var hiddenNumber = 16;

function click(element) {
    console.log(element)
}




function setUpBoard() {
    var pieces = document.getElementsByClassName('piece');
    var numbersSet = getNumberSet();

    for (let i = 0; i < pieces.length; i++) {
        pieces[i].textContent = numbersSet.delete(index);
        
    }


}

function getNewNumbers() {

    var initialNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    var numbers = [];
    while (numbers.length <= 16) {
        var number = initialNumbers.splice(getRanndomInteger(0, initialNumbers.length - 1))
        numbers.add(number);
    }

    console.log(numbers)
    return numbers;
}

function getNumberSet() {
    var numbersSet = new Set();
    while (numbersSet.size < 16) {
        numbersSet.add(getRanndomInteger(1, 16));
    }
    return numbersSet
}

function getRanndomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
