import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isCouponOpen: true,
  isMobileMenuOpen: false
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleCoupon: (state) => {
      state.isCouponOpen = !state.isCouponOpen
    },
    setAppearCoupon: (state, { payload }) => {
      state.isCouponOpen = payload
    },
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen
    },
    setAppearMobileMenu: (state, { payload }) => {
      state.isMobileMenuOpen = payload
    }
  }
})

// Action creators are generated for each case reducer function
export const {
  toggleCoupon,
  setAppearCoupon,
  toggleMobileMenu,
  setAppearMobileMenu
} = themeSlice.actions

export const themeSelector = (state) => state.theme

export default themeSlice.reducer
