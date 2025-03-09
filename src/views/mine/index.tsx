import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Mine: FC<Iprops> = (props) => {
  return <div>Mine</div>
}

export default memo(Mine)
