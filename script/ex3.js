const userRequest = () => {
  return new Promise ((resolve, reject) => {
    document.getElementById("result").innerHTML = "Waiting for response..."
    
    const error = false

    if (!error) {
      resolve(serverResposne())
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

async function init() {
  try {
    await userRequest()
  } catch(err) {
    alert(err)
  }
}

init()

