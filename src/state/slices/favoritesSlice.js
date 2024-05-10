import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  hasErrors: false,
  isActive: false,
  favorites: []
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleActive: (state, { payload }) => {
      state.isActive = payload
    },
    toggleFavorite: (state, { payload }) => {
      state.favorites = state.favorites.includes(payload)
        ? [...state.favorites.filter((value) => value !== payload)]
        : [...state.favorites, payload]
    }
  }
})

// Action creators are generated for each case reducer function
export const { toggleFavorite, toggleActive } = favoritesSlice.actions

export const favoritesSelector = (state) => state.favorites

export default favoritesSlice.reducer
