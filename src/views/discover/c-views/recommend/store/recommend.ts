import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// 1.   createAsyncThunk
//  是什么？createAsyncThunk是 Redux Toolkit 提供的一个工具
//    用于创建 异步的 action creator。
//    它会自动处理异步逻辑，并且与 Redux 的状态管理无缝集成。
//  当你使用   createAsyncThunk   创建一个异步操作时，
//    它会返回一个特殊的函数，这个函数可以直接被   dispatch   调用。
import { getBanners, getHotRecommend } from '../service/recommend'

export const fetchBannerDataAction = createAsyncThunk(
  'banners',
  async (arg, { dispatch }) => {
    const res: any = await getBanners()
    dispatch(changeBannerAction(res.banners))
  }
)

export const fetchHotRecommendAction = createAsyncThunk(
  'hotRecommend',
  async (arg, { dispatch }) => {
    const res: any = await getHotRecommend(8)
    // console.log(res)
    dispatch(changeHotRecommendAction(res.result))
  }
)

interface IRecommendState {
  banners: any[]
  hotRecommends: any[]
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommends: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannerAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommends = payload
    }
  }
  /*  
  extraReducers: (builder) => {
    builder.addCase(fetchBannerDataAction.fulfilled, (state, { payload }) => {
      state.banners = payload
    })
  } 
    */
})
export const { changeBannerAction, changeHotRecommendAction } =
  recommendSlice.actions

export default recommendSlice.reducer
