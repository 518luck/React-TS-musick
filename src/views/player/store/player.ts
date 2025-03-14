import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getSonDetail, getSongLyric } from '../service/player'
import { ILyric, parseLyric } from '@/utils/parse-lyric'

export const fetchCurrentSonAction = createAsyncThunk(
  'currentSong',
  (id: number, { dispatch }) => {
    getSonDetail(id).then((res: any) => {
      if (!res.songs.length) return
      const song = res.songs[0]
      dispatch(changeCurrentSongAction(song))
    })

    getSongLyric(id).then((res: any) => {
      const lyricString = res.lrc.lyric

      // 将歌词解析为对象
      const lyrics = parseLyric(lyricString)
      dispatch(changeLyricsAction(lyrics))
    })
  }
)

interface IPlayerState {
  currentSong: any
  lyrics: ILyric[]
  lyricIndex: number
  playSongList: any[]
  playSongIndex: number
}
const initialState: IPlayerState = {
  currentSong: {},
  lyrics: [],
  lyricIndex: -1,
  playSongList: [],
  playSongIndex: -1
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changeLyricsAction(state, { payload }) {
      state.lyrics = payload
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    }
  }
})

export const {
  changeCurrentSongAction,
  changeLyricsAction,
  changeLyricIndexAction
} = playerSlice.actions
export default playerSlice.reducer
