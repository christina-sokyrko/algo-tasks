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



