import { deepClone, isPlainObject } from '../../src/utils/index'

describe('utils isPlainObject', () => {
  expect(isPlainObject({})).toBeTruthy()
  expect(isPlainObject(null)).toBeFalsy()
  expect(isPlainObject('tom')).toBeFalsy()
  expect(isPlainObject(undefined)).toBeFalsy()
})

describe('utils deepClone', () => {
  it('params is Object', () => {
    const a = {
      name: 'Tom',
      age: 12,
      other: {
        school: 'Washington',
      },
    }
    const b = deepClone(a)
    expect(b).toEqual(a)
  })

  it('params is Array', () => {
    const a = [1, 2, 3]
    const b = deepClone(a)

    expect(a === b).toBeFalsy()
    expect(a).toEqual(b)
  })

  it('params is ArrayList', () => {
    const a = [{ name: 'tom' }, { name: 'seve' }]
    const b = deepClone(a)
    expect(a === b).toBeFalsy()
    expect(a).toEqual(b)
  })

  it('params is primitive type', () => {
    const a = 'tom'
    const b = deepClone(a)
    expect(a).toBe(b)
  })

  it('params is null', () => {
    const a = null
    const b = deepClone(a)
    expect(b).toBeNull()
  })
})
