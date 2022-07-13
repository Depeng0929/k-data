import type { defaultCompareFn } from '../utils'

export enum Compare {
  LESS = -1,
  EQUAL,
  MORE,
}

export type ICompareFn<T = unknown> = typeof defaultCompareFn<T>

export interface DefaultOptions<T = unknown> {
  items?: T[]
  compareFn?: ICompareFn
}
type IOptions<T = unknown> = Required <DefaultOptions<T>>
