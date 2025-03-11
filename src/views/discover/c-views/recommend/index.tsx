import { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch } from '@/store'
import { fetchBannerDataAction } from './store/recommend'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
    // 直接调用它，虽然可以发起异步请求，
    // 但请求的结果不会被 Redux 捕获，也不会更新全局状态。
  }, [])

  return <div>Recommend</div>
}

export default memo(Recommend)
