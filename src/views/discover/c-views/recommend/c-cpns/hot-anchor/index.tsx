import { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { AnchorWrapper } from './style'
import AreaHeaderV2 from '@/components/area-heder-v2'
import { hotRadios } from '@/assets/data/local-data'

interface Iprops {
  children?: ReactNode
}

const HotAnchor: FC<Iprops> = () => {
  return (
    <AnchorWrapper>
      <AreaHeaderV2 title="热门主播" />
      <div className="anchors">
        {hotRadios.map((item) => {
          return (
            <div className="item" key={item.picUrl}>
              <a href="" className="image">
                <img src={item.picUrl} alt="" />
              </a>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="position">{item.position}</div>
              </div>
            </div>
          )
        })}
      </div>
    </AnchorWrapper>
  )
}

export default memo(HotAnchor)
