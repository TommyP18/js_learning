const handleStartClick = () => {
  const days = parseInt(document.getElementById("days").value, 0);
  const hours = parseInt(document.getElementById("hours").value, 0);
  const minutes = parseInt(document.getElementById("minutes").value, 0);
  // console.log(days, hours, minutes);

  if (days <= 30 || hours <= 24 || minutes <= 60) {
    start(days, hours, minutes);
  } else {
    document.getElementById("errorContainer").innerHTML = "Error"
  }
}

const start = (days, hours, minutes) => {
  let sumInSeconds = 0;
  
  if (days) {
    sumInSeconds = days * 86400;
  }

  if (hours) {
    sumInSeconds = sumInSeconds + (hours * 3600);
  }

  if (minutes) {
    sumInSeconds = sumInSeconds + (minutes * 60);
  }

  displayTime(sumInSeconds);
}

const displayTime = (seconds) => {

  let remainingSeconds = seconds;

  const interval = setInterval(() => {
    const days = Math.floor(remainingSeconds / (60 * 60 * 24));
    const hours = Math.floor((remainingSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((remainingSeconds % (60 * 60)) / 60);

    remainingSeconds--;
    console.log(remainingSeconds);

    document.getElementById("display").innerHTML = `${days} Дней   ${hours} Часов  ${minutes}  Минут`;
    
    if (remainingSeconds === 0) {
      clearInterval(interval)
    }
  }, 1)
  console.log(days, hours, minutes);
}

const btnStart = () => {
  document.getElementById("start").addEventListener("click", () => {
    handleStartClick();
  })
  
}

const btnPause = () => {
  document.getElementById("pause").addEventListener("click", () => {
  })
}

document.addEventListener("DOMContentLoaded", () => {
  btnStart();
  btnPause();
})


