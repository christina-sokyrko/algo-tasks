//Дані натуральне число n, цілі числа a1....a25, b1....bn. Серед цих послідовностей немає чисел, які повторюються.
//Знайти перетин даних послідовностей.


function getCrossing (n) {
    let a1 = 1;
    let a2 = 25;
    let b1 = 1;
    let list = [];
  
    for (let i = a1; i <= a2; i++) {
      for (let j = b1; j <= n; j++) {
        if (i === j) {
          list.push(i);
        }
      }  
    }
      
    return list;
  }