import { equal } from '@depeng9527/tools'
import type { Compare } from '../types'

export function defaultCompareFn<T = unknown>(a: T, b: T): Compare {
  if (equal(a, b))
    return 0

  return a < b ? -1 : 1
}

export function defaultSwap(arr: any[], a: number, b: number) {
  const tmp = arr[a]
  arr[a] = arr[b]
  arr[b] = tmp
}
