export class ListItem {
  
  /**
   * 表示ラベル
   */
  public label: string;

  /**
   * 区分値
   */
  public value: string;

  /**
   * 色
   */
  public color?: string;

  /**
   * オプション
   */
  public option?: any;

  /**
   * 選択状態
   */
  public isSelected?: boolean = false;

  /**
   * 追加項目
   */
  public isAdded?: boolean;
}