export type RawListItem<K extends string, P extends string> = {
  [id in K]: string;
} & {
  [pid in P]: string;
} & Record<string, unknown>

export type ITreeListITem<K extends string, P extends string> = RawListItem<K, P> & {
  children: ITreeListITem<K, P>[]
}
