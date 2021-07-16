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
