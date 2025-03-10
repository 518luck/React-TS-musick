import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Djradio: FC<Iprops> = (props) => {
  return <div>Djradio</div>
}

export default memo(Djradio)
