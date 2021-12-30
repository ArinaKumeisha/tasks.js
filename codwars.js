//1. Напишите функцию, которая принимает в качестве параметра две строки.
// Эти строки имеют следующий формат даты: ГГГГ / ММ / ДД.
// Ваша задача: взять годы и посчитать разницу между ними.
var howManyYears = function (date1, date2) {
    let a = date1.split('')
    let b = a[0] + a[1] + a[2] + a[3]
    let a2 = date2.split('')
    let b2 = a2[0] + a2[1] + a2[2] + a2[3]
    if (b > b2) {
        return b - b2
    } else {
        return b2 - b
    }
}

//2. Напишите функцию, которая складывает из двух вызовов.
function add(a) {
    return function (b) {
        return a + b
    }
}

console.log(add(2)(5))

//3. Вам предоставляется несортированный массив, содержащий все целые числа от
// 0 до 100 включительно. Однако одного числа не хватает.
// Напишите функцию, чтобы найти и вернуть это число.

function missingNo(nums) {
    let arrMy = []
    let arr1 = nums.sort((a, b) => a - b)
    for (let i = 0; i <= 100; i++) {
        arrMy.push(i)
        arr1[i] !== arrMy[i]
        if (arr1[i] !== arrMy[i]) {
            return arrMy[i]
        }
    }
}

console.log(missingNo([9, 45, 53, 10, 100, 30, 85, 72, 69, 93, 98, 27, 73, 82, 91, 60, 5, 79, 88, 18, 71, 36, 44, 22, 89, 40, 59, 80, 81, 67, 25, 54, 13, 64, 56, 39, 48, 92, 84, 94, 87, 90, 77, 63, 32, 68, 37, 96, 23, 0, 95, 1, 52, 78, 6, 57, 50, 2, 46, 19, 76, 47, 14, 4, 3, 29, 17, 11, 21, 24, 74, 65, 12, 83, 28, 41, 66, 7, 58, 55, 51, 43, 97, 42, 86, 49, 31, 20, 75, 70, 34, 33, 38, 8, 15, 62, 35, 61, 99, 16]))

//4. Напишите функцию, которая принимает положительное целое число n, суммирует
// все значения в кубе от 1 до n и возвращает эту сумму.
function sumCubes(n) {
    let sum = 0
    for (let i = 0; i <= n; i++) {
        sum += (i * i * i)
    }
    return sum
}

console.log(sumCubes(2))


//5. Реализуйте функцию, которая принимает 3 целочисленных значения a, b, c.
// Функция должна возвращать истину, если треугольник можно построить
// со сторонами заданной длины, и ложь в любом другом случае.
function isTriangle(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        return true;
    } else {
        return false
    }
}

console.log(isTriangle(1, 2, 2))

//6. Ваша задача - выяснить, индекс какой гласной отсутствует в данной строке:
//
// А имеет индекс 0,
// E имеет индекс 1,
// У меня индекс 2,
// O имеет индекс 3,
// U имеет индекс 4.

function absentVowel(x) {
    let arr = 'aeiou'
    let letter = x.split('')
    for (let j = 0; j < arr.length; j++) {
        let out = letter.find(el => el === arr[j])
        if (!out) {
            return j
        }
    }
}

console.log(absentVowel("John Doe hs seven red pples under his bsket"))

//из суммы элементов в массиве вернуть слово 'even' если сумма четная, и слово 'odd' если нечетное
function oddOrEven(array) {
    let b = array.reduce((accum, item) => {
        accum += item;
        return accum;
    });
    if (b % 2 === 0) {
        return 'even';
    }
    if (b % 2 !== 0) {
        return 'odd';
    }
    if (!array.length) {
        return [0]
    }
    return b
}

console.log(oddOrEven([1, 2, 3]))


String.prototype.repeatify = function (a) {
    let res = this.toString()
    for (let i = 0; i < a; i++) {
        res += this
    }
    return res
}
console.log('hi'.repeatify(2))
const r = {
    "Java": 10,
    "Ruby": 80,
    "Python": 65
}

//вернуть из объекта значение баллов выше 60, по убыванию
function myLanguages(results) {
    return Object.keys(results).filter(r => results[r] >= 60).sort((a, b) => results[b] - results[a]);
}

console.log(myLanguages({"Java": 10, "Ruby": 80, "Python": 65}))


//Напишите функцию makeItFunny(), которая принимает на вход строку и возвращает её копию,
// у которой каждый n-ный элемент переведен в верхний регистр. n – задается на входе в функцию.
// Для определения каждого n-ного элемента понадобится остаток от деления %. Подумайте, как его можно использовать.

const makeItFunny = (text, num) => {
    return text.split('').map((t, i) => (i + 1) === num ? t.toUpperCase() : t).join('')
}
console.log(makeItFunny('arina', 3))


//Напишите функцию, которая принимает фразу и возвращает самое короткое слово
const func = (str) => {
    return str.split(' ').sort((a, b) => a.length - b.length)[0]
}

//Напишите функцию, которая на входе будет принимать ФИО, а на выходе возвращать инициалы с большой буквы

const name = (str) => {
    return str.split(' ').map(s=> s[0].toUpperCase()).join(' ')
}
console.log(name('arina kumeisha nozdracheva'))


//Напишите функцию , которая принимает число и возвращает сумму его цифр, даже если оно отрицательное
const sum = (number) => {
    return Math.abs(number).toString().split('').reduce((a,b) => {return + a+ + b},0)
}
console.log(sum(22))
