import { Experiences } from './experiences';
import { DateUtility } from '../utility/date-utility';

export class Resume {

  constructor() {
    this.title = "";
    this.summary = "";
    this.details = "";
    this.termFrom = new Date();
    this.termFrom.setDate(1);
    this.termTo = DateUtility.addMonths(new Date(), 1);
    this.termTo.setDate(1);
    this.experiences = new Experiences();
  }

  /**
   * タイトル
   */
  public title: string;

  /**
   * 概要
   */
  public summary: string;

  /**
   * 詳細
   */
  public details: string;

  /**
   * 開始　年月<br>
   */
  public termFrom: Date;

  /**
   * 終了　年月<br>
   */
  public termTo: Date;

  /**
   * 区分
   */
  public experiences: Experiences;
}