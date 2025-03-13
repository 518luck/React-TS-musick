import { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { RankingWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'

interface Iprops {
  children?: ReactNode
}

const TopRanking: FC<Iprops> = (props) => {
  return (
    <RankingWrapper>
      <AreaHeaderV1 title="榜单" moreLink="/discover/ranking" />
      <div className="content"></div>
    </RankingWrapper>
  )
}

export default memo(TopRanking)
