// Drugi cas
// Kombinacija tokova

import { combineLatest, interval, map, merge, take, zip } from "rxjs";

const tok1$ = interval(500).pipe(
    map(x=>"I->"+x),
    take(20)
)
//.subscribe(x => console.log(`I -> `, x));

const tok2$ = interval(1200).pipe(
    map(x => "II->"+x),
    take(6)
);

//ako se subscribujemo na oba dobijamo naizmenicno, ako zelimo da ih "sync-ujemo"

// combineLatest - krece da emituje tek kada sve prosledjeno ima bar jednu vrednost
// i kada bilo ko emituje zadnje vrednosti svih tokova

//combineLatest([tok1$, tok2$])
//.subscribe((vals: [string, string])=> {
    //    console.log(vals);
//});

// zip - emituje tek kada se svi tokovi promene
//zip([tok1$, tok2$])
//.subscribe((vals: [string, string])=> {
//    console.log(vals);
//});

// merge - vise toka spaja u 1
merge(tok1$, tok2$) // nema zagrade, ne prima niz
.subscribe((val)=> {
    console.log(val);
});

// Ima ih jos puno, na:
// https://rxjsmarbles.dev/combineLatest