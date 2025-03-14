import { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Slider, message } from 'antd'

import {
  PlayerBarWrapper,
  BarControl,
  BarPlayerInfo,
  BarOperator
} from './style'
import { useAppSelector, shallowEqualApp, useAppDispatch } from '@/store'
import { getImageSize } from '@/utils/format'
import { getPlayerUrl } from '@/utils/handle-player'
import { formatTime } from '@/utils/format'
import { changeLyricIndexAction } from '../store/player'

interface Iprops {
  children?: ReactNode
}

const AppPlayerBar: FC<Iprops> = () => {
  const audioRef = useRef<HTMLMediaElement>(null)
  const [messageApi] = message.useMessage()
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const { currentSong, lyrics, lyricIndex } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      lyrics: state.player.lyrics,
      lyricIndex: state.player.lyricIndex
    }),
    shallowEqualApp
  )

  const dispatch = useAppDispatch()

  useEffect(() => {
    audioRef.current!.src = getPlayerUrl(currentSong.id)
    // audioRef.current
    //   ?.play()
    //   .then(() => {
    //     setIsPlaying(true)
    //     console.log('播放成功')
    //   })
    //   .catch((error) => {
    //     setIsPlaying(false)
    //     console.log('播放失败', error)
    //   })
    setDuration(currentSong.dt)
  }, [currentSong])

  function handleTimeUpdate() {
    // 当前时间
    const currentTime = audioRef.current!.currentTime
    // 当前歌曲进度
    const progress = ((currentTime * 1000) / duration) * 100
    setProgress(progress)
    setCurrentTime(currentTime * 1000)

    // 匹配歌词
    let index = lyrics.length - 1
    for (let i = 0; i < lyrics.length; i++) {
      const lyric = lyrics[i]
      if (lyric.time > currentTime * 1000) {
        index = i - 1
        break
      }
    }

    // 用redux匹配歌词
    if (lyricIndex === index || index === -1) return
    dispatch(changeLyricIndexAction(index))

    console.log(lyrics[lyricIndex + 1].text)
  }
  function handleSliderChange(value: number) {
    const currentTime = ((value / 100) * duration) / 1000
    audioRef.current!.currentTime = currentTime
    setCurrentTime(currentTime)
    setProgress(value)
  }

  const handlePlayBtnClick = () => {
    const isPaused = audioRef.current!.paused
    isPaused
      ? audioRef.current?.play().catch((error) => {
          console.log('播放失败', error)
          setIsPlaying(false)
        })
      : audioRef.current?.pause()
    setIsPlaying(isPaused)
  }

  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl $isPlaying={isPlaying}>
          <button className="btn sprite_playbar prev"></button>
          <button
            className="btn sprite_playbar play"
            onClick={handlePlayBtnClick}
          ></button>
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
              <span className="singer-name">{currentSong?.ar?.[0]?.name}</span>
            </div>
            <div className="progress">
              <Slider
                value={progress}
                step={0.1}
                tooltip={{ formatter: null }}
                onChange={handleSliderChange}
              />
              <div className="time">
                <span className="current">{formatTime(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatTime(duration)}</span>
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
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} />
    </PlayerBarWrapper>
  )
}

export default memo(AppPlayerBar)
