import { createSlice } from '@reduxjs/toolkit'
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
    message: 'Hello redux'
  },
  reducers: {
    changeMessagAction(state, { payload }) {
      state.message = payload
    }
  }
})

export const { changeMessagAction } = counterSlice.actions
// edux Toolkit 会自动根据 reducers 生成 actions
export default counterSlice.reducer
