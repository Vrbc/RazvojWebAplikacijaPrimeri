import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftsList } from './aircrafts-list';

describe('AircraftsList', () => {
  let component: AircraftsList;
  let fixture: ComponentFixture<AircraftsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AircraftsList],
    }).compileComponents();

    fixture = TestBed.createComponent(AircraftsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
