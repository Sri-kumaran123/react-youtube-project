// postslice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const fetchVideos = createAsyncThunk(
  'posts/fetchPosts',
  async ({ query, pageToken }, thunkAPI) => {
    try {
      let endpoint = '';
      if (query) {
        endpoint = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${encodeURIComponent(query)}&type=video&key=${API_KEY}`;
      } else {
        endpoint = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=20&regionCode=US&key=${API_KEY}`;
      }

      if (pageToken) {
        endpoint += `&pageToken=${pageToken}`;
      }

      // Small delay for smooth loader animation
      await new Promise((res) => setTimeout(res, 500));

      const response = await axios.get(endpoint);
      return {
        items: response.data.items,
        nextPageToken: response.data.nextPageToken || null,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.error?.message || error.message);
    }
  }
);

const initialState = {
  videos: [],
  loading: false,
  nextPageToken: null,
  error: null,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.loading = false;
        if (state.videos.length && action.meta.arg.pageToken) {
          state.videos = [...state.videos, ...action.payload.items];
        } else {
          state.videos = action.payload.items;
        }
        state.nextPageToken = action.payload.nextPageToken;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default postSlice.reducer;
