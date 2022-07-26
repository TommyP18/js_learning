const bus = document.querySelector(".bus");
const car = document.querySelector(".car")
const movement = 10;


window.addEventListener("load", (event) => {
  car.style.position = "absolute";
  car.style.left = 0;
  car.style.top = 0;

  bus.style.position = "absolute";
  bus.style.left = 0;
  bus.style.top = 0;
})

window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowLeft":
        if (parseInt(bus.style.left) >= 0)
        bus.style.left = parseInt(bus.style.left) - movement + "px";
        break;
      case "ArrowRight":
        if (parseInt(bus.style.left) <= 2040)
        bus.style.left = parseInt(bus.style.left) + movement + "px";
        break;
      case "ArrowUp":
        if (parseInt(bus.style.top) >= 0)
        bus.style.top = parseInt(bus.style.top) - movement + "px";
        break;
      case "ArrowDown":
        if (parseInt(bus.style.top) <= 1010)
        bus.style.top = parseInt(bus.style.top) + movement + "px";
        break;
    }

  })

  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "a":
        if (parseInt(car.style.left) >= 0)
        car.style.left = parseInt(car.style.left) - movement + "px";
        break;
      case "d":
        if (parseInt(car.style.left) <= 550)
        car.style.left = parseInt(car.style.left) + movement + "px";
        break;
      case "w":
        if (parseInt(car.style.top) >= 0)
        car.style.top = parseInt(car.style.top) - movement + "px";
        break;
      case "s":
        if (parseInt(car.style.top) <= 200)
        car.style.top = parseInt(car.style.top) + movement + "px";
        break;
    }
  })


