import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDropdownComponent } from './icon-dropdown.component';

describe('IconDropdownComponent', () => {
  let component: IconDropdownComponent;
  let fixture: ComponentFixture<IconDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
