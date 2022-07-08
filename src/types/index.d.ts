import type { defaultCompareFn } from '../utils'

export enum Compare {
  LESS = -1,
  EQUAL,
  MORE,
}

export type ICompareFn = typeof defaultCompareFn

export interface ILinkListOptions<T = unknown> {
  items?: T[]
  compareFn?: ICompareFn
}
