import styled from 'styled-components'
// 有时候导入一个模块会因为没有类型生命而报错
// 三种类型声明
// 1.typescript内置的,不需要类型声明
// 2.第三方*库内部已经有类型声明(比如axios),还有react/react-dom=>@type/react(第三方的类型声明)
// 3.自己写类型声明

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  font-size: 14px;
  color: #fff;

  .content {
    display: flex;
    justify-content: space-between;
  }
  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`
export const HeaderLeft = styled.div`
  display: flex;
  .logo {
    display: block;
    width: 176px;
    height: 70px;
    background-position: 0 0;
    text-indent: -9999px;
  }

  .titles-list {
    display: flex;
    line-height: 70px;

    .item {
      position: relative;

      a {
        display: block;
        padding: 0 20px;
        color: #ccc;
      }

      &:last-of-type {
        a {
          position: relative;
          &::after {
            position: absolute;
            content: '';
            width: 28px;
            height: 19px;
            background-image: url(${require('@/assets/img/sprite_01.png')});
            background-position: -190px 0;
            top: 20px;
            right: -15px;
          }
        }
      }

      &:hover a,
      .active {
        color: #fff;
        background: #000;
        text-decoration: none;
      }

      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }
`
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #787878;
  font-size: 12px;

  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;

    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }

  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    color: #cccccc;
    margin: 0 16px;
    cursor: pointer;
    &:hover {
      color: #ffffff;
      border: 1px solid #ffffff;
    }
  }
`
