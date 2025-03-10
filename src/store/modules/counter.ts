import { createSlice } from '@reduxjs/toolkit'
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
    name: 'hhhh'
  },
  reducers: {}
})

// edux Toolkit 会自动根据 reducers 生成 actions
export default counterSlice.reducer
