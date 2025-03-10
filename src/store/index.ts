// 导入 configureStore 函数，用于配置和创建 Redux 应用的 store
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counter' // 这里就是导入的 reducer
import {
  useSelector,
  TypedUseSelectorHook,
  useDispatch,
  shallowEqual
} from 'react-redux'

// 创建 Redux 应用的 store
// 此处传入的配置对象中，reducer 属性为空对象，表示当前应用尚未定义任何状态管理逻辑
// 在实际应用中，应在此处传入应用的 rootReducer
const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

// 用来让store自己推断出来自己的类型,便于后面自己使用(没有看懂)
// 这段代码的作用是为 Redux 的 useSelector Hook 提供类型安全，确保在使用 useSelector 时能够正确地推断和检查类型。
type GetStateFnType = typeof store.getState
type IRootState = ReturnType<GetStateFnType>
type DispatchType = typeof store.dispatch

// useAppSelector的hook
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export const shallowEqualApp = shallowEqual

// 将创建的 store 导出，以便在应用中使用
export default store
