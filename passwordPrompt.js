function passwordGuess() {
    let correctPassword = "pat143";
    let userPassword;

    do {
        userPassword = prompt("Enter the device's password:");

        if (userPassword !== correctPassword) {
            alert("Incorrect, try again.");
        }
    } while (userPassword !== correctPassword);

    alert("Access granted.");
}
