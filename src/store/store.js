import { configureStore } from '@reduxjs/toolkit'
import reducer from './postslice';

export default configureStore({
  reducer: {
    post:reducer
  },
});