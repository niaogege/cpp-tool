/*
 * @Author: Chendapeng
 * @Date: 2022-03-20 21:44:16
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-04-10 23:17:29
 * @Description: 
 */

import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import { babel } from '@rollup/plugin-babel';
import resolve from 'rollup-plugin-node-resolve'
import pkg from './package.json'

const footer = `
  if (typeof winodw !== 'undefined') {
    window.cppToolversion = '${pkg.version}';
  }
`

export default {
  input: [
    'src/index.ts'
  ],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      name: 'COMMONTool',
      footer
    },
    {
      file: pkg.module,
      format: 'esm',
      name: 'ESMTool',
      footer
    },
    {
      file: pkg.browser,
      format: 'umd',
      name: 'CPPTool',
      footer,
      //当入口文件有export时，'umd'格式必须指定name
      //这样，在通过<script>标签引入时，才能通过name访问到export的内容。
    }
  ],
  plugins: [
    typescript(),
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
    resolve()
  ]
}