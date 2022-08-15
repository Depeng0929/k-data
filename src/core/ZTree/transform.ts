import type { Nullable } from '@depeng9527/tools'
import { equal } from '@depeng9527/tools'
import type { ITreeListITem, RawListItem } from './type'

interface IZTreeOptions<K extends string, P extends string>{
  keyName?: K
  parentKeyName?: P
  rootVal?: Nullable<number | string>
}

export function transformZTree<K extends string, P extends string>(list: RawListItem<K, P>[], options?: IZTreeOptions<K, P>) {
  const { keyName = 'id', parentKeyName = 'pid', rootVal = 0 } = options || {}

  const result: ITreeListITem<K, P>[] = []
  const hashMap: Record<string | number, ITreeListITem<K, P>> = {}

  for (let i = 0; i < list.length; i++) {
    const item = list[i]

    const id = item[keyName]
    const pid = item[parentKeyName]

    hashMap[id] = {
      ...item,
      children: [],
    }

    if (equal(pid, rootVal)) {
      result.push(hashMap[id])
    }
    else {
      if (!hashMap[pid]) {
        hashMap[pid] = {
          children: [],
        } as any
      }
      hashMap[pid].children.push(hashMap[id])
    }
  }

  return result
}
