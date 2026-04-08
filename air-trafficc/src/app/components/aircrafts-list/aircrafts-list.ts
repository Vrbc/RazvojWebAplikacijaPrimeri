import { Component, signal } from '@angular/core';
import { Aircraft } from '../../modules/aircraft.model';
import { AircraftProfile } from '../aircraft-profile/aircraft-profile';

@Component({
  selector: 'app-aircrafts-list',
  imports: [AircraftProfile],
  templateUrl: './aircrafts-list.html',
  styleUrl: './aircrafts-list.css',
})
export class AircraftsList {
  aircrafts = signal<Aircraft[]>([
    {
      aircraftId: 'RS2',
      aircraftType: 'Airbus',
      attitude: 0,
      speed: 20,
    },
    {
      aircraftId: 'RS3',
      aircraftType: 'Boeing',
      attitude: 10500,
      speed: 840,
    }
  ]);

}
