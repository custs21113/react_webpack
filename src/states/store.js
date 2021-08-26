import { configureStore } from '@reduxjs/toolkit';
import counter from './counterSlice';
import singer from './singerSlice'

export default configureStore({
  reducer: {
    counter,
    singer
  },
});
