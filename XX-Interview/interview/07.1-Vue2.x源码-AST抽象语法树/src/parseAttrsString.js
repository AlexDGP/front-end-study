export default function (attrsString) {
  if (attrsString === undefined) return [];

  let isQuote = false;
  let point = 0;
  let result = [];

  for (let i = 0; i < attrsString.length; i++) {
    let char = attrsString[i];
    if (char === '"') {
      isQuote = !isQuote;
    } else if (char === " " && !isQuote) {
      if (!/^\s*$/.test(attrsString.substring(point, i))) {
        result.push(attrsString.substring(point, i).trim());
      }
      point = i;
    }
  }
  result.push(attrsString.substring(point).trim());
  result = result.map((item) => {
    const o = item.match(/^(.+)="(.+)"$/);
    return {
      name: o[1],
      value: o[2],
    };
  });
  return result;
}
