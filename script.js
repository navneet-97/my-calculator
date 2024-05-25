document.addEventListener("DOMContentLoaded", function() {
    // Clear the display
    function clearScreen() {
        document.getElementById("result").value = "";
    }

    // Display the clicked value
    function display(value) {
        document.getElementById("result").value += value;
    }

    // Evaluate the expression
    function calculate() {
        try {
            var result = eval(document.getElementById("result").value);
            document.getElementById("result").value = result;
        } catch (e) {
            document.getElementById("result").value = "Error";
        }
    }

    // Remove the last character from the display
    function backspace() {
        var input = document.getElementById("result").value;
        document.getElementById("result").value = input.slice(0, -1);
    }

    // Handle keypress events for keyboard support
    document.addEventListener("keydown", function(event) {
        var key = event.key;
        if (/[0-9]/.test(key) || ['+', '-', '*', '/', '.'].includes(key)) {
            display(key);
        } else if (key === "Enter") {
            calculate();
        } else if (key === "Backspace") {
            backspace();
        } else if (key === "Escape") {
            clearScreen();
        }
    });

    // Expose functions to the global scope
    window.clearScreen = clearScreen;
    window.display = display;
    window.calculate = calculate;
    window.backspace = backspace;
});
