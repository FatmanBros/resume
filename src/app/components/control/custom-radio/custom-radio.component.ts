import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ListItem } from 'src/app/model/list-item';

@Component({
  selector: 'app-custom-radio',
  templateUrl: './custom-radio.component.html',
  styleUrls: ['./custom-radio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomRadioComponent implements OnInit {

  @Input()
  public buttons: ListItem[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }

  public selected: ListItem;
  public onClick(button: ListItem) {
    this.selected = button;
  }
}
