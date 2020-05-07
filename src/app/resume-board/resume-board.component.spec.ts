import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeBoardComponent } from './resume-board.component';

describe('ResumeBoardComponent', () => {
  let component: ResumeBoardComponent;
  let fixture: ComponentFixture<ResumeBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
