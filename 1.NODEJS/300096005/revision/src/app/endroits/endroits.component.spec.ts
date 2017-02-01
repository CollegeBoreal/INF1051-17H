/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EndroitsComponent } from './endroits.component';

describe('EndroitsComponent', () => {
  let component: EndroitsComponent;
  let fixture: ComponentFixture<EndroitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndroitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndroitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
