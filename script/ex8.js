class Elem {

  constructor(selector) {
      this.elements = document.querySelectorAll(selector);
  }

  each(origFunction) {
      this.elements.forEach(item => {
          origFunction(item);
      });
  }

  html(text) {
      let addHtml = elem => {
          elem.innerHTML = text;
      };

      this.each(addHtml);
      return this;
  }

  attr(name, value) {
      const addAttribute = elem => {
          elem.setAttribute(name, value);
      }

      this.each(addAttribute);
      return this;
  }

  append(text) {
      const addEnd = elem => {
          elem.append(text);
      }

      this.each(addEnd);
      return this;
  }

  prepend(text) {
      const addBegin = elem => {
          elem.prepend(text);
      }

      this.each(addBegin);
      return this;
  }
}

const elem = new Elem(".test")

elem.html("hello").append("!").prepend("!");
elem.attr("class", "www").attr("title", "hello");
