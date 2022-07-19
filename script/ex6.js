const data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};

const createTree = (container, obj) => {
  document.getElementById("container").innerHTML = createTreeText(obj);
}

const createTreeText = (obj) => { 
  let li = '';
  let ul;
  for (let key in obj) {
    li += '<li>' + key + createTreeText(obj[key]) + '</li>';
  }
  if (li) {
    ul = '<ul>' + li + '</ul>'
  }
  return ul || '';
}

createTree(container, data);