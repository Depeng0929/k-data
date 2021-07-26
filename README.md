# k-data
JS常用数据结构实现。

## Install
```
yarn add @depeng9527/k-data
```

## Stack

| name    | type | description        | return  |
| ------- | ---- | ------------------ | ------- |
| size    | 属性 | 栈的大小长度       | number  |
| isEmpty | 属性 | 栈是否为空         | boolean |
| push    | 方法 | 添加               | void    |
| pop     | 方法 | 移出栈第一个元素   | T       |
| clear   | 方法 | 清除栈中所有       | void    |
| peek    | 方法 | 返回栈中第一个元素 | T       |



## Queue

| name    | type | description    | return  |
| ------- | ---- | -------------- | ------- |
| size    | 属性 | 大小长度       | number  |
| isEmpty | 属性 | 是否为空       | boolean |
| enqueue | 方法 | 添加           | void    |
| dequeue | 方法 | 出列           | T       |
| clear   | 方法 | 清除所有       | void    |
| peek    | 方法 | 返回第一个元素 | T       |



## LinkList

| name         | type | description               | return        |
| ------------ | ---- | ------------------------- | ------------- |
| size         | 属性 | 大小长度                  | number        |
| isEmpty      | 属性 | 是否为空                  | boolean       |
| getHead      | 方法 | 获取首节点                | INode \| null |
| print        | 方法 | 返回链表中元素            | T[]           |
| clear        | 方法 | 清除所有                  | void          |
| push         | 方法 | 添加                      | void          |
| insert       | 方法 | 向索引处添加              | Boolean       |
| getElementAt | 方法 | 返回指定索引处node节点    | INode \| null |
| removeAt     | 方法 | 移除指定索引处节点        | T \| null     |
| indexOf      | 方法 | 返回指定索引处节点        | INode \| null |
| sort         | 方法 | 链表排序                  | Void          |
| remove       | 方法 | 删除指定val的节点(第一个) | T \|null      |
