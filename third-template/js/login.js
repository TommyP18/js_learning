const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordFormat = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
const loginButton = document.getElementById("loginButton");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const eyeButton = document.getElementById("eyeButton")

const validate  = () => {
  if (emailInput.value.match(mailformat)) {
    emailInput.style.borderColor = "green";
  } else {
    emailInput.style.borderColor = "red";
  };
  
  if (passwordInput.value.match(passwordFormat)) {
    passwordInput.style.borderColor = "green"
  } else {
    passwordInput.style.borderColor = "red"
  }
}

const showPassword = () => {
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";

    passwordInput.setAttribute("type", type);

    if (type === "text") {
      eyeButton.setAttribute("class", "blue");
    } else {
      eyeButton.removeAttribute("class");
    }
}

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  validate();         
});

eyeButton.addEventListener("click", (e) => {
  e.preventDefault();
  showPassword();
})

// Swiper JS 
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});