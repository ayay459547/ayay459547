/**
 * 工具
 */
export const useUtils = () => {
  /**
   * @author Caleb
   * @description 判斷 Object 是否存在屬性
   *              不包含原型鏈(Prototype Chain)上的屬性
   * @param {Object} obj 物件
   * @param {String} key 屬性
   * @returns {Boolean}
   */
  const hasOwnProperty = (obj: any, key: string): boolean => {
    try {
      /**
       * 新版寫法
       * Object.hasOwn 替代 Object.prototype.hasOwnProperty
       *
       * 瀏覽器支援:
       * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn#browser_compatibility
       */
      if (Object.hasOwn) return Object.hasOwn(obj, key)

      /**
       * 原版寫法 瀏覽器支援較佳
       * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
       */
      return Object.prototype.hasOwnProperty.call(obj, key)
    } catch (e) {
      console.warn(e)
      return false
    }
  }

  /**
   * @author Caleb
   * @description 判斷東西是否為空
   *
   * @modifiedBy Caleb
   * @modifiedDate 2024-09-30
   * @modifiedDescription 加強isEmpty判斷
   *
   * @param {*} value
   * @returns {Boolean}
   */
  const isEmpty = (value: any): value is null | undefined => {
    const valueType = Object.prototype.toString.call(value)

    switch (valueType) {
      case '[object Array]':
      case '[object String]':
        return value.length === 0
      case '[object Object]':
        for (const key in value) {
          if (hasOwnProperty(value, key)) return false
        }
        return true
      case '[object Set]':
      case '[object Map]':
        return value.size === 0
      case '[object Undefined]':
      case '[object Null]':
        return true
      case '[object Number]':
      case '[object BigInt]':
      case '[object Boolean]':
      case '[object Symbol]':
      case '[object Date]':
      default:
        return false
    }
  }

  return {
    hasOwnProperty,
    isEmpty
  }
}
