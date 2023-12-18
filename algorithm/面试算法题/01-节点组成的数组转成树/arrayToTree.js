let data = [
  {
    id: 1,
    name: "1",
  },
  {
    id: 2,
    name: "1-1",
    parentId: 1,
  },
  {
    id: 3,
    name: "1-1-1",
    parentId: 2,
  },
  {
    id: 4,
    name: "1-2",
    parentId: 1,
  },
  {
    id: 5,
    name: "1-2-2",
    parentId: 4,
  },
  {
    id: 6,
    name: "1-1-1-1",
    parentId: 3,
  },
  {
    id: 7,
    name: "2",
  },
  {
    id: 8,
    name: "2-1",
    parentId: 7,
  },
  {
    id: 9,
    name: "2-2",
    parentId: 7,
  },
  {
    id: 10,
    name: "2-1-1",
    parentId: 8,
  },
];

function getTree(data) {
  let parents = data.filter((item) => {
    return item.parentId === undefined;
  });
  let children = data.filter((item) => {
    return item.parentId !== undefined;
  });

  function getChildren(parents, children) {
    parents.forEach((parent) => {
      children.forEach((child, index) => {
        if (child.parentId === parent.id) {
          let temp = JSON.parse(JSON.stringify(children));
          temp.splice(index, 1);
          getChildren([child], temp);
          if (parent.children) {
            parent.children.push(child);
          } else {
            parent.children = [child];
          }
        }
      });
    });
  }
  getChildren(parents, children);
  return parents;
}

console.log(getTree(data));
