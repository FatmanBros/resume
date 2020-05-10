import { Component, OnInit, Input, Injector, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseControlComponent } from '../base-control.component';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent extends BaseControlComponent implements OnInit {

  @Input()
  public label: string;

  @Input()
  public placeholder: string;

  @Input()
  public control: FormControl;

  /**
   * テキストボックスの幅(rem)<br>
   */
  @Input()
  public width_rem: number = 15;

  /**
   * テキストボックスの幅(per)<br>
   */
  @Input()
  public width_per: number;

  public style: any;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.style = {
      width: this.width_per ? this.width_per + '%' : this.width_rem + 'rem',
    }
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
