import { from, switchMap, take, filter, interval, map, range } from "rxjs";

const API_URL = "http://localhost:3001/movies";

// range - observable, tok podataka
// pipe - za transformaciju, tu redjas operatore
// subscribe - ono sto ce da se izvrsi
range(0, 100).pipe(
    map(x=> x*2),
    filter(x=> x < 30)
).subscribe(x=>{
    console.log(`x = `, x);
});

function getMovie(id : number){
    return from( // from pravi observable (tok) od promise-a
        fetch(API_URL + "/" + id).then(resp => {
            if(resp.ok){
                return resp.json(); // json() - od jsona pravi objekat
            }
            else{
                console.log("Greska, ne postoji taj film.");
            }
        })
    );
}


// interval - timer koji se ponavlja, na svakih x miisekundi
interval(1000).pipe(
    take(10), // 10 puta izvrsi
    map(x => x+1),
    switchMap(x=> getMovie(x)) // gleda na ovo sa api-a kao tok
).subscribe(x => console.log(x));
