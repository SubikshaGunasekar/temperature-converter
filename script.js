document.addEventListener("DOMContentLoaded", function () {
    const inputTemperature = document.getElementById("inputTemperature");
    const inputUnit = document.getElementById("inputUnit");
    const outputUnit = document.getElementById("outputUnit");
    const convertButton = document.getElementById("convertButton");
    const resultText = document.getElementById("resultText");

    convertButton.addEventListener("click", function () {
        const inputValue = parseFloat(inputTemperature.value);
        const inputType = inputUnit.value;
        const outputType = outputUnit.value;

        if (isNaN(inputValue)) {
            resultText.textContent = "Please enter a valid temperature.";
            return;
        }

        let result;
        if (inputType === "celsius") {
            if (outputType === "fahrenheit") {
                result = (inputValue * 9/5) + 32;
            } else if (outputType === "kelvin") {
                result = inputValue + 273.15;
            } else {
                result = inputValue;
            }
        } else if (inputType === "fahrenheit") {
            if (outputType === "celsius") {
                result = (inputValue - 32) * 5/9;
            } else if (outputType === "kelvin") {
                result = (inputValue - 32) * 5/9 + 273.15;
            } else {
                result = inputValue;
            }
        } else if (inputType === "kelvin") {
            if (outputType === "celsius") {
                result = inputValue - 273.15;
            } else if (outputType === "fahrenheit") {
                result = (inputValue - 273.15) * 9/5 + 32;
            } else {
                result = inputValue;
            }
        }

        resultText.textContent = `${inputValue} ${inputType.toUpperCase()} is ${result.toFixed(2)} ${outputType.toUpperCase()}`;
    });
});
