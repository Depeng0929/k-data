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



## PriorityQueue

同`Queue`







## LinkList

| name      | type | description               | return        |
| --------- | ---- | ------------------------- | ------------- |
| size      | 属性 | 大小长度                  | number        |
| isEmpty   | 属性 | 是否为空                  | boolean       |
| getHead   | 方法 | 获取首节点                | INode \| null |
| print     | 方法 | 返回链表中元素            | T[]           |
| clear     | 方法 | 清除所有                  | void          |
| push      | 方法 | 添加                      | void          |
| insert    | 方法 | 向索引处添加              | Boolean       |
| getNodeAt | 方法 | 返回指定索引处node节点    | INode \| null |
| removeAt  | 方法 | 移除指定索引处节点        | T \| null     |
| indexOf   | 方法 | 返回指定索引处节点        | number \| -1  |
|           |      |                           |               |
| remove    | 方法 | 删除指定val的节点(第一个) | T \|null      |



## DoublyLinkList

同LinkList，新增如下

| name    | type | description            | return        |
| ------- | ---- | ---------------------- | ------------- |
| swap    | 方法 | 交换双向链表中两个严肃 | number        |
| getTail | 方法 | 获取尾节点             | DoublyNode<T> |



## Tree
注意此tree不是传统意义上的数据结构，而是前端业务常用的value, children树形结构。

| name               | type | description          | return  |
| ------------------ | ---- | -------------------- | ------- |
| level              | 属性 | 当前树的深度         | number  |
| add                | 方法 | 添加节点             | Tree<T> |
| remove             | 方法 | 删除当前节点         | void    |
| isLeaf             | 方法 | 是否是treeNode类     | boolean |
| excute             | 方法 | 深度优先执行callback | void    |
| breadthFirstSearch | 方法 | 广度优先执行callback |         |



## Graph

| name               | type | description      | return |
| ------------------ | ---- | ---------------- | ------ |
| addVertex          | 方法 | 添加图的各个顶点 |        |
| addEdge            | 方法 | 建立顶点之间关系 |        |
| breadthFirstSearch | 方法 | 广度遍历         | T      |
| depthFirstSearch   | 方法 | 深度遍历         | T      |
|                    |      |                  |        |
