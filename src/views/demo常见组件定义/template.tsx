import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Template: FC<Iprops> = (props) => {
  return <div>Template</div>
}

export default memo(Template)
