import { useAppSelector } from '@/store'
import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { shallowEqual } from 'react-redux'

interface Iprops {
  children?: ReactNode
}

const TopBanner: FC<Iprops> = (props) => {
  /* 从store中获取数据 */
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )
  return (
    <div>
      {banners.map((item) => {
        return <div key={item.imageUrl}>{item.imageUrl}</div>
      })}
    </div>
  )
}

export default memo(TopBanner)
