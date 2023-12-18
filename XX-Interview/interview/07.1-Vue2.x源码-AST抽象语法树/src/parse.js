import parseAttrsString from "./parseAttrsString";

export default function (templateString) {
  let index = 0;
  let restString = "";
  let startReg = /^\<([a-z]+[1-6]?)(\s[^\<]+)?\>/;
  let endReg = /^\<\/([a-z]+[1-6]?)\>/;
  let wordReg = /^([^\<]+)\<\/([a-z]+[1-6]?)\>/;
  let stack1 = [];
  let stack2 = [{ children: [] }];

  while (index < templateString.length - 1) {
    restString = templateString.substring(index);
    if (startReg.test(restString)) {
      let startTag = restString.match(startReg)[1];
      let attrsString = restString.match(startReg)[2];
      let attrsStringLength =
        attrsString !== undefined ? attrsString.length : 0;
      console.log("attrsString", attrsString);
      console.log("start", startTag);
      stack1.push(startTag);
      stack2.push({ tag: startTag, children: [], attrs: parseAttrsString(attrsString) });
      index += startTag.length + 2 + attrsStringLength;
      // console.log(stack1, stack2);
    } else if (endReg.test(restString)) {
      let endTag = restString.match(endReg)[1];
      // console.log("end", endTag);
      if (endTag === stack1[stack1.length - 1]) {
        let popTag = stack1.pop();
        let popArr = stack2.pop();
        if (stack2.length > 0) {
          if (stack2[stack2.length - 1].children) {
            stack2[stack2.length - 1].children.push(popArr);
          } else {
            stack2[stack2.length - 1].children = [popArr];
          }
        }
      } else {
        throw new Error(stack1[stack1.length - 1] + "标签未封闭");
      }
      index += endTag.length + 3;
      // console.log(stack1, stack2);
    } else if (wordReg.test(restString)) {
      let word = restString.match(wordReg)[1];
      if (!/^\s+$/.test(word)) {
        // console.log("word", word);
        stack2[stack2.length - 1].children.push({ text: word, type: 3 });
      }
      index += word.length;
    } else {
      index++;
    }
  }
  return stack2[0].children[0];
}
