import { Component, OnInit, Input, OnDestroy, Injector } from '@angular/core';
import { BaseComponent } from '../../common/base/base.component';
import { Resume } from 'src/app/model/resume';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-resume-board',
  templateUrl: './resume-board.component.html',
  styleUrls: ['./resume-board.component.scss']
})
export class ResumeBoardComponent extends BaseComponent implements OnInit, OnDestroy {

  public resume: Resume;

  /**
   * 各種emitter処理のサブスクリプションを保持する  
   * 保持されたサブスクリプションはDestoryで破棄される  
   */
  protected subscription: Subscription[] = [];

  constructor(
    injector: Injector
  ) {
    super(injector)
  }

  ngOnInit(): void {
    // 履歴の選択需要
    this.subscription.push(
      this.resumeService.resume$.subscribe(resume => {
        this.resume = resume;
      })
    );
  }

  ngOnDestroy(): void {
    // サブスクリプション開放
    this.subscription.forEach(val => {
      val.unsubscribe();
    })
  }

  /**
   * 変更検知
   */
  public onChange() {
    this.resumeService.changeResume();
  }
}
