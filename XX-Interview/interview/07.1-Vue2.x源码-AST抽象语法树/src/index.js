import parse from "./parse";

var templateString = `<div class="aa bb cc" id="sda">
  <h3>你好</h3>
  <ul class="aaa">
    <li class="aaa">A</li>
    <li class="aaa">B</li>
    <li class="aaa">C</li>
  </ul>
</div>
`;

const ast = parse(templateString);
console.log(ast);
