import * as cloneDeep from 'lodash/cloneDeep';

export class ObjectUtility {

  /**
   * オブジェクトのディープコピー
   * 
   * @param obj 
   */
  public static clone(obj) {
    return cloneDeep(obj);
  }
}