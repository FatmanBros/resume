import { Component, OnInit, Injector, Input, ElementRef } from '@angular/core';
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

  /**
   * グリッドの開始位置
   */
  public basePostion: number = 0;

  /**
   * 年リスト
   */
  public years: { year: string, count: number }[];

  /**
   * 月リスト
   */
  public month: { year: string, month: string, position: number }[];

  // TODO: 履歴のサーバー取得処理
  public resumes: Resume[] = [];

  /**
   * セルのサイズ
   */
  public cellWidth: 19;

  constructor(
    injector: Injector,
    private elementRef: ElementRef
  ) {
    super(injector);
  }

  ngOnInit(): void {
    // 年リスト作成
    this.setYear();
    // 月リスト作成
    this.setTerm();
  }

  ngAfterViewInit() {
    this.basePostion = this.elementRef.nativeElement.getBoundingClientRect();
  }

  /**
   * 年リスト作成
   */
  private setYear() {
    this.years = [];

    let d = new Date(this.termFrom);
    let end = DateUtility.getYearMonth(this.termTo);
    let obj;
    while (DateUtility.getYearMonth(d) !== end) {
      if (!obj || obj.year !== d.getFullYear()) {
        obj = { year: d.getFullYear(), count: 0 };
        this.years.push(obj);
      }
      // カウントアップ
      obj.count += 1;
      d = DateUtility.addMonths(d, 1);
    }
  }

  /**
   * 月リスト作成
   */
  private setTerm() {
    let d = new Date(this.termFrom);
    let end = DateUtility.getYearMonth(this.termTo);

    this.month = [];
    let i = 0;
    while (DateUtility.getYearMonth(d) !== end) {
      this.month.push({
        year: '' + d.getFullYear(),
        month: '' + (d.getMonth() + 1),
        position: this.cellWidth * i,
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
