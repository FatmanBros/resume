import { Component, OnInit, Input } from '@angular/core';

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
  public value: string;

  constructor() { }

  ngOnInit(): void {
  }

}
