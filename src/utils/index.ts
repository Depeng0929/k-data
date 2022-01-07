import { Compare } from '../types/index.d'

export function isPlainObject(val: unknown) {
  return Object.prototype.toString.call(val) === '[object Object]'
}

export function defaultCompareFn(a: any, b: any): Compare {
  if (a === b)
    return 0

  return a < b ? -1 : 1
}

export function defaultSwap(arr: any[], a: number, b: number) {
  const tmp = arr[a]
  arr[a] = arr[b]
  arr[b] = tmp
}

export {
  deepClone,
} from '@depeng9527/tools'
