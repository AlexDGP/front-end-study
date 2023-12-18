const readline = require("readline").createInterface(process.stdin);
readline.on("line", (value) => {
  if (!value) {
    readline.close();
    return;
  }
  value = Array.from(value);
  while (value.length > 8) {
    const res = value.splice(0, 8);
    console.log(res.join(""));
  }
  console.log((value.join("") + "00000000").slice(0, 8));
  readline.close();
});
