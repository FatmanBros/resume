import { StringUtility } from './string-utility';

export class DateUtility {

  public static getDate() {

  }

  /**
   * YYYY/MM形式で返却する
   * 
   * @param date 
   */
  public static getYearMonth(date: Date): string {
    return date.getFullYear() + '/' + StringUtility.zeroPadding(date.getMonth(), 2);
  }

  /**
   * 本日日付から指定した年数を減算した日付を取得する。
   * 
   * @param year 
   */
  public static getSubYearDate(year: number) {
    const date = new Date();
    date.setFullYear(date.getFullYear() - year);
    return date;
  }

  /**
   * 月の加算
   * 
   * @param date 
   * @param months 
   */
  public static addMonths(date, months) {
    var resultDate = new Date(date.getTime());
    resultDate.setMonth(date.getMonth() + months);
    return resultDate;
  }

  /**
   * 日付間の月数を取得
   * 
   * @param d1 
   * @param d2 
   */
  public static monthDiff(d1: Date, d2: Date): number {
    let months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    return Math.abs(months);
  }
}