import { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import hyRequest from '@/service'
import { log } from 'node:console'

interface Iprops {
  children?: ReactNode
}

interface IBannerDate {
  imageUrl: string
  targetId: number
  adid: any
  targetType: number
  titleColor: string
  typeTitle: string
  url: string
  exclusive: boolean
  scm: string
  bannerBizType: string
}
// 新增响应类型定义
interface IBannerResponse {
  banners: IBannerDate[]
  code: number
}
const Recommend: FC<Iprops> = (props) => {
  //测试网络请求
  const [banners, setBanners] = useState<IBannerDate[]>([])
  useEffect(() => {
    hyRequest
      .get<IBannerResponse>({
        url: '/banner'
      })
      .then((res) => {
        setBanners(res.banners)
      })
  }, [])
  return (
    <div>
      {banners.map((item, index) => {
        return <div key={index}>{item.imageUrl}</div>
      })}
    </div>
  )
}

export default memo(Recommend)
