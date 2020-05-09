import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NONE_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {

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

  constructor() { }

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
