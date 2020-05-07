import { IconConstants } from 'src/app/constants/icon-constants';
import { Injector } from '@angular/core';

export abstract class BaseComponent {
  /** アイコンコンスタント */
  public iconConstants = IconConstants;
  
  constructor(injector: Injector) {
    
  }
}