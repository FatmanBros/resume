import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeGridComponent } from './resume-grid.component';

describe('ResumeGridComponent', () => {
  let component: ResumeGridComponent;
  let fixture: ComponentFixture<ResumeGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
