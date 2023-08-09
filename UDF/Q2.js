function checkAndDisplay() {
    var inputElement = document.getElementById("inputNumber");
    var number = parseFloat(inputElement.value);
    
    var resultElement = document.getElementById("result");
    
    if (!isNaN(number)) {
        if (number > 0) {
            resultElement.textContent = "The number is Positive.";
        } else if (number < 0) {
            resultElement.textContent = "The number is Negative.";
        } else {
            resultElement.textContent = "The number is Zero.";
        }
    } else {
        resultElement.textContent = "Please enter a valid number.";
    }
}
