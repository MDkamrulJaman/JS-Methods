const persons = [
  { name: "jaman", age: 22 },
  { name: "kamrul", age: 23 },
  { name: "rabbi", age: 24 },
];

function findJaman() {
  if (persons) {
    return (persons.name = "kamrul");
  }
}

const result = persons.find(findJaman);
console.log(result);

const resultname = persons.find(findJaman).name;
console.log(resultname);

const resultAge = persons.find(findJaman).age;
console.log(resultAge);
