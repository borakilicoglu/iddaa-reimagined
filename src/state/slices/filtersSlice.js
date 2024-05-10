import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: true,
  hasErrors: false,
  data: {}
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    getFilters: (state) => {
      state.loading = true
    },
    getFiltersSuccess: (state, { payload }) => {
      state.data = payload
      state.loading = false
      state.hasErrors = false
    },
    getFiltersFailure: (state) => {
      state.loading = false
      state.hasErrors = true
    }
  }
})

// Action creators are generated for each case reducer function
export const { getFilters, getFiltersSuccess, getFiltersFailure } =
  filtersSlice.actions

export const filtersSelector = (state) => state.filters

export default filtersSlice.reducer

// Asynchronous thunk action
export function fetchFilters() {
  return async (dispatch) => {
    dispatch(getFilters())
    try {
      const response = await fetch(
        'https://sportprogram.iddaa.com/SportProgram/filter/1/1'
      )
      const { data } = await response.json()
      dispatch(getFiltersSuccess(data))
    } catch (error) {
      dispatch(getFiltersFailure())
    }
  }
}
