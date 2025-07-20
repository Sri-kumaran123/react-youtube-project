import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
   async ({ query }, thunkAPI) => { 

    }
);
const initialState = {
    videos: [],
    loading: false,
}

export const postSlicer = createSlice({
    name:"post",
    initialState,
    reducers:{

    },
     extraReducers: (builder) => {
        builder
            .addCase(fetchVideos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchVideos.fulfilled, (state, action) => {
                state.loading = false;
                state.videos = action.payload;
            })
            .addCase(fetchVideos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const {} = postSlicer.actions;

export default postSlicer.reducer;