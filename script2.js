//Знайти всі числа-паліндроми, менші за 100, які при піднесенні до квадрату теж паліндроми


function checkPalindrome (n) {
    function isPalindrome (number) {
        let reverse = Number(number.toString().split('').reverse().join(''));
        let square = number * number;
        let squareReverse = Number(square.toString().split('').reverse().join(''));
        return (number===reverse && square===squareReverse);
    }
  
    let all = [];
    
    for (let i = 1; i < n; i++) {
      if (isPalindrome(i)) {
          all.push(i);
      }
    }
    
    return all;
  }
