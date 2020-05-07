import { Component, OnInit } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent extends IconComponent {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
