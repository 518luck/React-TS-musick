import { memo } from 'react'
// memo 允许你的组件在 props 没有改变的情况下跳过重新渲染。
import type { ReactNode } from 'react'
// 在 TypeScript 中，import type 用于仅导入类型，不会在编译后的 JavaScript 代码中引入对应的模块。

interface Iprops {
  children?: ReactNode
  name: string
  age: number
  height?: number
}

//直接对props进行类型约束
/* const Download = (props: Iprops) => {
  return (
    <div>
      <div>name:{props.name}</div>
      <div>age:{props.age}</div>
      <div>height:{props.height}</div>
    </div>
  )
} */

const Download: React.FC<Iprops> = (props) => {
  return (
    <div>
      <div>name:{props.name}</div>
      <div>age:{props.age}</div>
      <div>height:{props.height}</div>
      <div>{props.children}</div>
    </div>
  )
}

export default memo(Download)
