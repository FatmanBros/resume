import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  @Input()
  public control: FormControl;

  @Input()
  public placeholder: string;

  constructor() { }

  ngOnInit(): void {
  }


  public monthSelected(event) {
    event
  }
}
