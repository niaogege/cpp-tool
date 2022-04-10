/*
 * @Author: Chendapeng
 * @Date: 2022-04-10 22:26:48
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-04-10 23:27:11
 * @Description: 
 */
export function sleep(time: number) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time)
    reject()
  })
}

export const useSleep = async (time: number) => {
  try {
    const user = await sleep(time);
    return user;
  }
  catch (error) {
    console.error(error)
  }
}