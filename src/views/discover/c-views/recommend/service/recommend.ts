import hyRequest from '@/service'

export function gerBanners() {
  return hyRequest.get({
    url: '/banner'
  })
}
