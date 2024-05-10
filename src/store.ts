import { configureStore } from '@reduxjs/toolkit'
import eventsReducer from './state/slices/eventsSlice'
import liveEventsReducer from './state/slices/liveEventsSlice'
import specialEventsReducer from './state/slices/specialEventsSlice'
import filtersReducer from './state/slices/filtersSlice'
import couponReducer from './state/slices/couponSlice'
import themeReducer from './state/slices/themeSlice'
import favoritesReducer from './state/slices/favoritesSlice'
import activeSportReducer from './state/slices/activeSportSlice'

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    liveEvents: liveEventsReducer,
    specialEvents: specialEventsReducer,
    filters: filtersReducer,
    coupon: couponReducer,
    theme: themeReducer,
    favorites: favoritesReducer,
    activeSport: activeSportReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
