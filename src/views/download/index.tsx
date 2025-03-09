import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Download: FC<Iprops> = (props) => {
  return <div>Download</div>
}

export default memo(Download)
