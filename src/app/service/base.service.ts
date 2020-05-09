import { Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class BaseService {
  
  /**
   * httpリクエスト用クライアント
   */
  public http: HttpClient;

  constructor(injector: Injector) {
    this.http = injector.get(HttpClient);
  }

  public httpGet(prm: any) {
    // this.http.get(prm)
  }

  public httpPost(prm: any) {
    // this.http.post(prm);
  }
}