import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getSonDetail, getSongLyric } from '../service/player'

export const fetchCurrentSonAction = createAsyncThunk(
  'currentSong',
  (id: number, { dispatch }) => {
    getSonDetail(id).then((res: any) => {
      if (!res.songs.length) return
      const song = res.songs[0]
      dispatch(changeCurrentSongAction(song))
    })

    getSongLyric(id).then((res: any) => {
      console.log(res)
    })
  }
)

interface IPlayerState {
  currentSong: any
}
const initialState: IPlayerState = {
  currentSong: {}
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    }
  }
})

export const { changeCurrentSongAction } = playerSlice.actions
export default playerSlice.reducer
