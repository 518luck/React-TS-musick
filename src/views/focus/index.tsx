import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Focus: FC<Iprops> = (props) => {
  return <div>Focus</div>
}

export default memo(Focus)
