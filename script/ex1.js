const Array = [1, 2, 3, 4, 5];

const firstArrayDisplay = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    alert(arr[i])
  }
}

const seventhArrayDisplay = (arr) => {
  let i = 0;
  do {
    alert(arr[i]);
    i++;
  } while (i < arr.length)

}

const sixthArrayDisplay = (arr) => {
  let i = 0;
  while (i < arr.length) {
    alert(arr[i]);
    i++;
  }
}

const secondArrayDisplay = (arr) => {
  for (let value in arr) {
    alert(arr[value])
  }
}

const thirdArrayDisplay = (arr) => {
  for (let value of arr) {
    alert(value)
  }
}

const fourthArrayDisplay = (arr) => arr.forEach(value => alert(value))

const fifthArrayDisplay = (arr) => {
  for (let value of arr.values()) {
    alert(value)
  }
}



// По моему мнению самый лучший метод является метод .forEach().

const lastMethod = (arr) => {
  alert(arr.splice(0))
}

console.log(lastMethod(Array))