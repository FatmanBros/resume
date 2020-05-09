import { Injectable, Injector } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CodeService extends BaseService {

  constructor(injector: Injector) {
    super(injector);
  }

  /**
   * 技術情報のリストを取得する
   */
  public getTechnique() {

  }

  /**
   * 工程情報のリストを取得する
   */
  public getProcess() {

  }

  /**
   * 言語のリストを取得する
   */
  public getLanguage() {

  }

  /**
   * ツールのリストを取得する
   */
  public getTool() {

  }
}
