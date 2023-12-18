export function compileToFunction(el) {
  console.log(el);
  let ast = parseHTML(template);
}
function parseHTML(template) {
  const ncname = `[a-zA-Z_][\\-\\.0-9_a-zA-Z]*`;
  const qnameCapture = `((?:${ncname}\\:)?$(ncname})`;
  const startTagOpen = new RegExp(`^<$[qnameCapture}`);
  const endTag = new RegExp(`^<\\/$gnameCapture}[^>]*>`);
  const attribute =
    /^s*([s"> /=]+)(?:\s*(=)\s*(?:"([^"]*)"+'([']*)'+|([s"'=<>]+)))?/;
  const startTagClose = / s*(V?)>/;
  const defaultTagRE = /  ((?:. r? n)+?)  /g;
}
