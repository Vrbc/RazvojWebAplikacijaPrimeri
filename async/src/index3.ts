// Drugi cas

import { interval, Observable, Subject, takeUntil } from "rxjs";


// Kontrolni tokovi najcesce imaju sufiks $
const tok$ = new Subject(); // Subject je tok kome mi kazemo sta cemo da emituje
// U angularu se koristi za emitovanje Eventova, pomocu klase izvedene iz Subject - EventEmitter
tok$.subscribe(x=>console.log(`vrednost = `, x));


function createStream(controlStream$: Observable<any>) {
    return interval(500).pipe(
        takeUntil(controlStream$)
    );
}

// U angularu cemo imati glavni i kontrolni tok podataka. Glavni su eventi itd, 
// a kontrolni cim se zatvori gasi sve subscriptione na tok.
// Za svaki tok u angularu uvek stavljamo kontrolni tok: controlStream


function createCancelButton(action: Function){
    const btn = document.createElement("button");
    btn.innerText = "Cancel";
    document.body.appendChild(btn);
    btn.onclick = () => {
        action();
        btn.disabled = true;
    }
}

tok$.next(100);
tok$.next(200);
//tok$.complete(); // ovo gasi tokove

createCancelButton( () => { // funkcije prvog reda => funckije kao parametar/argument/povratna vrednost...  
    setTimeout(()=> {
        tok$.next(null);
        tok$.complete();
         console.log("Canceled");
    }, 1000);
});

createStream(tok$).subscribe(x => {
    console.log("stream: ", x);
})