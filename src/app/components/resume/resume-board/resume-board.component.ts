import { Component, OnInit, Input, OnDestroy, Injector } from '@angular/core';
import { BaseComponent } from '../../common/base/base.component';
import { Resume } from 'src/app/model/resume';
import { Subscription } from 'rxjs';
import { ListItem } from 'src/app/model/list-item';

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

  /**
   * 工程用リストアイテム
   */
  public codeList: { [key: string]: ListItem[] };

  constructor(
    injector: Injector
  ) {
    super(injector)
  }

  ngOnInit() {
    // 履歴の選択需要
    this.subscription.push(
      this.resumeService.resume$.subscribe(resume => {
        this.resume = resume;
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
    this.codeService.getCode().subscribe(res => {
      this.codeList = res;
    });
  }

  /**
   * 変更検知
   */
  public onChange() {
    this.resumeService.changeResume();
  }
}
