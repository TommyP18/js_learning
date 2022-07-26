const redBackground = () => {
  document.body.style.background = "red"
}

const greenBackground = () => {
  setTimeout(() => document.body.style.background = "green", 3000)
}

const orangeBackgroundButton = () => {
  document.body.style.background = "orange"
}

const addingOrdinaryList = () => {
  const ol = document.createElement("OL")
  document.body.append(ol)
  let i = 0
  const timer = setInterval(() => {
    i++
    const li = document.createElement("LI")
    li.innerHTML = `Element ${i}`
    ol.append(li)
    if (i === 20) clearInterval(timer)

    if (i % 2 == 0) {
      li.style.backgroundColor = "green"
    } else {
      li.style.backgroundColor = "purple"
    }
  }, 300)

}



document.addEventListener("DOMContentLoaded", () => {
  redBackground();
  greenBackground();
  addingOrdinaryList();
})