// Drugi cas
import { debounceTime, filter, fromEvent, map, sampleTime, switchMap } from "rxjs";

const API_URL = "http://localhost:3001/movies";

function displayMouseCoords(){
    fromEvent(document, "mousemove").pipe(
        sampleTime(500), // na svakih 500ms, za optimizaciju
        map((mouseEvent: Event) => {
            if(!(mouseEvent instanceof MouseEvent)) return null;
            // ts trazi neku proveru, ne moze gore direktno MouseEvent
            //moglo je i const mEvent = (evt as MouseEvent), pa koristis mEvent
            return {
                x: mouseEvent.x,
                y: mouseEvent.y
            };
        })
    )
    .subscribe(coords => {
        console.log(coords);
    });
};


function getMovies(ime: String){
    return fetch(API_URL + `?title_contains=${ime}`).then(resp => {
            if(resp.ok){
                return resp.json();
            }
            else{
                return null;
            }
    });
}

function createSuggestBox(){
    const el = document.createElement("input");
    el.type= "text";
    document.body.appendChild(el);
    //sada ce tok da bude text koji se stavlja u tekstualno polje
    fromEvent(el, "input").pipe(
        debounceTime(300), // salje zahtev tek kada prestanemo da kucamo, optimizacija
        map((ev: Event)=>
            ((ev as InputEvent).target as HTMLInputElement).value
        ),
        filter((x: string )=> x.length >2), // za optimizaciju, da ne salje slovo, dva
        switchMap((text: string) => getMovies(text))

        // Profesor je drugacije radio malo, imao je interfejs za Movie(fajl movie.interface.ts), pa je dodao:
        // map((movies : Movie[])=> movies[0])
        // filter((movie: Movie)=> typeof(movie) !== null)

    ).subscribe(
        (filmovi) => console.log("Filmovi:", filmovi)
    );
}


createSuggestBox();
//displayMouseCoords();