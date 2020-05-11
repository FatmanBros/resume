import { Component, OnInit, Input, ViewChild, Injector, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { BaseControlComponent } from '../base-control.component';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

  /**
   * 月変更で終了
   * 
   * @param date 
   */
  public monthSelected(date) {
    this.picker.close();
    this.control.setValue(date);
    this.change();
  }

  /**
   * 変更イベント
   */
  @Output()
  public onChange = new EventEmitter<null>();

  public change() {
    this.onChange.emit(null);
  }
}
