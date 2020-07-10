import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyBookingsPage } from './my-bookings.page';

describe('MyBookingsPage', () => {
  let component: MyBookingsPage;
  let fixture: ComponentFixture<MyBookingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBookingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyBookingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
