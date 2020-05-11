import { Component, OnInit, Input, Injector, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseControlComponent } from '../base-control.component';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextareaComponent extends BaseControlComponent implements OnInit {

  @Input()
  public label: string;

  @Input()
  public placeholder: string;

  @Input()
  public control: FormControl;

  @Input()
  public rows: number = 10;

  @Input()
  public cols: number = 30;

  @Input()
  public width_rem: number = 20;

  @Input()
  public width_per: number;

  @Input()
  public max_height: number = 100;

  public outFrameStyle: any;
  public style: any;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.outFrameStyle = {
      width: this.width_per ? this.width_per + '%' : this.width_rem + 'rem',
      'max-height': this.max_height + '%',
    }
    this.style = {
      width: '100%',
    }
  }

}
