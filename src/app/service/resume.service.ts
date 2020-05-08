import { Injectable } from '@angular/core';
import { Resume } from '../model/resume';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor() { }

  /**
   * 履歴選択状態変更用
   */
  public resume$ = new Subject<Resume>();
  public setResume(resume: Resume) {
    this.resume$.next(resume);
  }
}
