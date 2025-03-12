import hyRequest from '@/service'

export function getBanners() {
  return hyRequest.get({
    url: '/banner'
  })
}

export function getHotRecommend(limit: number = 30) {
  return hyRequest.get({
    url: '/personalized',
    params: {
      limit
    }
  })
}
