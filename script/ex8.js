const username = prompt("Enter your username","");
const password = prompt("Enter your password","");
const user = "Nichita";
const pass = "1234";

if (username == user && password == pass) {
  alert("Hi!")
} else if (username == user && password !== pass) {
  alert("Incorrect password!")
} else if (username !== user && password == pass){
  alert ("Incorect username")
} else if (username == "" || password == ""){
  alert("Validation error!")
}