import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutFrameComponent } from './out-frame.component';

describe('OutFrameComponent', () => {
  let component: OutFrameComponent;
  let fixture: ComponentFixture<OutFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
