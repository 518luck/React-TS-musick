import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Player: FC<Iprops> = (props) => {
  return <div>Player</div>
}

export default memo(Player)
