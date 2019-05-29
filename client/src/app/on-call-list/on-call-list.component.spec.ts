import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnCallListComponent } from './on-call-list.component';

describe('OnCallListComponent', () => {
  let component: OnCallListComponent;
  let fixture: ComponentFixture<OnCallListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnCallListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnCallListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
