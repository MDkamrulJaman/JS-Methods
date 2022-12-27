const post = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(post);

const splicedNum = post.splice(0, 5);
console.log(`The splicedNum  is ${splicedNum}`);

console.log(`the array after being spliced ${post}`); // it will return a new array  by deleing selected array

const posts = ["Home", "Exprience", "Portfolio", "About", "Contact"];
console.log(posts);

const spliced = posts.splice(0, 2);
console.log(`The spliced elements ${spliced}`);

console.log(`The deleted elements ${posts}`); // it will return a new array  by deleing selected array
