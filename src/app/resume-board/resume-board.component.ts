import { Component, OnInit, Input, OnDestroy, Injector } from '@angular/core';
import { Resume } from '../model/resume';
import { ResumeService } from '../service/resume.service';
import { Subscription } from 'rxjs';
import { BaseComponent } from '../common/base/base.component';

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
}
