import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewMyBookingPage } from './view-my-booking.page';

describe('ViewMyBookingPage', () => {
  let component: ViewMyBookingPage;
  let fixture: ComponentFixture<ViewMyBookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMyBookingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewMyBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
