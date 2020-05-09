import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
    this.style = {
      width: this.width_per ? this.width_per + '%' : this.width_rem + 'rem',
    }
  }

}
