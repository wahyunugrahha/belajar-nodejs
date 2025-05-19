const fs = require("fs");

const fileReaderCallback = (error, data) => {
  if (error) {
    console.log(`Gagal membaca file`);
    return;
  }
  console.log(data);
};
fs.readFile("notes.txt", "utf-8", fileReaderCallback);


