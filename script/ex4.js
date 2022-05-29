const sumInputNumbers = () => {
 const array = [];

 while (true) {
   const number = +prompt("Enter the number please:", "")
   if (!number) {
     break;
   } 
    array.push(number);
 };
 return array.reduce((previous,initial) => previous + initial)
};

alert(sumInputNumbers());
