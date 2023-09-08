function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

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
                return res
            }
          allRowFibonachi.push(allRowFibonachi[index] + allRowFibonachi[index+1])
            index++
          rowFibonachi()
          return allRowFibonachi
       }

    rowFibonachi()
       return res
 }
 console.log(fiboSum(35))


//  4. Напишіть функцію, яка генерує випадковий пароль заданої довжини.

const parol = (length) => {
    const alphabet =  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|',  ':', ';', '"', "'", '<', '>', ',', '.', '?', '/','~', '~'];
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    const allSymbols = [...alphabet, ...symbols, ...numbers]
      
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
            return stringForMe
        }

        if (i == stringArray.length) {
            stringForMe = 'Цей рядок є паліндромом'
            return stringForMe
        }
        i++
        recursion(i)
    }
    
    return stringForMe
}
console.log(recursionPalindrom('racecar'));


// 6. Напишіть функцію, яка змінює колір фону сторінки через 5 секунд після завантаження документа.

const newColor = () => {
    document.body.style.background = `rgb(${getRandom (100, 255)}, ${getRandom (100, 255)}, ${getRandom (100, 255)})`
}
setTimeout(newColor, 5000);


// 7. Напишіть функцію, яка виводить на екран випадкове число кожні 3 секунди. При цьому число повинно бути від 1 до 100.

const newNumber = () => {
    const element = document.createElement('span')
    document.body.prepend(element)
    setInterval(() => {
        //задамо рандомний колір з більш темніших тонів
        element.style.color = `rgb(${getRandom (0, 160)}, ${getRandom (0, 160)}, ${getRandom (0, 160)})`
        element.textContent = `${getRandom (0, 100)}`
       
    }, 3000);
}
newNumber()


// 8. Напишіть функцію, яка запускає таймер, що показує час у форматі годин:хвилин:секунди, та оновлює його кожну секунду.

const nowTime = () => {
    let newClock
    const alltime = document.createElement('div')
    const hour = document.createElement('span')
    const minute = document.createElement('span')
    const second = document.createElement('span')
    const time = [hour, minute, second]

        alltime.innerHTML = `Актуальний час: `

        alltime.append(hour)  
        alltime.append(minute)
        alltime.append(second)
    
    document.body.append(alltime)

    function getTime () {
        newClock = new Date()
        hour.textContent = newClock.getHours()
        minute.textContent = newClock.getMinutes()
        second.textContent = newClock.getSeconds()

        for (let elem of time){
            correctTime(elem) 
         }
         hour.textContent += ' : '
         minute.textContent += ' : '
    }
// корректне відображення часу
    function correctTime(arg){
        if (arg.textContent < 10) arg.textContent = `0${arg.textContent}`
    }
    setInterval(getTime, 300)
}
nowTime()


// 9. Створіть клас "Розклад", який містить наступні властивості:
// • Назва предмета
// • День тижня
// • Початковий час заняття
// • Тривалість заняття 
// Клас повинен мати методи:
// • Додавання нового заняття до розкладу
// • Видалення заняття з розкладу
// • Перегляд розкладу на певний день тижня

class Scedule {
        
    constructor(name, day, beginTime, duringTime){
        this.name = name
        this.day = day
        this.beginTime = beginTime
        this.duringTime = duringTime
        this.allScedule = [,[],[],[],[],[],[],[]]
    }
    // • дані по заняттю задаємо масивом [назва предмета, день тижня (числом), початковий час заняття, тривалість заняття]
    addLesson(lesson){
        this.allScedule[lesson[1]].push([lesson[2], lesson[3], lesson[0]])
        return this.allScedule
    }
    // • дані для видалення задаємо масивом [назва предмета, день тижня, початковий час заняття]
    removeLesson(lesson){
        for(let i = 0; i < this.allScedule[lesson[1]].length; i++){
            if (this.allScedule[lesson[1]][i][0] == lesson[2] && this.allScedule[lesson[1]][i][2] == lesson[0]){
                   this.allScedule[lesson[1]].splice(i,1)
            }
        }
        return this.allScedule[lesson[1]]
    }
    
    add(){
        this.allScedule[this.day].push([this.beginTime, this.duringTime, this.name])
        return this.allScedule
    }

    // • Перегляд розкладу на певний день тижня
    showCorrect(numDay){

        //перевірка, чи при створенні екземпляра не продублювався предмет
        let audit = true 
        for(let i = 0; i < this.allScedule[numDay].length; i++){
            if (this.allScedule[numDay][i][0] == this.beginTime && this.allScedule[numDay][i][2] == this.name){
                  audit = false
            }  
        }
       if (audit != false) this.add() 
        
        //сортування занять по часу початку уроку
        this.allScedule[numDay].sort((a,b) => {
           return (+a[0].split(':').join('') - +b[0].split(':').join(''))
        })

        let showCorrectScedule = this.allScedule[numDay].reduce((accum, item) => {
            accum += `${item[0]} | ${item[1]} | ${item[2]}\n`
            return accum
        },'')

        return showCorrectScedule
    }
}

// const schoolScedule = new Scedule('українська мова', 2, '9:00', '45 хв')
// console.log(schoolScedule.addLesson(['українська література', 2, '10:30', '45 хв']))
// console.log(schoolScedule.addLesson(['хімія', 2, '14:00', '45 хв']))
// console.log(schoolScedule.addLesson(['фізика', 2, '12:00', '45 хв']))
// console.log(schoolScedule.showCorrect(2))
// console.log(schoolScedule.removeLesson(['фізика', 2, '12:00']))
// console.log(schoolScedule.showCorrect(2))
// console.log(schoolScedule.showCorrect(2))



// 10. Створіть клас "Автобусна компанія", який містить наступні властивості:
// • Назва компанії
// • Масив автобусів (початково пустий) 
// Клас повинен мати методи:
// • Додавання нового автобуса до компанії
// • Видалення автобуса з компанії
// • Перегляд списку всіх автобусів компанії
// • Перегляд списку автобусів, які доступні для бронювання на певний день

class BusCompany {
    constructor(nameCompany){
        this.nameCompany = nameCompany
        this.allBuses = []
        this.bookingBus = {}
    }
    addBus(nameBus){
        this.allBuses.push(nameBus)
        this.bookingBus[nameBus] = []
    }
    removeBus(nameBus){
        this.allBuses = this.allBuses.filter(elem => elem != nameBus)
        if (nameBus in this.bookingBus) {
            delete this.bookingBus[nameBus]}
        return this.bookingBus
    }
    // • Перегляд списку всіх автобусів компанії
    showListAllBuses(){
        return this.allBuses.join(' | ')
    }
    // коректне представлення дати у вигляді рядку
    correctDate(date){
        const month = [,'january','february', 'match', 'april', 'may', 'june', 'july', 'august', 'september', 'november', 'october', 'december']
        return `${date[0]} ${month[date[1]]} ${date[2]}`

    }
    // • замовлення автобуса на певну дату. Дату вводимо масивом [число, місяць, рік]
    bookingBusOnDate(nameBus, date){
        for(let elem of this.bookingBus[nameBus]){
            if (elem == this.correctDate(date)) return console.log('На цю годину автобус замовлено')
        }
        return this.bookingBus[nameBus].push(this.correctDate(date))
    }
    // • Перегляд списку автобусів, які доступні для бронювання на певний день. Дату вводимо масивом [число, місяць, рік]
    showAllBusWithFreeTime(date){
        let freeBus = []
        console.log(this.bookingBus);
        for(let bus in this.bookingBus){
          if(!this.bookingBus[bus].includes(this.correctDate(date))) freeBus.push(bus)
        }
        return freeBus
    }
}

const proto = new BusCompany('Proto')
// proto.addBus('Icarus')
// proto.addBus('Icarus2')
// proto.addBus('Icarus3')
// proto.addBus('Icarus4')
// proto.removeBus('Icarus')
// console.log(proto.showListAllBuses())
// proto.bookingBusOnDate('Icarus2', [8, 9, 2023])// замовимо на 8.9.2023
// proto.bookingBusOnDate('Icarus2', [8, 9, 2023])// замовимо на 8.9.2023 / 'На цю годину автобус замовлено'
// proto.bookingBusOnDate('Icarus2', [6, 9, 2023])// замовимо на 6.9.2023
// proto.bookingBusOnDate('Icarus2', [7, 9, 2023])
// console.log(proto.showAllBusWithFreeTime([6, 9, 2023])); // ['Icarus3', 'Icarus4'], оскільки перший видалено, а в другого на цю дату є замовлення


// 11. Створіть клас Person з наступними властивостями:
// • name - рядок, що містить ім'я особи;
// • age - число, що містить вік особи;
// • gender - рядок, що містить стать особи.
// • Створіть метод greet(), який повинен повернути рядок з привітанням ім'ям людини, якщо її вік більше 18 років, або повідомлення "Ви ще надто молоді" в іншому випадку.

// • Створіть клас Student, який наслідується від класу Person. 
// Додайте до класу наступні властивості:
// o course - число, що містить номер курсу, на якому 
// навчається студент;
// o university - рядок, що містить назву університету, в якому 
// навчається студент.
// • Створіть метод study(), який повинен повідомляти про те, що 
// студент навчається на певному курсі в певному університеті.

// • Створіть клас Teacher, який наслідується від класу Person. 
// Додайте до класу наступні властивості:
// o subject - рядок, що містить назву предмету, який викладає 
// викладач;
// o university - рядок, що містить назву університету, в якому 
// викладає викладач.
// • Створіть метод teach(), який повинен повідомляти про те, що 
// викладач викладає певний предмет в певному університеті.
// • Створіть об'єкти класів Student і Teacher, заповніть їх 
// властивості і викличте методи study() та teach(). Перевірте, чи 
// працюють всі методи і властивості класів.

class Person {
    constructor(name, age, gender){
        this.name = name
        this.age = age
        this.gender = gender
    }
    greet(){
       return this.age > 18 ? `Вітаємо, ${this.name}` : `${this.name}, Ви ще надто молоді`
    }
}

class Student extends Person {
    constructor(name, age, gender, course, university){
        super(name, age, gender)
        this.course = course
        this.university = university
    }
    study() {
        return `${this.name}, Ви навчаєтеся на ${this.course} курсі в ${this.university}`
    }
}

class Teacher extends Person{
    constructor(name, age, gender, subject, university){
        super(name, age, gender)
        this.subject = subject
        this.university = university
    }
    teach(){
        return `${this.name}, Ви маєте предмет ${this.subject} в ${this.university}`
    }
}

const newStudent = new Student('Kate', 19, 'female', 2, 'Lviv University')
// console.log(newStudent.greet());
// console.log(newStudent.study());

const newTeacher = new Teacher('Mike', 43, 'male', 'history', 'Lviv University')
// console.log(newTeacher.teach());


// 12. Створіть клас BankAccount, який містить наступні властивості:
// • balance (початковий баланс рахунку)
// • transactions (масив транзакцій)
// Також створіть наступні методи:
// • deposit(amount) - додає суму до балансу рахунку та додає нову транзакцію з описом "депозит" та зазначенням суми
// • withdraw(amount) - знімає суму з балансу рахунку, якщо на балансі достатньо коштів, та додає нову транзакцію з описом "виведення" та зазначенням суми
// • getBalance() - повертає поточний баланс рахунку
// • getTransactionHistory() - повертає масив з історією транзакцій (тобто всі транзакції, які були здійснені на цьому рахунку), де кожна транзакція містить опис та суму

class BankAccount {
    constructor(balance, transactions){
        this.balance = balance
        this.transactions = []
    }
    deposit(amount){
        this.transactions.push(`На рахунок покладено ${amount} грн`)
        return this.balance += amount
    }
    withdraw(amount){
        if (this.balance - amount >= 0) {
            this.transactions.push(`З рахунку виведено ${amount} грн`)
            return this.balance -= amount
        } else {
            this.transactions.push(`Відмова у виведенні ${amount} грн з рахунку. Недостатньо коштів на рахунку`)
            return this.balance
        }
    }
    getBalance(){
        return this.balance
    }
    getTransactionHistory(){
        return this.transactions
    }
}

const newBank = new BankAccount(25000)
// console.log(newBank.deposit(400));
// console.log(newBank.withdraw(700));
// console.log(newBank.withdraw(30000));
// console.log(newBank.getTransactionHistory());
// console.log(newBank.getBalance());


// 13. Створіть клас Person, який містить наступні властивості:
// • firstName (ім'я)
// • lastName (прізвище)
// • age (вік)
// • gender (стать)
// • interests (масив інтересів)
// Також створіть метод bio(), який повертає рядок з інформацією про особу, наприклад "Мене звати Іван Петров, мені 25 років. Я люблю грати в футбол та грати на гітарі."

class Person1 {
    constructor(firstName, lastName, age, gender, interests){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.gender = gender
        this.interests = interests
    }
    bio(){
        return `Мене звати ${this.firstName} ${this.lastName}, мені ${this.age} років. Я люблю ${this.interests.join(', ')}.`
    }
}

const newPerson1 = new Person1 ('Іван', 'Петров', 25, 'male', ['грати в футбол', 'грати на гітарі'])
console.log(newPerson1.bio());


// 14. Створіть клас Person з властивостями firstName, lastName, gender, age та методом getFullName(), який повертає повне ім'я людини у форматі "Прізвище Ім'я". 
// Створіть підклас Employee з властивостями jobTitle та salary. Додайте до класу Employee метод getAnnualSalary(), який повертає річний дохід працівника (за умови, що він працює цілий рік). Створіть екземпляр класу Employee та викличте методи getFullName() та getAnnualSalary() з цього екземпляру

class Person2 {
    constructor(firstName, lastName, gender, age){
        this.firstName = firstName
        this.lastName = lastName
        this.gender = gender
        this.age = age
    }
    getFullName(){
        return `${this.lastName} ${this.firstName}`
}
}

class Employee extends Person2{
    constructor(firstName, lastName, gender, age, jobTitle, salary){
        super(firstName, lastName, gender, age)
        this.jobTitle = jobTitle
        this.salary = salary
    }
    getAnnualSalary(){
        return `Ваш річний дохід ${this.salary * 12} грн`
    }
}

const newEmployee = new Employee ('Іван', 'Петров', 'male', 25, 'менеджер', 15000)
console.log(newEmployee.getFullName());
console.log(newEmployee.getAnnualSalary());


// 15. Створіть клас Cart, який має властивість items, яка містить список продуктів (екземплярів класу Product) та методи addItem(product, quantity), removeItem(product),  getTotalPrice() та clear(). Метод addItem додає продукт у кошик з певною кількістю, метод removeItem видаляє продукт з кошика, метод getTotalPrice повертає загальну вартість всіх  продуктів у кошику, а метод clear очищає кошик.

class Cart {
    static items = []

    addItem(product, quantity){
        // перевірка, якщо є, то оновлюється кількість
        for (let elem of Cart.items){
            if (elem.name == product.name) {
                elem.quantity += quantity
                return Cart.items
            }
        }
        product.quantity = quantity
        Cart.items.push(product)
        return Cart.items
    }
    removeItem(product){
        let newArrProduct = []
        for(let index = 0; index < Cart.items.length; index++){
            if (Cart.items[index].name == product.name) {
                continue
            } else newArrProduct.push(Cart.items[index])
            
        }
        Cart.items = [...newArrProduct]
        return Cart.items
    }
    
    static clear(){
        return Cart.items = []
    }
    static getTotalPrice(){
        let sum = 0
        for(let elem in Cart.items){
            sum += Cart.items[elem].quantity * Cart.items[elem].price
        }
        return `Загальна вартість продуктів ${sum} грн`
    }
}

class Product extends Cart {
    constructor(name, price){
        super()
        this.name = name
        this.price = price
    }
}

const milk = new Product('milk', 36)
const butter = new Product('butter', 275)
const bread = new Product('bread', 20)
const bear = new Product('bear', 46)

milk.addItem(milk, 2)
bread.addItem(bread, 3)
butter.addItem(butter,1)
bear.addItem(bear, 1)
bear.addItem(bear, 4)
console.log(Cart.items); //весь список продуктів після додавання
bread.removeItem(bread)
console.log(Cart.items); // після видалення хлібу зі списку
console.log(Cart.getTotalPrice());
Cart.clear() 
console.log(Cart.items); // після очищення корзини 



// 16. Створіть клас Car з наступними властивостями: make, model, year, color, mileage, price та методом getAge(). Метод getAge() повинен повертати кількість років, які пройшли з моменту випуску машини. Створіть екземпляр класу та викличте метод getAge() з цього екземпляру


class Car {
    constructor(make, model, year, color, mileage, price) {
        this.make = make
        this.model = model
        this.year = year
        this.color = color
        this.mileage = mileage
        this.price = price
    }
    getInfo(){
        return `Ви маєте машину ${this.model}. Країна виробник ${this.make}. Колір машини ${this.color}. Вартість ${this.price} грн.`
    }
    getAge(){
        let nowDate = new Date()
        return `Вік Вашої машини ${nowDate.getFullYear() - this.year} років`
    }
}
const audi = new Car ('Germany', 'Audi', 1987, 'blue', 18000, 90000)
// console.log(audi.getInfo());
// console.log(audi.getAge());