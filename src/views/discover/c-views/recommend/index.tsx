import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Recommend: FC<Iprops> = (props) => {
  return <div>Recommend</div>
}

export default memo(Recommend)
