import { defaultCompareFn } from '../utils'

export enum Compare {
  LESS = -1,
  EQUAL,
  MORE
}

export type ICompareFn = typeof defaultCompareFn
