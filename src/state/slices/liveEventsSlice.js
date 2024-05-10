import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: true,
  hasErrors: false,
  data: {}
}

export const liveEventsSlice = createSlice({
  name: 'liveEvents',
  initialState,
  reducers: {
    getLiveEvents: (state) => {
      state.loading = true
    },
    getLiveEventsSuccess: (state, { payload }) => {
      state.data = payload
      state.loading = false
      state.hasErrors = false
    },
    getLiveEventsFailure: (state) => {
      state.loading = false
      state.hasErrors = true
    }
  }
})

// Action creators are generated for each case reducer function
export const { getLiveEvents, getLiveEventsSuccess, getLiveEventsFailure } =
  liveEventsSlice.actions

export const liveEventsSelector = (state) => state.liveEvents

export default liveEventsSlice.reducer

// Asynchronous thunk action
export function fetchLiveEvents() {
  return async (dispatch) => {
    dispatch(getLiveEvents())
    try {
      const response = await fetch(
        'https://sportprogram.iddaa.com/SportProgram?ProgramType=2&SportId=1&MukList=4_4,4_34,4_23,4_14_2.5,4_131'
      )
      const { data } = await response.json()
      dispatch(getLiveEventsSuccess(data))
    } catch (error) {
      dispatch(getLiveEventsFailure())
    }
  }
}
