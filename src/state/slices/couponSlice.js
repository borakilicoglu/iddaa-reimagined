import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  hasErrors: false,
  data: []
}

export const couponSlice = createSlice({
  name: 'coupon',
  initialState,
  reducers: {
    addEvent: (state, { payload }) => {
      state.data = [...state.data, payload]
    },
    updateEvent: (state, { payload }) => {
      state.data[state.data.findIndex((value) => value.bid === payload.bid)] = {
        ...payload
      }
    },
    removeEvent: (state, { payload }) => {
      state.data = [...state.data.filter((item) => item.bid !== payload)]
    },
    deleteAllEvents: (state) => {
      state.data = []
    }
  }
})

// Action creators are generated for each case reducer function
export const { addEvent, updateEvent, removeEvent, deleteAllEvents } =
  couponSlice.actions

export const couponSelector = (state) => state.coupon

export default couponSlice.reducer
