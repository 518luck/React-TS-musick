import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RecommendWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'

interface Iprops {
  children?: ReactNode
}

const HotRecommend: FC<Iprops> = (props) => {
  return (
    <RecommendWrapper>
      <AreaHeaderV1></AreaHeaderV1>
      HotRecommend
    </RecommendWrapper>
  )
}

export default memo(HotRecommend)
