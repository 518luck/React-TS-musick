import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const AppFooter: FC<Iprops> = (props) => {
  return (
    <h2>
      <div>AppFooter</div>
    </h2>
  )
}

export default memo(AppFooter)
