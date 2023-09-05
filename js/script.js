// 1. Напишіть функцію, яка перевіряє, чи є введений рядок паліндромом  

const stringPalindrom = (word) => {
    let stringArray = [...word]
    let stringArrayReverse = [...word].reverse()

    for(let i = 0; i < stringArray.length; i++){
        if (stringArray[i] !== stringArrayReverse[i]){
    return 'Цей рядок не є паліндромом'
        } else continue
    }
    return 'Цей рядок є паліндромом'
}
console.log(stringPalindrom('racecar'));


// 2. Напишіть функцію, яка перетворює рядок в camelCase.
const camelCase = (string) => {
   let stringCamelCase = string.split(' ').reduce((accum, elem) => {
    elem = elem[0].toUpperCase() + elem.slice(1) 
    accum += elem
    return accum
   })
   return stringCamelCase
}
console.log(camelCase('Напишіть функцію яка перетворює рядок в camelCase'));


// 3. Напишіть функцію, яка знаходить суму всіх чисел Фібоначчі менше введеного числа.

function fiboSum(num){
    let index = 0
    const allRowFibonachi = [0,1]
    let res = allRowFibonachi[index]
       function rowFibonachi() {
        res += allRowFibonachi[index+1]
          if(res > num) {
            res -= allRowFibonachi[index+1]
            return res}
          allRowFibonachi.push(allRowFibonachi[index] + allRowFibonachi[index+1])
            index++
          rowFibonachi()
          return allRowFibonachi
       }
       console.log(rowFibonachi())
       return res
 }
 console.log(fiboSum(35))


//  4. Напишіть функцію, яка генерує випадковий пароль заданої довжини.

const parol = (length) => {
    const alphabet =  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|',  ':', ';', '"', "'", '<', '>', ',', '.', '?', '/','~', '~'];
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    const allSymbols = [...alphabet, ...symbols, ...numbers]
        // console.log(allSymbols);

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      
    let parolString = ''
    
        for(let i = 0; i < length; i++){
            let index = getRandom (0, allSymbols.length - 1)
            parolString += allSymbols[index]
        }
        return parolString
}
console.log(parol(10))


// 5. Напишіть рекурсивну функцію, яка перевіряє, чи є введений рядок паліндромом (тобто чи можна його читати однаково зліва направо та справа наліво). Наприклад, рядок "racecar" є паліндромом.

const recursionPalindrom = (word) => {
    let stringArray = [...word]
    let stringArrayReverse = [...word].reverse()
        let i = 0
        let stringForMe 
   recursion(i)

    function recursion (i){
        if (stringArray[i] !== stringArrayReverse[i]) {
            stringForMe = 'Цей рядок не є паліндромом'
            return stringForMe}

        if (i == stringArray.length) {
            stringForMe = 'Цей рядок є паліндромом'
            return stringForMe}
        i++
        recursion(i)
    }
    
    return stringForMe
}
console.log(recursionPalindrom('racecar'));

// 6. Напишіть функцію, яка змінює колір фону сторінки через 5 секунд після завантаження документа.
