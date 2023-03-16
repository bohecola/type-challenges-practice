// 实现一个通用First<T>，它接受一个数组T并返回它的第一个元素的类型。

// 方式1
// type First<T extends any[]> = T extends [] ? never : T[0]

// 方式2
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0]

// 方式3
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;

// 方式4
type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never;

// 测试代码
// type ages = [1, 2, 3]  // ages[number] => 3 | 2 | 1
// type ages = []         // ages[number] => never

// type t1 = ages[number]

// type t2 = 1 extends ages[number] ? "true" : "false"