var numberA = 0;
var numberB = 0;
var typeOperation;
var justSolved = false;

function keyPressed(element) {
    var text = element.textContent;

    if (!justSolved) {
        addToDisplay(text)
    } else {
        justSolved = false;
        setDisplayContent(text);
    }
}

function addToDisplay(text) {
    var content = getDisplayContent();
    content = content === "0" ? "" : content;
    setDisplayContent(content + text);
}

function getDisplayContent() {
    var text = document.getElementById("display").textContent.replace(/\./g, "");
    return text.replace(",", ".");
}

function setDisplayContent(text) {
    document.getElementById("display").textContent = formatValue(text);
}

function reset() {
    setDisplayContent("0");
    numberA = 0;
    numberB = 0;
    typeOperation = "";
    updateDisplays();
}

function operation(event) {

    if (getDisplayContent() != "0") {
        numberA = Number(getDisplayContent());
        setDisplayContent("0");
    }


    typeOperation = event;
    updateDisplays();
}

function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

function squareRoot(event) {
    numberA = Number(getDisplayContent());
    typeOperation = event.textContent;
    solve();
}

function switchSign() {
    var content = getDisplayContent();

    content = Number(content) * -1;
    setDisplayContent(content);
}

function solve() {
    numberB = Number(getDisplayContent());

    var result = execute();
    numberA = Number(result);
    justSolved = true;
    setDisplayContent(result);
    updateDisplays();
}

function updateDisplays() {
    document.getElementById('formerNumber').textContent = formatValue(numberA);
    document.getElementById('operation').textContent = " " + typeOperation;
}

function formatValue(value) {
    return Number(value).toLocaleString('es-CO');
}



function execute() {
    switch (typeOperation) {
        case "/":
            return divide(numberA, numberB);
        case "*":
            return multiply(numberA, numberB);
        case "-":
            return subtract(numberA, numberB);
        case "+":
            return add(numberA, numberB);
        case "\u{221A}":
            return Math.sqrt(numberA);
        default:
            return null;;
    }
}