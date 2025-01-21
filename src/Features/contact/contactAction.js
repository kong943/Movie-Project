import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContact = createAsyncThunk('/contact/fetch',
    async () => {
        try {
            let response = await fetch(`https://api.themoviedb.org/3/tv/12345/content_ratings?api_key=aacdbe83dedab8fc913bd72adf3fdbad`)
            let json = await response.json()
            return json
        } catch (error) {
            return Promise.reject(error)
        }
    })