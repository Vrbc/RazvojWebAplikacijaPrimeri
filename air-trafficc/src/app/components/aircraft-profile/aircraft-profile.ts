import { Component, input, signal } from '@angular/core';

// @ - dekorator u typescryptu, metapodaci o funkciji ili klasi
// Ovde Component sadrzi objekat sa nekoliko property-a, opisuje ovu komponentu
// Npr ako zelimo da ga dodamo u html, dodamo ga kao <app-aircraft-profile>
@Component({
  selector: 'app-aircraft-profile',
  imports: [],
  templateUrl: './aircraft-profile.html',
  styleUrl: './aircraft-profile.css',
})
export class AircraftProfile {
  // signal je vratar, objekat, oko nekog objekta kojeg zelis da pratis/menjas


  // umesto signal moze da stoji input ili output
  aircraftId = input<String>('XYZ');
  aircraftType = input<String>('UFO');
  speed = input<Number>(0);
  attitude = input(0);
}
