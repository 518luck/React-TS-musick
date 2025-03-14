export function formatCount(count: number) {
  if (count >= 100000) {
    return Math.floor(count / 10000) + '万'
  } else {
    return count
  }
}

export function getImageSize(
  imageUrl: string,
  width: number,
  height: number = width
) {
  return imageUrl + `?param=${width}y${height}`
}

export function formatTime(time: number) {
  // 0.将毫秒转成秒
  time = time / 1000

  // 1.获取时间
  const minute = Math.floor(time / 60)
  const second = Math.floor(time) % 60

  // 2.拼接字符串
  // return `${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}`
  const formatMinute = String(minute).padStart(2, '0')
  const formatSecond = String(second).padStart(2, '0')
  return `${formatMinute}:${formatSecond}`
}
