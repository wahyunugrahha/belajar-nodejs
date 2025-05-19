const fs = require("fs");
const path = require("path");

const readableStream = fs.createReadStream(path.resolve(__dirname, "input.txt"), {
  highWaterMark: 15,
});
const writableStream = fs.createWriteStream("output.txt");

readableStream.on("readable", () => {
  let chunk;
  while ((chunk = readableStream.read()) !== null) {
    process.stdout.write(`[${chunk}]`);
    writableStream.write(chunk);
  }
});

readableStream.on("end", () => {
  writableStream.end(); 
});
