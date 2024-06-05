//criar promises
const myPromise = new Promise((resolve, reject)=> {
    const nome = 'Hugo'

    if (nome === 'Kairos'){
        resolve('usuario encontrado')
    } else {
        reject('Usuario não encontrado')
    }
})

myPromise.then((data) => {
    console.log(data)
}).catch((error)=> {
    console.log("algo aconteceu:" + error)
})

// Encadeamento de then's
const myPromise2 = new Promise((resolve, reject)=> {
    const nome = 'Kairos'

    if (nome === 'Kairos'){
        resolve('usuario encontrado')
    } else {
        reject('Usuario não encontrado')
    }
})

myPromise2.then((data) =>{
    return data.toUpperCase();
}).then((stringModified) => {
    console.log(stringModified)                                         
})

//Resolver várias promises com all() - vai levar em consideração o tempo da maior promise para ser resolvida

const p1 = new Promise ((resolve, reject)=> {
    setTimeout(() =>{
        console.log('P1 OK!')
    }, 2000)
})

const p2 = new Promise ((resolve, reject)=> {
    console.log('P2 OK!')
})

const p3 = new Promise ((resolve, reject)=> {
    console.log('P3 OK!')
})

const resolveAll = Promise.all([p1,p2,p3]).then((data) => {
    console.log(data)
})

//resolvendo varias promises com Race
const p4 = new Promise ((resolve, reject)=> {
    setTimeout(() =>{
        console.log('P4 OK!')
    }, 2000)
})

const p5 = new Promise ((resolve, reject)=> {
    console.log('P5 OK!')
})

const p6 = new Promise ((resolve, reject)=> {
    console.log('P6 OK!')
})

const resolveRace = Promise.race ([p4,p5,p6]).then((data) => {
    console.log(data)
})