import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BacktrackingComponent } from './backtracking.component';

describe('BacktrackingComponent', () => {
  let component: BacktrackingComponent;
  let fixture: ComponentFixture<BacktrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BacktrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BacktrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
