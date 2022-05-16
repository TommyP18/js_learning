const string = "134$"

const extractCurrencyValue = (str) => {
  return str.replace(/\$/g, "");
}

console.log(extractCurrencyValue(string))