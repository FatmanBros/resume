import { Injector } from '@angular/core';
import { Message } from 'src/app/constants/message';

export class BaseControlComponent {
  public messages = Message

  constructor(injector: Injector) {
    
  }
}