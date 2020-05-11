import { Component, OnInit, Injector, Input, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { BaseComponent } from '../../common/base/base.component';
import { DateUtility } from 'src/app/utility/date-utility';
import { Resume } from 'src/app/model/resume';
import { GridStyleConstants } from 'src/app/constants/grid-style-constants'
import { ObjectUtility } from 'src/app/utility/object-utility';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-resume-grid',
  templateUrl: './resume-grid.component.html',
  styleUrls: ['./resume-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResumeGridComponent extends BaseComponent {

  /**
   * 期間 From <br>
   * デフォルト 10年前
   */
  @Input()
  public termFrom: Date;

  /**
   * 期間 To <br>
   * デフォルト 半年先
   */
  @Input()
  public termTo: Date;

  /**
   * グリッドの開始位置
   */
  public basePostion: number = 0;

  /**
   * 年リスト
   */
  public years: { year: string, count: number, style: { [key: string]: string } }[];

  /**
   * 月リスト
   */
  public months: { year: string, month: string, position: number }[];

  /**
   * レジュメの表示位置設定
   */
  public displayResumes: { resume: Resume, style: { [key: string]: string } }[];


  // TODO: 履歴のサーバー取得処理
  public resumes: Resume[] = [];

  /**
   * 変更待受用
   */
  protected subscription: Subscription[] = [];

  /**
   * グリッドスタイル用定数
   */
  public styleConst = GridStyleConstants;


  constructor(
    injector: Injector,
    private elementRef: ElementRef
  ) {
    super(injector);
  }

  ngOnInit(): void {
    // 範囲取得
    this.termFrom = this.resumeService.getTermFrom();
    this.termTo = this.resumeService.getTermTo();
    // 年リスト作成
    this.setYear();
    // 月リスト作成
    this.setTerm();

    // 変更待受
    // 履歴の選択需要
    this.subscription.push(
      this.resumeService.changeResume$.subscribe(() => {
        this.resetResumes();
        this.detector.markForCheck();
      })
    );
  }

  ngOnDestroy(): void {
    // サブスクリプション開放
    this.subscription.forEach(val => {
      val.unsubscribe();
    })
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

    // 年リストのスタイル作成
    this.years.forEach(year => {
      let width = year.count * (this.styleConst.cellWidth + 1) - 1 + 'px';
      year.style = Object.assign(ObjectUtility.clone(this.styleConst.defaultYearStyle), {
        'width': width,
        'min-width': width,
        'max-width': width,
      })
    });
  }

  /**
   * 月リスト作成
   */
  private setTerm() {
    let d = new Date(this.termFrom);
    let end = DateUtility.getYearMonth(this.termTo);

    this.months = [];
    let i = 0;
    while (DateUtility.getYearMonth(d) !== end) {
      this.months.push({
        year: '' + d.getFullYear(),
        month: '' + (d.getMonth() + 1),
        position: (this.styleConst.cellWidth + 1) * i++,
      })
      d = DateUtility.addMonths(d, 1);
    }
  }

  /**
   * 履歴を追加
   */
  public addResumeBoard($event) {
    // 履歴を新規作成
    let newResume = new Resume();
    this.resumes.push(newResume);

    // 選択中の履歴を反映
    this.selectResume(newResume);

    // 表示位置を設定
    this.resetResumes();
  }

  /**
   * 履歴のグリッド表示位置を設定
   */
  public resetResumes() {
    this.displayResumes = [];
    this.resumes.forEach(resume => {
      // 側作成
      let res = {
        resume: resume,
        style: ObjectUtility.clone(this.styleConst.defaultResumeStyle),
      }

      // 開始位置を設定
      let x;
      this.months.forEach(month => {
        if (month.year !== '' + resume.termFrom.value.getFullYear()) {
          return;
        }
        if (month.month !== resume.termFrom.value.getMonth() + 1 + '') {
          return;
        }
        x = month.position;
      });
      res.style = Object.assign(res.style, { left: x + 'px' });

      // 幅を設定
      let w = (DateUtility.monthDiff(resume.termTo.value, resume.termFrom.value)) * this.styleConst.cellWidth - 2 + 'px';
      res.style = Object.assign(res.style, {
        width: w,
        'min-width': w,
        'max-width': w,
      });

      // 開始高さと高さを設定
      let heightpx = this.styleConst.monthHeight + 'px';
      res.style = Object.assign(res.style, {
        top: this.styleConst.defaultTop + 'px',
        height: heightpx,
        'min-height': heightpx,
        'max-height': heightpx,
      });

      this.displayResumes.push(res);
    })
  }


  public selectedResume: Resume;

  /**
   * 履歴の選択
   * 
   * @param event 
   */
  public selectResume(resume) {
    // 選択中の履歴を修正
    this.resumeService.setResume(resume);

    // 選択中の履歴を反映
    this.selectedResume = resume;
  }

  public dragging: any;
  public sx: number;
  /**
   * ドラッグ開始
   */
  public dragstart(event, disp) {
    this.sx = event.clientX;
    this.dragging = disp;
  }

  public dragover(event) {
    // 開始位置からの差分計算
    let diff = event.clientX - this.sx;
    // セル分のドラッグ検知

  }

  public drop(event) {
    // クリア
    this.sx = null;
    this.dragging = null;
  }
}
