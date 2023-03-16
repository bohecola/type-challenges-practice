import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
]

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>,
]

// 如果是一个 arr 是 [] 空数组 的话，那么获取 arr[0]是一个 undefined，但是 arr[number] => never
// 知识点
// 1. extends 类型条件判断
// 2. 获取 tuple 的 length 属性 indexed
// 3. extends union 判断的规则
// 4. inter 的使用(推断)