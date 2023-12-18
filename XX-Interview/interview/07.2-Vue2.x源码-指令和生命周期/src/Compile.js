export default class Compile {
  constructor(el, vue) {
    this.$vue = vue;
    this.$el = document.querySelector(el);
    if (this.$el) {
      let $fragment = this.node2Fragment(this.$el);
      this.compile($fragment);
    }
  }
  node2Fragment(el) {
    let fragment = document.createDocumentFragment();
    let child;
    while ((child = el.firstChild)) {
      fragment.appendChild(child);
    }
    return fragment;
  }
  compile(el) {
    let childNodes = el.childNodes;
    let self = this;
    childNodes.forEach((node) => {
      let text = node.textContent;
      if (node.nodeType === 1) {
        self.compileElement(node);
      } else if (node.nodeType === 3) {
      }
    });
  }
  compileElement(node) {
    let nodeAttrs = node.attributes;
    Array.prototype.slice.call(nodeAttrs).forEach((attr) => {
      let attrName = attr.name;
      let value = attr.value;
      let dir = attrName.substring(2);
      if (attrName.indexOf("v-") === 0) {
        if (dir === "model") {
          console.log("model", value);
        } else if (dir === "for") {
          console.log("for", value);
        } else if (dir === "if") {
          console.log("if", value);
        }
      }
    });
  }
  compileText() {}
}
