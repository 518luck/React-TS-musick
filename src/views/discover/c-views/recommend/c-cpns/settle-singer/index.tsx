import { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { SingerWrapper } from './style'
import AreaHeaderV2 from '@/components/area-heder-v2'
import { useAppSelector } from '@/store'
import { getImageSize } from '@/utils/format'

interface Iprops {
  children?: ReactNode
}

const SerrleSinger: FC<Iprops> = (props) => {
  const { settleSingers } = useAppSelector((state) => ({
    settleSingers: state.recommend.settleSingers
  }))
  return (
    <SingerWrapper>
      <AreaHeaderV2
        title="入驻歌手"
        moreText="查看全部&gt;"
        moreLink="/discover/artist"
      ></AreaHeaderV2>
      <div className="artists">
        {settleSingers.map((item) => {
          return (
            <a href="#/discover/artist" className="item">
              <img src={getImageSize(item.picUrl, 80)} alt="" />
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="alias">{item.alias.join('')}</div>
              </div>
            </a>
          )
        })}
      </div>

      <div className="apply-for">
        <a href="#/">申请成为网易音乐人</a>
      </div>
    </SingerWrapper>
  )
}

export default memo(SerrleSinger)
