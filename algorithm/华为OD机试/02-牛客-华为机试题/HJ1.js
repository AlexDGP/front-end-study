const readline = require("readline").createInterface(process.stdin);
readline.on("line", function (value) {
  if (
    typeof value === "string" &&
    value.length <= 5000 &&
    value.length > 0 &&
    value.at(-1) !== " "
  ) {
    console.log(value.split(" ").at(-1).length);
  }
  readline.close();
});
