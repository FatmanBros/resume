import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { DateUtility } from '../utility/date-utility';

export class CustomValidators {

  /**
   * 期間内に収まっているか確認する。
   * 
   * @param d1 
   * @param d2 
   */
  public static term(d1: Date, d2: Date) {
    return (c: AbstractControl) => {
      if (DateUtility.monthDiff(c.value, d1) < 0) {
        return { term: true };
      }
      if (DateUtility.monthDiff(c.value, d2) >= 0) {
        return { term: true };
      }
      return null;
    }
  }

  /**
   * コントロール同士の前後関係比較
   * 
   * @param control 
   */
  public static dateGreaterThan(control: AbstractControl) {
    return (c: AbstractControl) => {
      let res = c.value > control.value ? null : { dateGreaterThan: true };
      return res;
    }
  }
}