
const startButton = document.getElementById("start-button");

startButton.addEventListener("click", function () {
    document.getElementById("opening-scene").hidden = true;
    document.getElementById("investigation-scene").hidden = false;
});

const clueList = document.getElementById("clue-list");
const discoveredClues = new Set([
    "The clock is stopped at 12:00."
]);

function addClue(clue) {
    if (discoveredClues.has(clue)) {
        return;
    }

    discoveredClues.add(clue);

    const listItem = document.createElement("li");
    listItem.textContent = clue;
    clueList.appendChild(listItem);
}

const clockButton = document.getElementById("clock-button");

clockButton.addEventListener("click", function () {
    document.getElementById("clock-clue").textContent =
    document.getElementById("dialogue-speaker").textContent = "YOUR THOUGHTS";
document.getElementById("dialogue-text").textContent =
    "Seven... Why does that number feel familiar? Someone wanted me to find it.";
        "The clock is frozen at 12:00. The number 7 has been engraved beneath it.";

    addClue("The number 7 is engraved beneath the clock.");
});

const photoButton = document.getElementById("photo-button");

photoButton.addEventListener("click", function () {
    document.getElementById("photo-clue").textContent =
    document.getElementById("dialogue-speaker").textContent = "YOUR THOUGHTS";
document.getElementById("dialogue-text").textContent =
    "That face... it's mine. But why is my name missing from my own memories?";
        "On the back, someone has written: YOUR NAME IS THE KEY.";

    addClue("The photograph says: YOUR NAME IS THE KEY.");
});

const drawerButton = document.getElementById("drawer-button");

drawerButton.addEventListener("click", function () {
    const enteredCode = document.getElementById("drawer-code").value.trim();
    const drawerResult = document.getElementById("drawer-result");
    const symbolClue = document.getElementById("symbol-clue");

    if (enteredCode === "1207") {
        drawerResult.textContent =
            "The drawer unlocks! Inside is an ID card with your photograph, but the name has been scratched out.";

        symbolClue.textContent =
            "On the back of the ID card, you discover a crescent moon symbol (☾).";

        addClue("The ID card has your photograph, but its name is scratched out.");
        addClue("A crescent moon symbol (☾) is engraved on the ID card.");
    } else {
        drawerResult.textContent =
            "The drawer remains locked. Re-examine the clues!";
        symbolClue.textContent = "";
    }
});

const doorButton = document.getElementById("door-button");

doorButton.addEventListener("click", function () {
    document.getElementById("door-message").textContent =
        "The crescent moon on the door matches the symbol on your ID card. There must be a way to unlock it!";
});
