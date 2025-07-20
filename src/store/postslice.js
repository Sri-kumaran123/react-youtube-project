import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
// In Vite, use import.meta.env for environment variables
// Make sure VITE_YOUTUBE_API_KEY is defined in your .env file
export const fetchVideos = createAsyncThunk(
    'posts/fetchPosts',
    async ({ query }, thunkAPI) => { 
        try {
            let endpoint = '';
            if (query) {
                endpoint = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${encodeURIComponent(query)}&type=video&key=${API_KEY}`;
            } else {
                endpoint = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=20&regionCode=US&key=${API_KEY}`;
            }

            const response = await axios.get(endpoint);
            // For search, items are in response.data.items, but for videos, items are also in response.data.items
            return response.data.items;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.error?.message || error.message);
        }
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