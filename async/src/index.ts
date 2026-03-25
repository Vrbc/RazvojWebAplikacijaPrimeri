console.log("hello world");

function getRandomNumber() : Promise<number> {
    // promise u konstruktoru ima lambda funckiju
    return new Promise((resolve)=> {
        
        setTimeout(()=> {
            const rand: number = Math.round(Math.random()*10);
            resolve(rand);
        }, 1000);
    })
}// treeshaking - ako nigde ne pozovoes fucnkiju on je nece prevesti u js, nece se videtu u browseru, to radi vite


console.log("Prvi broj je: ", await getRandomNumber());


getRandomNumber().then((x: number)=> console.log("Drugi broj je ", x));

let magicNum = 0;
getRandomNumber().then((x: number)=> magicNum=x);

console.log("Magic num je: ", magicNum); // ovo nece da radi - ispisace 0, jer magicNum dobija vrednost u then, odnosno kad se pozove resolve
// ovo je razlog zasto se koristi async i await, da ne bi sve islo u then-ovima



//let num1 = await getRandomNumber();
//let num2 = await getRandomNumber();
//let num3 = await getRandomNumber();
// console.log("Brojevi su: ", num1, num2, num3); // svi se izvrsavaju odjednom, jedan za drugim


let num1 = getRandomNumber();
let num2 = getRandomNumber();
let num3 = getRandomNumber();
Promise.all([num1, num2, num3]).then(x => { // paralelno se izvrsavaju sva 3, trajace onoliko koliko je najduzi promise trajao!
    console.log("Paralelno izvrsenje, brojevi su: ", x);
})
