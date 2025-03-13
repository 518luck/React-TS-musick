import { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { useAppSelector, shallowEqualApp } from '@/store'
import { RankingWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import TopRankingItem from '../top-ranking-item'

interface Iprops {
  children?: ReactNode
}

const TopRanking: FC<Iprops> = () => {
  const { ranking } = useAppSelector(
    (state) => ({
      ranking: state.recommend.rankings
    }),
    shallowEqualApp
  )
  return (
    <RankingWrapper>
      <AreaHeaderV1 title="榜单" moreLink="/discover/ranking" />
      <div className="content">
        {ranking.map((item) => {
          return <TopRankingItem key={item.id} itemData={item} />
        })}
      </div>
    </RankingWrapper>
  )
}

export default memo(TopRanking)
