import { Compare } from '../types/index.d'

export function isPlainObject(val: unknown) {
  return Object.prototype.toString.call(val) === '[object Object]'
}

export function deepClone(val: any) {
  if (!isPlainObject(val) && !Array.isArray(val))

    return val

  const result: any = Array.isArray(val) ? [] : {}
  for (const key in val)
    result[key] = deepClone(val[key])

  return result
}

export function defaultCompareFn(a: any, b: any): Compare {
  if (a === b)
    return 0

  return a < b ? -1 : 1
}
