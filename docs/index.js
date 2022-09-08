"use strict";
const startButton = window.document.getElementById("start");
const logText = window.document.getElementById("log");
startButton.addEventListener("click", () => {
    const ndef = new NDEFReader();
    ndef.scan().then(() => {
        log("Scan started successfully.");
        ndef.onreadingerror = () => {
            log("Cannot read data from the NFC tag. Try another one?");
        };
        ndef.onreading = event => {
            log("NDEF message read.");
        };
    }).catch(error => {
        log(`Error! Scan failed to start: ${error}.`);
    });
});
function log(message) {
    logText.value += message + "\n";
}
