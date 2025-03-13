import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// 1.   createAsyncThunk
//  是什么？createAsyncThunk是 Redux Toolkit 提供的一个工具
//    用于创建 异步的 action creator。
//    它会自动处理异步逻辑，并且与 Redux 的状态管理无缝集成。
//  当你使用   createAsyncThunk   创建一个异步操作时，
//    它会返回一个特殊的函数，这个函数可以直接被   dispatch   调用。
import {
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getPlaylistDetail,
  getArtistList
} from '../service/recommend'
import { log } from 'console'
import { Breadcrumb } from 'antd'

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
    getArtistList(5).then((res: any) => {
      dispatch(changeArtisListAction(res.artists))
    })
  }
)

// 榜单数据
const reankgIds = [19723756, 3779629, 2884035]
export const fetchRankingDataAction = createAsyncThunk(
  'rankingData',
  (_, { dispatch }) => {
    // 1.每个数组单独处理
    /*    
      for (const id of reankgIds) {
        getPlaylistDetail(id).then((res) => {
          console.log(res)
          switch (id) {
            case 19723756:
              console.log('飙升榜', res)
              break
            case 3779629:
              console.log('新歌榜', res)
              break
            case 2884035:
              console.log('原创榜', res)
              break
          }
        })
      }
    */
    //  2.同一处理
    // 保障一:获取所有的结果后,进行dispatch操作
    // 保障二:获取到的结果一定是有正确的顺序
    let index = 0
    const promise: Promise<any>[] = []
    for (const id of reankgIds) {
      promise.push(getPlaylistDetail(id))
    }
    Promise.all(promise).then((res) => {
      const playlists = res.map((item) => item.playlist)
      dispatch(changeRankingAction(playlists))
    })
  }
)

interface IRecommendState {
  banners: any[]
  hotRecommends: any[]
  newAlbums: any[]
  rankings: any[]
  settleSingers: any[]
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  rankings: [],
  settleSingers: []
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
    },
    changeRankingAction(state, { payload }) {
      state.rankings = payload
    },
    changeArtisListAction(state, { payload }) {
      state.settleSingers = payload
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
  changeNewAlbumAction,
  changeRankingAction,
  changeArtisListAction
} = recommendSlice.actions

export default recommendSlice.reducer
