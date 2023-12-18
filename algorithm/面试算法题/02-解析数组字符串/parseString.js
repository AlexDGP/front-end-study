let templateString = "3[2[a]3[2[wsd]]]";
function smartRepeat(templateStr) {
  let index = 0;
  let numberStack = [];
  let stringStack = [];
  let restStr = templateStr;
  while (index < templateStr.length - 1) {
    restStr = templateStr.substring(index);
    if (/^\d+\[/.test(restStr)) {
      let number = Number(restStr.match(/^(\d+)\[/)[1]);
      numberStack.push(number);
      stringStack.push("");
      index += number.toString().length + 1;
    } else if (/^\w+\]/.test(restStr)) {
      let word = restStr.match(/^(\w+)\]/)[1];
      stringStack[stringStack.length - 1] = word;
      index += word.length;
    } else if (restStr[0] === "]") {
      let times = numberStack.pop();
      let word = stringStack.pop();
      stringStack[stringStack.length - 1] += word.repeat(times);
      index++;
    }
  }
  return stringStack[0].repeat(numberStack[0]);
}

console.log(smartRepeat(templateString));
