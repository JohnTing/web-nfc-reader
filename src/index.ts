
const startButton = window.document.getElementById("start") as HTMLButtonElement;
const logText = window.document.getElementById("log") as HTMLTextAreaElement;

startButton.addEventListener("click", () => {
  const ndef = new NDEFReader();
  ndef.scan().then(() => {
    log("Scan started successfully.");
    ndef.onreadingerror = () => {
      log("Cannot read data from the NFC tag. Try another one?");
    };
    ndef.onreading = event => {
      log("NDEF message read.");
      log(event.serialNumber);
      log(event.message.records.join("\n"));
    };
  }).catch(error => {
    log(`Error! Scan failed to start: ${error}.`);
  });

});


function log(message: string) {
  logText.value += message+"\n";
}
