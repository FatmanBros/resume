import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '../common/base/base.component';
import { Resume } from '../model/resume';

@Component({
  selector: 'app-resume-grid',
  templateUrl: './resume-grid.component.html',
  styleUrls: ['./resume-grid.component.scss']
})
export class ResumeGridComponent extends BaseComponent {

  // TODO: 履歴のサーバー取得処理
  public resumes: Resume[] = [];
  
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

  /**
   * 履歴を追加
   */
  public addResumeBoard($event) {
    this.resumes.push(new Resume());
  }
}
