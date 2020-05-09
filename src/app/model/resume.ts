import { Experiences } from './experiences';
import { DateUtility } from '../utility/date-utility';
import { FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../validators/custom-validators';
import { ResumeService } from '../service/resume.service';

export class Resume {

  constructor(resumeService: ResumeService) {
    this.title = new FormControl("", [Validators.required]);
    this.summary = new FormControl("");
    this.details = new FormControl("");

    this.termFrom = new FormControl(new Date(), [Validators.required]);
    this.termFrom.value.setDate(1);

    this.termTo = new FormControl(DateUtility.addMonths(new Date(), 1), [Validators.required, CustomValidators.dateGreaterThan(this.termFrom)]);
    this.termTo.value.setDate(1);

    this.position = new FormControl("");
    this.experiences = new Experiences();
  }

  /**
   * タイトル
   */
  public title: FormControl;

  /**
   * 概要
   */
  public summary: FormControl;

  /**
   * 詳細
   */
  public details: FormControl;

  /**
   * 開始　年月<br>
   */
  public termFrom: FormControl;

  /**
   * 終了　年月<br>
   */
  public termTo: FormControl;

  /**
   * 担当
   */
  public position: FormControl;

  /**
   * 区分
   */
  public experiences: Experiences;
}