import { Component, OnInit, Input } from '@angular/core';
import { ListItem } from 'src/app/model/list-item';

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.scss']
})
export class CustomCheckboxComponent implements OnInit {

  @Input()
  public buttons: ListItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public onClick(button: ListItem) {
    button.isActive = !button.isActive;
  }
}
