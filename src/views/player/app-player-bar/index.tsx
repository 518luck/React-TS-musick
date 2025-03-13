import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Slider } from 'antd'

import {
  PlayerBarWrapper,
  BarControl,
  BarPlayerInfo,
  BarOperator
} from './style'
import { useAppSelector } from '@/store'
import { getImageSize } from '@/utils/format'

interface Iprops {
  children?: ReactNode
}

const AppPlayerBar: FC<Iprops> = () => {
  const { currentSong } = useAppSelector((state) => ({
    currentSong: state.player.currentSong
  }))

  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl>
          <button className="btn sprite_playbar prev"></button>
          <button className="btn sprite_playbar play"></button>
          <button className="btn sprite_playbar next"></button>
        </BarControl>
        <BarPlayerInfo>
          <Link to="/player">
            <img
              className="image"
              src={getImageSize(currentSong?.al?.picUrl, 40)}
              alt=""
            />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong?.name}</span>
              <span className="singer-name">{currentSong?.ar[0]?.name}</span>
            </div>
            <div className="progress">
              <Slider />
              <div className="time">
                <span className="current">00:52</span>
                <span className="divider">/</span>
                <span className="duration">04:02</span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button className="btn sprite_playbar loop"></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
      </div>
    </PlayerBarWrapper>
  )
}

export default memo(AppPlayerBar)
