import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MybookedItemComponent } from './mybooked-item.component';

describe('MybookedItemComponent', () => {
  let component: MybookedItemComponent;
  let fixture: ComponentFixture<MybookedItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MybookedItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MybookedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
