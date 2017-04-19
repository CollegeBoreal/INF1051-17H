import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNewC0mponentComponent } from './my-new-c0mponent.component';

describe('MyNewC0mponentComponent', () => {
  let component: MyNewC0mponentComponent;
  let fixture: ComponentFixture<MyNewC0mponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNewC0mponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNewC0mponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
