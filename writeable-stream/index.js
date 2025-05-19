const fs = require("fs");
const writaAbleStream = fs.createWriteStream("output.txt");
writaAbleStream.write("Ini adalah Line 1!\n");
writaAbleStream.write("Ini adalah Line 2!\n");
writaAbleStream.end("Akhir\n");

