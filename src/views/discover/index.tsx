import { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet, Link } from 'react-router-dom'

import NavBar from '@/views/discover/c-cpns/nva-bar'

interface Iprops {
  children?: ReactNode
}

const Discover: FC<Iprops> = (props) => {
  return (
    <div>
      <NavBar></NavBar>
      <Suspense fallback="loading...">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
