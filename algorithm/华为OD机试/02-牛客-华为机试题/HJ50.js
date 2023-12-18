const readline = require("readline").createInterface(process.stdin);
readline.on("line", function (line) {
  line = line.replace(/[{[]/, "(");
  line = line.replace(/[}]/, ")");
  const funcStr = `(function (){
    return ${line}
  })()`;
  let val = eval(funcStr);
  console.log(val);
});

// 时长: 5分30秒
