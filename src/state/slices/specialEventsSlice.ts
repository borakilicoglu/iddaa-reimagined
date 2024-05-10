import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SpecialEventsState {
  loading: boolean
  hasErrors: boolean
  data: any[] // Define a more specific type based on what `data.spg` contains
}

const initialState: SpecialEventsState = {
  loading: true,
  hasErrors: false,
  data: []
}

const specialEventsSlice = createSlice({
  name: 'specialEvents',
  initialState,
  reducers: {
    getSpecialEvents: (state) => {
      state.loading = true
    },
    getSpecialEventsSuccess: (state, action: PayloadAction<any[]>) => {
      // Use specific type instead of any
      state.data = action.payload
      state.loading = false
      state.hasErrors = false
    },
    getSpecialEventsFailure: (state) => {
      // Optionally pass error message
      state.loading = false
      state.hasErrors = true
    }
  }
})

export const {
  getSpecialEvents,
  getSpecialEventsSuccess,
  getSpecialEventsFailure
} = specialEventsSlice.actions

export const specialEventsSelector = (state: any) => state.specialEvents

export default specialEventsSlice.reducer

export function fetchSpecialEvents() {
  return async (dispatch: any) => {
    dispatch(getSpecialEvents())
    try {
      const response = await fetch(
        'https://sportprogram.iddaa.com/SportProgram?ProgramType=3&SportId=1'
      )
      const { data } = await response.json()
      dispatch(getSpecialEventsSuccess(data.spg))
    } catch (error: any) {
      dispatch(getSpecialEventsFailure(error.toString()))
    }
  }
}
