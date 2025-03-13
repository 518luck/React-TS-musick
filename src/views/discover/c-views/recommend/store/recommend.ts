import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// 1.   createAsyncThunk
//  是什么？createAsyncThunk是 Redux Toolkit 提供的一个工具
//    用于创建 异步的 action creator。
//    它会自动处理异步逻辑，并且与 Redux 的状态管理无缝集成。
//  当你使用   createAsyncThunk   创建一个异步操作时，
//    它会返回一个特殊的函数，这个函数可以直接被   dispatch   调用。
import { getBanners, getHotRecommend, getNewAlbum } from '../service/recommend'

/* 
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
    dispatch(changeHotRecommendAction(res.result))
  }
)

export const fetchNweAlbumAction = createAsyncThunk(
  'newAlbum',
  async (arg, { dispatch }) => {
    const res: any = await getNewAlbum()
    dispatch(changeNewAlbumAction(res.albums))
  }
) 
  */

export const fetchRecommendDataAction = createAsyncThunk(
  'fetchdata',
  (_, { dispatch }) => {
    // 1.获取轮播图数据
    getBanners().then((res: any) => {
      dispatch(changeBannerAction(res.banners))
    })
    getHotRecommend(8).then((res: any) => {
      dispatch(changeHotRecommendAction(res.result))
    })
    getNewAlbum().then((res: any) => {
      dispatch(changeNewAlbumAction(res.albums))
    })
  }
)

interface IRecommendState {
  banners: any[]
  hotRecommends: any[]
  newAlbums: any[]
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: []
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
    },
    changeNewAlbumAction(state, { payload }) {
      state.newAlbums = payload
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
export const {
  changeBannerAction,
  changeHotRecommendAction,
  changeNewAlbumAction
} = recommendSlice.actions

export default recommendSlice.reducer
