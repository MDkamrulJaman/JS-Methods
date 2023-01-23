temp = 0;

let names = ["abu rayhan", "sakar hossain", "akib ahmed", "alvi chowdhuri"];
let index = 0;

let name = names[index];
a = setInterval(() => {
  let name = names[index++];
  console.log(name, name.length);

  if (index == names.length) {
    index = 0;
    temp++;
  }

  if (temp === 2) {
    clearInterval(a);
  }
}, 1000);
