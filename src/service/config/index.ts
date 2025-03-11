// export const BASE_URL = 'http://codercba.com:9002'
export const TIME_OUT = 10000

// 人为控制修改为自动
// webpack可以根据本地找到测试环境
// 开发环境 development 生产环境 production
// process.env.NODE_ENV -> 这个是webpack提供的环境变量
// 基地址
let BASE_URL = ''
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://codercba.com:9002'
} else {
  BASE_URL = 'http://codercba.com:9002'
}

export { BASE_URL }
