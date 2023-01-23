temp = 0;
let names = ["abu rayhan", "sakar hossain", "akib ahmed", "alvi chowdhuri"];

console.log(typeof names);
let index = 0;

let name = names[index];
a = setInterval(() => {
  let name = names[index++];
  console.log(name, name.length); //we will get  abu rayhan 10 than it will give error.
  names = ""; // It will give a error because of taking empty string.

  if (index == names.length) {
    index = 0;
    temp++;
  }

  if (temp === 2) {
    clearInterval(a);
  }
}, 1000);
