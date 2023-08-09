function button() {
  let num1 = parseFloat(document.getElementById("number1").value);
  let num2 = parseFloat(document.getElementById("number2").value);
  let num3 = parseFloat(document.getElementById("number3").value);

  let a = document.getElementById("reslt");

  if ((num1) && (num2) && !isNaN(num2)) {
    if (num1 > num2) {
      if (num1 > num3) {
        a.textContent = "big" + num1;
      } else {
        a.textContent = "big" + num3;
      }
    } else {
      if (num2 > num3) {
        a.textContent = "big" + num2;
      } else {
        a.textContent = "big" + num3;
      }
    }
  } else {
    a.textContent = "enter valid number";
  }
}

console.log("hii");
