import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: true,
  hasErrors: false,
  byDate: true,
  data: []
}

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    getEvents: (state) => {
      state.loading = true
    },
    getEventsSuccess: (state, { payload }) => {
      state.data = payload
      state.loading = false
      state.hasErrors = false
    },
    getEventsFailure: (state) => {
      state.loading = false
      state.hasErrors = true
    },
    switchByDate: (state, { payload }) => {
      state.byDate = payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { getEvents, getEventsSuccess, getEventsFailure, switchByDate } =
  eventsSlice.actions

export const eventsSelector = (state) => state.events

export default eventsSlice.reducer

export function fetchEvents() {
  return async (dispatch) => {
    dispatch(getEvents())
    try {
      const response = await fetch(
        'https://sportprogram.iddaa.com/SportProgram?ProgramType=1&SportId=1&MukList=1_1,2_88,2_100,2_101_2.5,2_89'
      )
      const { data } = await response.json()
      dispatch(getEventsSuccess(data.spg))
      dispatch(switchByDate(true))
    } catch (error) {
      dispatch(getEventsFailure())
    }
  }
}

export function fetchEventsByLeague() {
  return async (dispatch) => {
    dispatch(getEvents())
    try {
      const response = await fetch(
        'https://sportprogram.iddaa.com/SportProgram?ProgramType=1&SportId=1&MukList=1_1,2_88,2_100,2_101_2.5,2_89&GroupByLeague=true'
      )
      const { data } = await response.json()
      dispatch(getEventsSuccess(data.spg))
      dispatch(switchByDate(false))
    } catch (error) {
      dispatch(getEventsFailure())
    }
  }
}

export function fetchEventsByFilter(url) {
  return async (dispatch) => {
    dispatch(getEvents())
    try {
      const response = await fetch(url)
      const { data } = await response.json()
      dispatch(getEventsSuccess(data.spg))
    } catch (error) {
      dispatch(getEventsFailure())
    }
  }
}
