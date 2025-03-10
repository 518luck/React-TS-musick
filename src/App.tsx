import { Suspense } from 'react'
// 当使用 React.lazy 加载组件时，React 会在加载过程中等待组件的内容。
// 因此，我们需要将懒加载的组件包裹在 Suspense 组件中，
// Suspense 负责处理加载过程中的等待和显示加载中的 UI（通过 fallback 属性）。
import { useRoutes, Link } from 'react-router-dom'
import routes from '@/router'
import { useAppSelector, useAppDispatch, shallowEqualApp } from './store'
import { changeMessagAction } from './store/modules/counter'

function App() {
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    shallowEqualApp
  )

  const dispatch = useAppDispatch()
  // 事件处理函数
  function hnadleChangeMessage() {
    dispatch(changeMessagAction('我是新消息'))
  }

  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <h2>当前计数:{count}</h2>
      <h2>当前消息:{message}</h2>
      <button onClick={hnadleChangeMessage}>修改message</button>
      <Suspense fallback="loading...">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
