export class GridStyleConstants {
  public static iconHeigh = 32;

  /**
   * セルのサイズ
   */
  public static cellWidth = 19;
  public static defaultCellStyle = {
    'width': GridStyleConstants.cellWidth + 'px',
    'min-width': GridStyleConstants.cellWidth + 'px',
    'max-width': GridStyleConstants.cellWidth + 'px',
  }

  /**
   * 年ヘッダスタイル
   */
  public static yearHeight = 20;
  public static defaultYearStyle = {
    'height': GridStyleConstants.yearHeight + 'px',
    'min-height': GridStyleConstants.yearHeight + 'px',
    'max-height': GridStyleConstants.yearHeight + 'px',
  }

  /**
   * 月ヘッダスタイル
   */
  public static monthHeight = 30;
  public static defaultMonthHeaderStyle = Object.assign(GridStyleConstants.defaultCellStyle, {
    'height': GridStyleConstants.monthHeight + 'px',
    'min-height': GridStyleConstants.monthHeight + 'px',
    'max-height': GridStyleConstants.monthHeight + 'px',
  })

  /**
   * グリッド表示要レジュメ高さ取得
   */
  public static resumeHight = 30;
  public static defaultResumeStyle = {
    'height': GridStyleConstants.resumeHight + 'px',
    'min-height': GridStyleConstants.resumeHight + 'px',
    'max-height': GridStyleConstants.resumeHight + 'px',
  }

  /**
   * デフォルト開始位置 y
   */
  public static defaultTop = GridStyleConstants.yearHeight + GridStyleConstants.monthHeight + 1;
}