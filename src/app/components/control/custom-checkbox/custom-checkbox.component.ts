import { Component, OnInit, Input } from '@angular/core';
import { ListItem } from 'src/app/model/list-item';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.scss']
})
export class CustomCheckboxComponent implements OnInit {

  @Input()
  public label: string;
    
  @Input()
  public listItem: ListItem[] = [];

  @Input()
  public control: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

  public onClick(button: ListItem) {
    
  }
}
