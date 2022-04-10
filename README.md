<!--
 * @Author: Chendapeng
 * @Date: 2022-04-10 22:03:28
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-04-10 23:43:27
 * @Description: 
-->

# 打造专属工具函数库cpp-tool

## 用到的技术栈
- typescript
- react
- scss
- rollup

## 配置rollup.config.js
项目执行
*npm i rollup -D*
按照[官网](https://www.rollupjs.com/guide/tutorial)来配置即可

### 输出的格式：
格式(format -f/--output.format)
String 生成包的格式。 下列之一:

- amd – 异步模块定义，用于像RequireJS这样的模块加载器
- cjs – CommonJS，适用于 Node 和 Browserify/Webpack
- esm – 将软件包保存为 ES 模块文件，在现代浏览器中可以通过 <script type=module> 标签引入
- iife – 一个自动执行的功能，适合作为<script>标签。（如果要为应用程序创建一个捆绑包，您可能想要使用它，因为它会使文件大小变小。）
- umd – 通用模块定义，以amd，cjs 和 iife 为一体
- system - SystemJS 加载器格式

## 配置external


## 配置typescript
*npm i @rollup/plugin-typescript -D*
> https://www.npmjs.com/package/@rollup/plugin-typescript
网上各种文章对于安卓rollup插件ts说法不一，主要还是因为当前的库，看的文章也许是两年前的，所以两年前的ts插件跟现在肯定是有区别的，最好的办法就是 [npm官网](https://www.npmjs.com/)上检索相关插件

```js
import typescript from '@rollup/plugin-typescript'

export default {
  ...
  plugins: [
    typescript(),
  ]
}
```


## 参考文件
- [一文带你快速上手Rollup](https://juejin.cn/post/6869551115420041229)