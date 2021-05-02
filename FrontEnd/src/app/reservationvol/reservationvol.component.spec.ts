import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationvolComponent } from './reservationvol.component';

describe('ReservationvolComponent', () => {
  let component: ReservationvolComponent;
  let fixture: ComponentFixture<ReservationvolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationvolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationvolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
