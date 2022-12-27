const posts = ["Home", "Exprience", "Portfolio", "About", "Contact"];
console.log(posts);

const sliced = posts.slice(0, 0);
console.log(`sliced when 0,0 ${sliced}`);

const sliced1 = posts.slice(0, 1);
console.log(`sliced when 0,1 ${sliced1}`);

const sliced2 = posts.slice(1, 2);
console.log(`sliced when 1,2 ${sliced2}`);

const sliced3 = posts.slice(2, 3);
console.log(`sliced when 2,3 ${sliced3}`);

const sliced4 = posts.slice(3, 4);
console.log(`sliced when 3,4 ${sliced4}`);

const sliced5 = posts.slice(4, 5);
console.log(`sliced when 4,5 ${sliced5}`);

const sliced_0to3 = posts.slice(0, 3);
console.log(`sliced when 0,3 ${sliced_0to3}`);

const sliced_1to3 = posts.slice(1, 3);
console.log(`sliced when 1,3 ${sliced_1to3}`);

const sliced_2to5 = posts.slice(1, 5);
console.log(`sliced when 1,5 ${sliced_2to5}`);

const sliced_negative_1to3 = posts.slice(-1, -3); // it will always go to right form the start.
console.log(`sliced when -1,-3 ${sliced_negative_1to3}`);

const sliced_negative_3to1 = posts.slice(-3, -1);
console.log(`sliced when -1,-3 ${sliced_negative_3to1}`);

console.log(`this array won't change ${posts}`);
