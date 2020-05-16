export class Validators {
  public static isNullOrLengthZero(prm) {
    return prm == null || prm == undefined || prm.length === 0
  }
}