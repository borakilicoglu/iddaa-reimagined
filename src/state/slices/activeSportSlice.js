import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: true,
  hasErrors: false,
  data: {}
}

export const activeSportSlice = createSlice({
  name: 'activeSport',
  initialState,
  reducers: {
    getActiveSport: (state) => {
      state.loading = true
    },
    getActiveSportSuccess: (state, { payload }) => {
      state.data = payload
      state.loading = false
      state.hasErrors = false
    },
    getActiveSportFailure: (state) => {
      state.loading = false
      state.hasErrors = true
    }
  }
})

// Action creators are generated for each case reducer function
export const { getActiveSport, getActiveSportSuccess, getActiveSportFailure } =
  activeSportSlice.actions

export const activeSportSelector = (state) => state.activeSport

export default activeSportSlice.reducer

// Asynchronous thunk action
export function fetchActiveSport() {
  return async (dispatch) => {
    dispatch(getActiveSport())
    try {
      const response = await fetch(
        'https://sportprogram.iddaa.com/SportProgram/active_sport_type'
      )
      const { data } = await response.json()
      dispatch(getActiveSportSuccess(data))
    } catch (error) {
      dispatch(getActiveSportFailure())
    }
  }
}
