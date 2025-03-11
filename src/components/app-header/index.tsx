import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'

import headerTitles from '@/assets/data/header-titles.json'

interface IProps {
  children?: ReactNode
}
const AppHeader: FC<IProps> = () => {
  /**定义组件内部的状态 */
  // 组件显示逻辑
  function showItem(item: any) {
    if (item.type === 'path') {
      return (
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : 'undefined')}
          to={item.link}
        >
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link} rel="noreferrer" target="_blank">
          {item.title}
        </a>
      )
    }
  }
  return (
    <HeaderWrapper>
      <div className="conter wrap-v1">
        <HeaderLeft>
          <a className="logo sprite_01" href="/#">
            网易云音乐
          </a>
          <div className="titles-list">
            {headerTitles.map((item) => {
              return (
                <div className="item" key={item.title}>
                  {showItem(item)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight></HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
}
export default memo(AppHeader)
