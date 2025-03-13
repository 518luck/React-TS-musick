import { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { AnchorWrapper } from './style'
import AreaHeaderV2 from '@/components/area-heder-v2'

interface Iprops {
  children?: ReactNode
}

const HotAnchor: FC<Iprops> = (props) => {
  return (
    <AnchorWrapper>
      <AreaHeaderV2
        title="入驻歌手"
        moreText="查看全部&gt;"
        moreLink="/discover/artist"
      ></AreaHeaderV2>
    </AnchorWrapper>
  )
}

export default memo(HotAnchor)
