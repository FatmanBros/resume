import { Component, OnInit, Input, ViewChild, Injector } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { BaseControlComponent } from '../base-control.component';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent extends BaseControlComponent implements OnInit {

  @ViewChild('picker')
  public picker: MatDatepicker<Date>;

  @Input()
  public control: FormControl;

  @Input()
  public placeholder: string;

  @Input()
  public min: Date;

  @Input()
  public max: Date;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

  public monthSelected(date) {
    this.picker.close();
    this.control.setValue(date);
  }
}
