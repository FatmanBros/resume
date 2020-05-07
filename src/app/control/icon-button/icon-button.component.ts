import { Component, OnInit, EventEmitter } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent extends IconComponent {

  public color = "black";

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  public clickEvent: EventEmitter<null> = new EventEmitter<null>();

  /**
   * アイコンクリック
   * 
   * @param event 
   */
  public onClick(event) {
    this.clickEvent.emit();
  }
}
