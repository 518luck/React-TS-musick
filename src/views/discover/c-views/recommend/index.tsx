import { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'

import { useAppDispatch } from '@/store'
import {
  fetchRecommendDataAction,
  fetchRankingDataAction
} from './store/recommend'
import { RecommendWrapper } from './style'
import TopBanner from './c-cpns/top-banner'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import TopRanking from './c-cpns/top-ranking'
import UserLogin from './c-cpns/user-login'
import SerrleSinger from './c-cpns/settle-singer'
import HotAnchor from './c-cpns/hot-anchor'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    // 直接调用它，虽然可以发起异步请求，
    // 但请求的结果不会被 Redux 捕获，也不会更新全局状态。
    dispatch(fetchRecommendDataAction())
    dispatch(fetchRankingDataAction())
  }, [])

  return (
    <div>
      <RecommendWrapper>
        <TopBanner></TopBanner>
        <div className="content wrap-v2">
          <div className="left">
            <HotRecommend></HotRecommend>
            <NewAlbum></NewAlbum>
            <TopRanking></TopRanking>
          </div>
          <div className="right">
            <UserLogin></UserLogin>
            <SerrleSinger></SerrleSinger>
            <HotAnchor></HotAnchor>
          </div>
        </div>
      </RecommendWrapper>
    </div>
  )
}

export default memo(Recommend)
