const userRequest = () => {
  return new Promise ((resolve, reject) => {
    document.getElementById("result").innerHTML = "Waiting for response..."
    
    const error = false

    if (!error) {
      resolve()
    } else {
      reject("Error: Something went wrong")
    }
  })
}

const serverResposne = () => {
  setTimeout(() => {
    document.getElementById("result").innerHTML = "Response from server"
  }, 2000)
}

userRequest()
  .then(serverResposne)
  .catch(err => console.log(err))


