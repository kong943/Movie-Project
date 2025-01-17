import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Features/counter/couterSlice'
import movieReducer from './Features/movie/movieSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    movie : movieReducer
  },
})