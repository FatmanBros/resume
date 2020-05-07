import { Component, OnInit, Injector, Input } from '@angular/core';
import { BaseComponent } from '../common/base/base.component';
import { Resume } from '../model/resume';
import { DateUtility } from '../utility/date-utility'

@Component({
  selector: 'app-resume-grid',
  templateUrl: './resume-grid.component.html',
  styleUrls: ['./resume-grid.component.scss']
})
export class ResumeGridComponent extends BaseComponent {

  /**
   * 期間 From <br>
   * デフォルト 7年前
   */
  @Input()
  public termFrom: Date = DateUtility.getSubYearDate(7);

  /**
   * 期間 To <br>
   * デフォルト 半年先
   */
  @Input()
  public termTo: Date = DateUtility.addMonths(new Date(), 6);

  public term: { year: string, month: string }[];

  // TODO: 履歴のサーバー取得処理
  public resumes: Resume[] = [];

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.setTerm();
  }

  private setTerm() {
    let d = new Date(this.termFrom);
    let end = DateUtility.getYearMonth(this.termTo);

    this.term = [];
    while (DateUtility.getYearMonth(d) !== end) {
      this.term.push({
        year: '' + d.getFullYear(),
        month: '' + (d.getMonth() + 1),
      })
      d = DateUtility.addMonths(d, 1);
    }
  }

  /**
   * 履歴を追加
   */
  public addResumeBoard($event) {
    this.resumes.push(new Resume());
  }
}
