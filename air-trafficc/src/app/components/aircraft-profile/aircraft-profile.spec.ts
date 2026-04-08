import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftProfile } from './aircraft-profile';

describe('AircraftProfile', () => {
  let component: AircraftProfile;
  let fixture: ComponentFixture<AircraftProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AircraftProfile],
    }).compileComponents();

    fixture = TestBed.createComponent(AircraftProfile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
