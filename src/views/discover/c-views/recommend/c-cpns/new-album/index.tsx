import { memo, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import { Carousel } from 'antd'
import { CarouselRef } from 'antd/es/carousel'

import { AlbumWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'

interface Iprops {
  children?: ReactNode
}

const NewAlbum: FC<Iprops> = () => {
  const bannerRef = useRef<CarouselRef>(null)

  // 事件处理函数
  // 想要调用组件的方法,需要先拿到组件
  function handlePrevClick() {
    bannerRef.current?.prev()
  }
  function handleNextClick() {
    bannerRef.current?.next()
  }
  return (
    <AlbumWrapper>
      <AreaHeaderV1 title="新碟上架" moreLink="/discover/album" />
      <div className="content">
        <button
          className="sprite_02 arrow arrow-left"
          onClick={handlePrevClick}
        ></button>
        <div className="banner">
          <Carousel
            ref={bannerRef}
            effect={'scrollx'}
            dots={false}
            speed={2000}
          >
            {[1, 2].map((item) => {
              return <h1>{item}</h1>
            })}
          </Carousel>
        </div>
        <button
          className="sprite_02 arrow arrow-right"
          onClick={handleNextClick}
        ></button>
      </div>
    </AlbumWrapper>
  )
}

export default memo(NewAlbum)
