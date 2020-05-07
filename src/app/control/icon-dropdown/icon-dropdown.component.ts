import { Component, OnInit } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-icon-dropdown',
  templateUrl: './icon-dropdown.component.html',
  styleUrls: ['./icon-dropdown.component.scss']
})
export class IconDropdownComponent extends IconComponent {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
