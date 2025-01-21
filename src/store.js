import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Features/counter/couterSlice'
import movieReducer from './Features/movie/movieSlice'
import contactReducer from'./Features/contact/contactSlice'
import ContactUs from './pages/ContactUs'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    movie : movieReducer
    // Contact: contactReducer
  },
})