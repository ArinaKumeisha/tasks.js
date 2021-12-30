// Task 01
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта



// Task 02
// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// rest current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект

/*
let obj = {
    getCurrentCount:(count)=> count,
    increment:(count)=> count+1,
    decrement:(count)=> count-1,
    setCurrent: (count)=> count,
    rest:(count)=> 0
}
console.log(obj.increment(0))
console.log(obj.increment(0))*/


//Напишите функцию, которая принимает в качестве параметра две строки.
// Эти строки имеют следующий формат даты: ГГГГ / ММ / ДД.
// Ваша задача: взять годы и посчитать разницу между ними.

var howManyYears = function(date1, date2) {
    let a = date1.split('')
     let b = a[0]+a[1]+a[2]+a[3]
    let a2 = date2.split('')
    let b2 = a2[0]+a2[1]+a2[2]+a2[3]
if( b > b2){
    return b-b2
}else{
    return b2-b
}
}


console.log(howManyYears('1997/10/10', '2015/10/10'));


/*
var date1 = new Date(2010, 6, 17)
var date2 = new Date(2012, 12, 18)
var diff =date2.getFullYear() - date1.getFullYear()
console.log(diff)
*/


