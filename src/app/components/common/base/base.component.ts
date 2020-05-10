import { IconConstants } from 'src/app/constants/icon-constants';
import { Injector, ChangeDetectorRef } from '@angular/core';
import { ResumeService } from 'src/app/service/resume.service';
import { Message } from 'src/app/constants/message';
import { CodeService } from 'src/app/service/code.service';

export abstract class BaseComponent {
  /** アイコンコンスタント */
  public iconConstants = IconConstants;

  /** メッセージ定数 */
  public messages = Message

  /**
   * 履歴サービス
   */
  public resumeService: ResumeService;

  /**
   * 区分値サービス
   */
  public codeService: CodeService;

  public detector: ChangeDetectorRef;

  constructor(injector: Injector) {
    // 履歴サービス取得
    this.resumeService = injector.get(ResumeService);

    // 区分値サービス取得
    this.codeService = injector.get(CodeService);

    // detectorを取得
    this.detector = injector.get(ChangeDetectorRef);
  }

  /**
   * 画面の変更を即時反映させる
   */
  public changeDetection() {
    this.detector.detectChanges();
  }
}