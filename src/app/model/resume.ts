import { Experiences } from './experiences';

export class Resume {

  constructor() {
    this.title = "";
    this.summary = "";
    this.details = "";
    this.termFrom = new Date();
    this.termTo = new Date();
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
   * 開始　年月
   */
  public termFrom: Date;

  /**
   * 終了　年月
   */
  public termTo: Date;

  /**
   * 区分
   */
  public experiences: Experiences;
}