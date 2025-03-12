import { memo, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Carousel } from 'antd'
import type { CarouselRef } from 'antd/es/carousel'

import { useAppSelector, shallowEqualApp } from '@/store'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'

interface Iprops {
  children?: ReactNode
}

const TopBanner: FC<Iprops> = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const bannerRef = useRef<CarouselRef>(null)
  /* 从store中获取数据 */
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqualApp
  )

  // 事件处理函数
  // 想要调用组件的方法,需要先拿到组件
  function handlePrevClick() {
    bannerRef.current?.prev()
    console.log(bannerRef)
  }
  function handleNextClick() {
    bannerRef.current?.next()
  }
  function handleAfterChane(current: number) {
    setCurrentIndex(current)
  }

  /* 获取背景图片 */
  const bgImageUrl = banners[currentIndex]?.imageUrl + '?imageView&blur=40x20'
  return (
    <BannerWrapper
      style={{
        background: `url('${bgImageUrl}') center center / 6000px`
      }}
    >
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            autoplay
            ref={bannerRef}
            // effect={'fade'}
            afterChange={handleAfterChane}
          >
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              )
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={handlePrevClick}></button>
          <button className="btn right" onClick={handleNextClick}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
