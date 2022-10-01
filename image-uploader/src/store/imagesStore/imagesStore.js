import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = 'http://localhost:3006/images/'

export const postImage = createAsyncThunk('image/postImage',
    async (insert,{rejectWithValue}) => {
        try {
            const response = await axios.post(baseURL, insert)
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    })

const initialState = {insertImage: null, isUploading: false, isError: null}
const imageSlice = createSlice({
    name: 'image',
    initialState,
    extraReducers: {
        [postImage.pending]: (state,action) => {
            state.isUploading = true
            state.isError = null
        },
        [postImage.fulfilled]: (state,action) => {
            state.isUploading = false
            state.isError = null
            state.insertImage = action.payload
        },
        [postImage.rejected]: (state,action) => {
            state.isUploading = false
            state.isError = action.payload
        }
    }
})
export default imageSlice.reducer