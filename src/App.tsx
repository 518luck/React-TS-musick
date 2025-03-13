import { Suspense } from 'react'
// 当使用 React.lazy 加载组件时，React 会在加载过程中等待组件的内容。
// 因此，我们需要将懒加载的组件包裹在 Suspense 组件中，
// Suspense 负责处理加载过程中的等待和显示加载中的 UI（通过 fallback 属性）。
import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import AppPlayerBar from './views/player/app-player-bar'
function App() {
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="loading...">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />

      {/* 播放器工具栏 */}
      <AppPlayerBar />
    </div>
  )
}

export default App
