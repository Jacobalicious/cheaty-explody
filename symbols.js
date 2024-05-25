// main.js
document.addEventListener("DOMContentLoaded", function() {
    const buttonGrid = document.getElementById("button-grid");
    const symbols = [];

    // Populate symbols array with button values
    buttonGrid.querySelectorAll("button").forEach(button => {
        symbols.push(button.getAttribute("data-value"));
        button.addEventListener("click", () => {
            button.classList.toggle("selected");
            const selectedButtons = buttonGrid.querySelectorAll(".selected");
            if (selectedButtons.length === 4) {
                const selectedSymbols = Array.from(selectedButtons).map(btn => btn.getAttribute("data-value"));
                runSymbolsScript(selectedSymbols);
            }
        });
    });

    // Function to run symbols.js with selected symbols
    function runSymbolsScript(selectedSymbols) {
        console.log("Selected symbols:", selectedSymbols);


        // Add your logic here to run symbols.js with selected symbols
        let symbols = selectedSymbols;

        let key = [
            ["o", "at", "y", "bolt", "omnidroid", "h", "flipped c"],
            ["flipped e", "o", "flipped c", "q", "hollow star", "h", "?"],
            ["copy right", "w", "q", "k", "r", "y", "hollow star"],
            ["6", "p", "bt", "omnidroid", "k", "?", "smile"],
            ["trident", "smile", "bt", "c", "p", "3", "filled star"],
            ["6", "flipped e", "puzzel piece", "ae", "trident", "n", "omega"]
        ];
        
        for (let row_index = 0; row_index < key.length; row_index++) {
            let counter = 0;
            let row = key[row_index];
            for (let char of symbols) {
                if (row.includes(char)) {
                    counter++;
                }
            }
            if (counter === 4) {
                // Print symbols in the order they appear in the row
                for (let symbol of row) {
                    if (symbols.includes(symbol)) {
                        console.log(symbol + " ");
                    }
                }
                break;
            }
        }
        
    }
});

