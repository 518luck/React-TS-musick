import { lazy } from 'react'
// React.lazy 是 React 内置的一个函数，用于延迟加载一个组件，直到它真正被渲染时才进行加载。
// 这通常与 动态 import() 语法一起使用。
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

/* 
普通路由,没有懒加载的路由
import Discover from '../views/discover/index'
import Mine from '@/views/mine'
import Focus from '@/views/focus'
import Download from '@/views/download' 
*/

// 进行性能优化,分包,在VUE/React中称之为路由懒加载,使用lazy
const Discover = lazy(() => import('@/views/discover/index'))
// import('@/views/discover/index')：这是一种动态 import 语法，返回一个
// Promise，并指示浏览器按需加载指定的模块（即 @/views/discover/index）
const Mine = lazy(() => import('@/views/mine/index'))
const Focus = lazy(() => import('@/views/focus/index'))
const Download = lazy(() => import('@/views/download/index'))

// import Mine from '@/views/mine'
// import Focus from '@/views/focus'
// import Download from '@/views/download'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/download',
    element: <Download />
  }
]

export default routes
