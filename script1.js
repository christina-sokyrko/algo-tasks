//Дані натуральне число n, цілі числа a1....a25, b1....bn. Серед цих послідовностей немає чисел, які повторюються.
//Знайти перетин даних послідовностей.

let nn = 500;
let a1 = 1;
let a2 = 25;
let b1 = 1;
let b2 = nn;
let list = [];
let o;
let j;
for (o = a1; o < a2; o++);
for (j = b1; j < b2; j++);
    if (o == j) {
         list.push(o);
}
console.log(list);