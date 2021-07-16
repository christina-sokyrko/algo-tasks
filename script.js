//Дано: натуральне число n, цілі числа а1,....an. 
//Знайти кількість і суму тих членів даної послідовності, які діляться на 5 і не діляться на 7.

let count = 0;
let sum = 0;
let n = 500; 
let i;
for (i = 1; i < n; i++);
    if (i % 5 == 0 && i % 7 > 0) {
        count = count + 1;
        sum = sum + i;
    }
console.log(count);    
console.log(sum);

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

//Знайти всі числа-паліндроми, менші за 100, які при піднесенні до квадрату теж паліндроми

function isPalindrome (number) {
    let reverse = Number(number.toString().split('').reverse().join(''));
    let square = number * number;
    let squareReverse = Number(square.toString().split('').reverse().join(''));
    return (number===reverse && square===squareReverse);
}
let all = [];
let e;
for (e = 0; e < 100; e++);
isPalindrome(e);
if (e) {
    all.push (e);
}
console.log(all);
