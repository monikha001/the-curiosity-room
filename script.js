
const clockButton = document.getElementById("clock-button");

clockButton.addEventListener("click", function()
 {
    document.getElementById("clock-clue").textContent =
    "The clock is frozen at 12:00. You discover the number 7 engraved beneath it!";
 
    document.getElementById("clue-list").innerHTML =
    "<li>The clock is stopped at 12:00.</li><li>The number 7 is engraved beneath it.</li>";
 });
 
const photoButton = document.getElementById("photo-button");

photoButton.addEventListener("click", function() {
    
    document.getElementById("clue-list").innerHTML =
        "<li>The clock is stopped at 12:00.</li>" +
        "<li>The number 7 is engraved beneath it.</li>" +
        "<li>The photograph says: YOUR NAME IS THE KEY.</li>";

    document.getElementById("photo-clue").textContent =
        "On the back, someone has written: YOUR NAME IS THE KEY.";
});

const drawerButton = document.getElementById("drawer-button");

drawerButton.addEventListener("click", function() {
    const enteredCode = document.getElementById("drawer-code").value;
    const drawerResult = document.getElementById("drawer-result");

    if (enteredCode === "1207") {
        drawerResult.textContent =
            "The drawer unlocks! Inside, you find an ID card with your photograph, but the name has been scratched out.";
            
document.getElementById("clue-list").innerHTML +=
    "<li>The ID card has your photograph, but its name is scratched out.</li>";

    } else {
        drawerResult.textContent =
            "The drawer remains locked. Re-examine the clues!";
    }
});
