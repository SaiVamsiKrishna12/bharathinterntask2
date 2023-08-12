function convertTemperature() {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const fromUnit = document.getElementById("fromUnit").value;
    let result;

    if (fromUnit === "celsius") {
        result = (inputValue * 9 / 5) + 32;
        document.getElementById("result").textContent = `${inputValue}°C is ${result.toFixed(2)}°F`;
    } else if (fromUnit === "fahrenheit") {
        result = (inputValue - 32) * 5 / 9;
        document.getElementById("result").textContent = `${inputValue}°F is ${result.toFixed(2)}°C`;
    }
}
