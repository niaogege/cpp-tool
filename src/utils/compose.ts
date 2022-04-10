/*
 * @Author: Chendapeng
 * @Date: 2022-03-20 20:52:15
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-04-10 23:16:13
 * @Description: 组合函数
 */
export type Fun = (p?: number) => number;

export const Compose = (fns: Fun[]) => {
  if (!fns.length) return (arg: number) => arg;
  if (fns.length === 1) {
    return fns[0]
  }
  return (arg: number) => fns.reduce((a, b) => b(a), arg)
}

export const double = (num: number) => 2 * num;
export const triple = (num: number) => 3 * num;