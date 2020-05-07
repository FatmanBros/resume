export class StringUtility {

  /**
   * 桁数分ゼロ埋め
   * 
   * @param value 
   */
  public static zeroPadding(value: number, digit: number) {
    let zeroStr = [digit].map(() => '0').join();
    return (zeroStr + value).slice(-digit);
  }
}