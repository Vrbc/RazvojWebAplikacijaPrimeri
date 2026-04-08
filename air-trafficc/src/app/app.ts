import { Component, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AircraftProfile } from "./components/aircraft-profile/aircraft-profile";
import { AircraftsList } from "./components/aircrafts-list/aircrafts-list";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AircraftProfile, AircraftsList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //protected readonly title = signal('air-trafficc');

  //signal je nalik na rxjs, mozemo da slusamo promenljivu i da je menjamo.
  title = signal<string>('r-w-a');

  counter = signal(0);

  increment(){
    this.counter.update((x)=> x+1);
  }

}
