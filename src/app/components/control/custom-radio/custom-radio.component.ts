import { Component, OnInit, Input } from '@angular/core';
import { ListItem } from 'src/app/model/list-item';

@Component({
  selector: 'app-custom-radio',
  templateUrl: './custom-radio.component.html',
  styleUrls: ['./custom-radio.component.scss']
})
export class CustomRadioComponent implements OnInit {

  @Input()
  public buttons: ListItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.buttons[0].isActive = true;
  }

  public selected: ListItem;
  public onClick(button: ListItem) {
    this.selected = button;
  }
}
