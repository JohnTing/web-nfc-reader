const ndef = new NDEFReader();
ndef.scan().then(() => {
  console.log("Scan started successfully.");
  ndef.onreadingerror = (event) => {
    alert("Error! Cannot read data from the NFC tag. Try a different one?");
    console.log("Error! Cannot read data from the NFC tag. Try a different one?");
  };
  ndef.onreading = (event) => {
    alert("NDEF message read." + event.message);
    console.log("NDEF message read.");
  };
}).catch((error) => {
  alert(`Error! Scan failed to start: ${error}.`);
  console.log(`Error! Scan failed to start: ${error}.`);
});