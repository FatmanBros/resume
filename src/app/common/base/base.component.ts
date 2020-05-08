import { IconConstants } from 'src/app/constants/icon-constants';
import { Injector, ChangeDetectorRef } from '@angular/core';
import { ResumeService } from 'src/app/service/resume.service';

export abstract class BaseComponent {
  /** アイコンコンスタント */
  public iconConstants = IconConstants;

  /**
   * 履歴サービス
   */
  public resumeService: ResumeService;

  public detector: ChangeDetectorRef;
  
  constructor(injector: Injector) {
    // 履歴サービス取得
    this.resumeService = injector.get(ResumeService);

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