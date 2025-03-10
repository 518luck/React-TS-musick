import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Album: FC<Iprops> = (props) => {
  return <div>Album</div>
}

export default memo(Album)
