import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C3poCharmComponent } from './c3po-charm.component';

describe('C3poCharmComponent', () => {
  let component: C3poCharmComponent;
  let fixture: ComponentFixture<C3poCharmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C3poCharmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C3poCharmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
