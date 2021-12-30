/*let promise = new Promise((res, rej) => {
    setTimeout(() =>{
        res(Math.random())
    },2000)}
)
promise.then((res) => {
    console.log('promise resolve!!! ' + res)
})
promise.then((res) => {
    console.log('promise resolve!!! ' + res)
})*/

// const doAfter = () => {
//     return  new Promise((res, rej) => {
//         res()
//         setTimeout(() => {
//            console.log('res')
//             }, 3000)
//         })
// }

/*
Давайте создадим функцию doAfter, которая:
1. … принимает параметром кол-во секунд, сколько ждать
2. … внутри себя будет создавать Promise, обещание которого - просто ждать
переданное на этапе 1 кол-во секунд и резолвится через это время.
3. ... возвращает созданный промис наружу.
*/

// const doAfter = (seconds) =>{
//     setTimeout(() => {
//   let f =  new Promise((res, rej) => {
//             console.log('promise zarezolvitsya cherez '+ seconds )
//         })
//     }, seconds)
// }
// doAfter(10)

// const f = (n) =>{
//     setTimeout(() =>{
//         console.log('aaa')
//     }, n)
// }
// f(5000)

/*let pr = new Promise( (resolve) => {
    let data = {
        cities: '[{title: "Minsk"}, {title: "Kiev"}]',
        website: "it-kamasutra.com"
    };
    resolve(data);
});

const pr1 = pr.then( data => {
    console.log(data.website);
})*/

// const getRandomAfter = (seconds) =>{
//     setTimeout(() => {
//           new Promise((res, rej) => {
//             let number = Math.random()
//              res(`я получил число ${number} спустя ${seconds}`)
//         })
//     }, seconds*1000)
// }
// getRandomAfter(2)


/*
const getRandomAfter = ((seconds) =>{
    setTimeout(() => {
        new Promise((res, rej) => {
            res()
        }).then(()=> console.log(`я получил число ${Math.random()} спустя ${seconds} секунды`))
    }, seconds*1000)
})


let promises = [getRandomAfter(3), getRandomAfter(5), getRandomAfter(6)]
let commonPromisse = Promise.all(promises)
commonPromisse.then(()=>console.log)*/


// const api = {
//     getVacanciesCountFromMicrosoft() {
//         return new Promise((res, rej) => {
//             data = 3
//             res(data)
//         })
//     },
//     getVacanciesCountFromGoogle() {
//         return new Promise((res, rej) => {
//             data = 5
//             res(data)
//         })
//     },
//     sendStudentsCountToItKamasutra(data) {
//         return new Promise((res, rej) => {
//             res()
//         })
//     }
//
// }
// const a = api.getVacanciesCountFromMicrosoft()
//     .then(data => {
//         console.log(data);
//     });
//
// const b = api.getVacanciesCountFromGoogle()
//     .then(data => {
//         console.log(data);
//     });
//
// api.sendStudentsCountToItKamasutra()
//     .then(data => {
//         console.log(a + b)
//     })

const get1 = () => {
    return new Promise((res, rej) => {
        const data = 3
        res(data)

    })
}
const get2 = () => {
    return new Promise((res, rej) => {
        const data = 5
        res(data)

    })
}

const pr = get1().then(data => {
    console.log(data)
})
const pr2 = get2().then(data => {
    console.log(data)
})






