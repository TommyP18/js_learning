const forms = document.querySelectorAll(".form")
const accountButton =  document.getElementById("accountButton")
const addressButton =  document.getElementById("addressButton")
const paymentButton =  document.getElementById("paymentButton")
const securityButton =  document.getElementById("securityButton")

const validation = (field) => {
  const isFormValid = !field.classList.contains("inactive")

  if (isFormValid) {
    field.classList.add("inactive")
  }
}

const showAccountField = () => {
  forms.forEach((form) => {
    validation(form)
    const accountField = document.querySelector(".account-content")
    accountField.classList.remove("inactive")
  })
}

const showAddressField = () => {
  forms.forEach((form) => {
    validation(form)
    const addressField = document.querySelector(".address-content")
    addressField.classList.remove("inactive")
  })
}

const showPaymentField = () => {
  forms.forEach((form) => {
    validation(form)
    const paymentField = document.querySelector(".payment-content")
    paymentField.classList.remove("inactive")
  })
}

const showSecurityField = () => {
  forms.forEach((form) => {
    validation(form)
    const securityField = document.querySelector(".security-content")
    securityField.classList.remove("inactive")
  })
}

securityButton.addEventListener("click", () => {
  showSecurityField();
})

paymentButton.addEventListener("click", () => {
  showPaymentField();
})

addressButton.addEventListener("click", () => {
  showAddressField()
})

accountButton.addEventListener("click", () => {
  showAccountField();
})

// Avatar Change

const file = document.getElementById("changeFile");
const img = document.getElementById("avatarImg")
const remove = document.getElementById("removeImg")

file.addEventListener("change", () => {
  const choosedFile = file.files[0];

  if (choosedFile) {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      img.setAttribute("src", reader.result)
    })

    reader.readAsDataURL(choosedFile);
  }
})

remove.addEventListener("click", () => {
  img.src = "../img/placeholder.jpg";

})