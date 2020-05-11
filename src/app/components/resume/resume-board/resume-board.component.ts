import { Component, OnInit, Input, OnDestroy, Injector, ChangeDetectionStrategy } from '@angular/core';
import { BaseComponent } from '../../common/base/base.component';
import { Resume } from 'src/app/model/resume';
import { Subscription } from 'rxjs';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-resume-board',
  templateUrl: './resume-board.component.html',
  styleUrls: ['./resume-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResumeBoardComponent extends BaseComponent implements OnInit, OnDestroy {

  public resume: Resume;

  /**
   * 各種emitter処理のサブスクリプションを保持する  
   * 保持されたサブスクリプションはDestoryで破棄される  
   */
  protected subscription: Subscription[] = [];

  /**
   * 付属情報
   */
  public experiences: FormGroup;

  /**
   * 工程用リストアイテム
   */
  public codeList: any;

  constructor(
    injector: Injector,
    private formBuilder: FormBuilder,
  ) {
    super(injector)
  }

  ngOnInit() {
    // 履歴の選択需要
    this.subscription.push(
      this.resumeService.resume$.subscribe(resume => {
        this.resume = resume;
        this.detector.detectChanges();
      })
    );

    // 各種リストアイテムの取得
    this.getListItems();
  }

  ngOnDestroy(): void {
    // サブスクリプション開放
    this.subscription.forEach(val => {
      val.unsubscribe();
    })
  }

  /**
   * リストアイテム5
   */
  public getListItems() {
    this.experiences = this.formBuilder.group({});
    this.codeService.getCode().subscribe(res => {
      this.codeList = Object.keys(res).map(key => {
        return { key: key, value: res[key] }
      });
      Object.keys(res).forEach(key => {
        this.experiences.addControl(key, new FormControl([]))
      })
    });
  }

  /**
   * 変更検知
   */
  public onChange() {
    this.resumeService.changeResume();
  }
}
