let Array = [1, 2, 3, 4, 5, undefined, null];
console.log(Array);

Array[0] = 9;

console.log(Array);

for(let i = 0; i <= Array.length; i++){
    console.log(Array[i]);
}