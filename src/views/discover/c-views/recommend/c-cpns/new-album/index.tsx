import { memo, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import { Carousel } from 'antd'
import { CarouselRef } from 'antd/es/carousel'

import { AlbumWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector, shallowEqualApp } from '@/store'
import NewAlbumItem from '@/components/new-album-item'

interface Iprops {
  children?: ReactNode
}

const NewAlbum: FC<Iprops> = () => {
  const bannerRef = useRef<CarouselRef>(null)
  const { newAlbums } = useAppSelector(
    (state) => ({
      newAlbums: state.recommend.newAlbums
    }),
    shallowEqualApp
  )

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
            {newAlbums.length > 0 ? (
              [0, 1].map((item) => {
                return (
                  <div key={item}>
                    <div className="album-list">
                      {newAlbums
                        .slice(item * 5, (item + 1) * 5)
                        .map((album) => {
                          return (
                            <NewAlbumItem
                              key={album.id}
                              itemData={album}
                            ></NewAlbumItem>
                          )
                        })}
                    </div>
                  </div>
                )
              })
            ) : (
              <div>Loading...</div>
            )}
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
