import { createSlice } from "@reduxjs/toolkit";
import { fetchContact } from "./contactAction";

const initialState = {
    contactUs: {},
    status: "",
    error: {}

}
export const contactSlice = createSlice(
    {
    name: "contact",
    initialState: initialState,
        reducers:{},
    extraReducers(builder){
    builder
        .addCase(fetchContact.pending, (state, action) => {
        state.status = "PENDING"
    })
        .addCase(fetchContact.fulfilled, (state, action) => {
            state.status = "SUCCES"
            state.contactUs = action.payload
        })
        .addCase(fetchContact.rejected, (state, action) => {
            state.status = "ERROR"
            state.error = action.error

        })
}


}
)
export default contactSlice.reducer