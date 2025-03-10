import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Artist: FC<Iprops> = (props) => {
  return <div>Artist</div>
}

export default memo(Artist)
