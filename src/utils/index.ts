import { Compare } from '../types'

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
    return Compare.EQUAL

  return a < b ? Compare.LESS : Compare.MORE
}
