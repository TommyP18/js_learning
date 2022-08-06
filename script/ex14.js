const parent = document.getElementById("parent");
const child = document.getElementById("child");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  parent.removeChild(child);
})