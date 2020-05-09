import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  @Input()
  public date: Date;

  @Input()
  public placeholder: string;

  constructor() { }

  ngOnInit(): void {
  }


  public monthSelected(event) {
    event
  }
}
