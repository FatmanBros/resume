import { Injectable } from '@angular/core';
import { Resume } from '../model/resume';
import { Subject } from 'rxjs';
import { DateUtility } from '../utility/date-utility';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor() { }
  
  /**
   * 開始年月
   */
  public getTermFrom(): Date {
    // TODO: リクエスト
    return DateUtility.getSubYearDate(10);
  }

  /**
   * 終了年月
   */
  public getTermTo(): Date {
    // TODO:
    return DateUtility.addMonths(new Date(), 6)
  }

  /**
   * 履歴選択状態変更用
   */
  public resume$ = new Subject<Resume>();
  public setResume(resume: Resume) {
    this.resume$.next(resume);
  }
}
