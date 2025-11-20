let integerNumber = 0;
let outputDiv = document.getElementById("output");

while (integerNumber < 1000) {
    integerNumber++;
    let text = "";
    if (integerNumber%15 == 0) {
        text = "FizzBuzz";
    }

    else if (integerNumber%3 == 0 && integerNumber%5 != 0) {
        text = "Fizz";
    }
    else if (integerNumber%5 == 0 && integerNumber%3 != 0) {
        text = "Buzz";
    }
    else {
        text = integerNumber;
    }

    outputDiv.innerHTML = outputDiv.innerHTML + text + "<br>";
} 

