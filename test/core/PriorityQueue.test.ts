import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { PriorityQueue } from '../../src/index'

let queue = new PriorityQueue<number>()
function createPriorityQueue1() {
  queue = new PriorityQueue()
  queue.enqueue(0)
  queue.enqueue(1)
  queue.enqueue(2)
  queue.enqueue(3)
  return queue
}

function createPriorityQueue2() {
  queue = new PriorityQueue()
  queue.enqueue(1)
  queue.enqueue(3)
  queue.enqueue(0)
  queue.enqueue(2)
  return queue
}
beforeEach(() => {
  queue = new PriorityQueue()
})

afterEach(() => {
  queue.clear()
})

describe('queue', () => {
  it('size return the right value', () => {
    createPriorityQueue1()
    expect(queue.size).toEqual(4)
    queue.dequeue()
    expect(queue.size).toEqual(3)
    createPriorityQueue2()
    expect(queue.size).toEqual(4)
    queue.dequeue()
    expect(queue.size).toEqual(3)
    createPriorityQueue1()
    queue.dequeue()
    queue.dequeue()
    queue.dequeue()
    queue.dequeue()
    expect(queue.size).toEqual(0)
  })

  it('contains returns true for inserted elements', () => {
    createPriorityQueue1()
    for (let i = 0; i < 4; i++)
      expect(queue.contains(i)).toBeTruthy()

    expect(queue.contains(5)).toBeFalsy()
  })

  it('contains returns false for invalid elements', () => {
    createPriorityQueue1()
    expect(queue.contains(5)).toBeFalsy()
  })

  it('isEmpty returns true only if the queue contains no elements', () => {
    createPriorityQueue1()
    expect(queue.isEmpty).toBeFalsy()
    queue.dequeue()
    queue.dequeue()
    queue.dequeue()
    expect(queue.isEmpty).toBeFalsy()
    queue.dequeue()
    expect(queue.isEmpty).toBeTruthy()
  })

  it('peek returns the highest priority item', () => {
    createPriorityQueue1()
    expect(queue.peek()).toEqual(3)
    createPriorityQueue2()
    expect(queue.peek()).toEqual(3)
  })

  it('peek on empty queue returns undefined', () => {
    expect(queue.peek()).toEqual(undefined)
  })

  it('Dequeues returns and removes the highest priority item', () => {
    createPriorityQueue1()
    expect(queue.dequeue()).toEqual(3)
    expect(queue.dequeue()).toEqual(2)
    expect(queue.dequeue()).toEqual(1)
    expect(queue.dequeue()).toEqual(0)
    createPriorityQueue2()
    expect(queue.dequeue()).toEqual(3)
    expect(queue.dequeue()).toEqual(2)
    expect(queue.dequeue()).toEqual(1)
    expect(queue.dequeue()).toEqual(0)
  })

  it('peek is consistent with enqueue', () => {
    queue.enqueue(0)
    expect(queue.peek()).toEqual(0)
    queue.enqueue(1)
    expect(queue.peek()).toEqual(1)
    queue.enqueue(2)
    expect(queue.peek()).toEqual(2)
    queue.enqueue(3)
    expect(queue.peek()).toEqual(3)
  })

  it('forEach returns all elements', () => {
    const elements: number[] = []
    queue.forEach((e) => {
      expect(true).toEqual(false) // should not enter here
    })
    createPriorityQueue1()
    queue.forEach((e) => {
      elements.push(e)
    })

    expect(elements.includes(0)).toBeTruthy()
    expect(elements.includes(1)).toBeTruthy()
    expect(elements.includes(2)).toBeTruthy()
    expect(elements.includes(3)).toBeTruthy()
  })

  it('toArray gives all the elements', () => {
    let arr
    expect(queue.toArray().length).toEqual(0)

    queue.add(5)
    arr = queue.toArray()
    expect(arr[0]).toEqual(5)
    expect(arr.length).toEqual(1)

    queue.add(8)
    queue.add(8)
    arr = queue.toArray()
    expect(arr.includes(8)).toBeTruthy()
    expect(arr.includes(8)).toBeTruthy()
    expect(arr.length).toEqual(3)
  })
})
