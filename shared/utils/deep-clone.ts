// 深拷贝
export default function deepClone (target: any): any {
  if (typeof target === 'object') {
    if (Array.isArray(target)) {
      const result = []
      for (const i in target) {
        result.push(deepClone(target[i]))
      }
      return result
    } else if (target === null) {
      return null
    } else if (target.constructor === RegExp) {
      return target
    } else {
      const result: any = {}
      for (const i in target) {
        result[i] = deepClone(target[i])
      }
      return result
    }
  } else {
    return target
  }
}
