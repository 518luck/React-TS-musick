import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RecommendWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import SongMenuItem from '@/components/songs-menu-item'
import { shallowEqualApp, useAppSelector } from '@/store'

interface Iprops {
  children?: ReactNode
}

const HotRecommend: FC<Iprops> = () => {
  const { hotRecommends } = useAppSelector(
    (state) => ({
      hotRecommends: state.recommend.hotRecommends
    }),
    shallowEqualApp
  )

  return (
    <RecommendWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink="/discover/songs"
      ></AreaHeaderV1>
      <div className="recommend-list">
        {hotRecommends.map((item) => {
          return <SongMenuItem key={item.id} itemData={item}></SongMenuItem>
        })}
      </div>
    </RecommendWrapper>
  )
}

export default memo(HotRecommend)
