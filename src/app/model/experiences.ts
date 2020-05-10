import { FormControl } from '@angular/forms';

export class Experiences {

  constructor() {
    this.project = new FormControl([]);
    this.langages = new FormControl([]);
    this.managements = new FormControl([]);
    this.tools = new FormControl([]);
    this.processes = new FormControl([]);
  }

  /**
   * プロジェクト
   */
  public project: FormControl;

  /**
   * 言語
   */
  public langages: FormControl;

  /**
   * 管理ツール
   */
  public managements: FormControl;

  /**
   * ツール
   */
  public tools: FormControl;

  /**
   * 工程
   */
  public processes: FormControl;
}