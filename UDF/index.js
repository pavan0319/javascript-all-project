function checkNumber(number) {
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

function checkAndDisplay() {
    var inputElement = document.getElementById("inputNumber");
    var number = parseFloat(inputElement.value);

    var resultElement = document.getElementById("result");

    if (!isNaN(number)) {
        var result = checkNumber(number);
        resultElement.textContent = "The number is " + result + ".";
    } else {
        resultElement.textContent = "Please enter a valid number.";
    }
}
