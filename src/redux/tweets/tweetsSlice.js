import { createSlice } from '@reduxjs/toolkit';

import { fetchAllTweets, fetchUpdateTweets } from './tweetsOperation';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllTweets.pending, store => {
        store.loading = true;
      })
      .addCase(fetchAllTweets.fulfilled, (store, { payload }) => {
        store.loading = false;
        payload.forEach(newItem => {
          if (
            !store.items.some(existingItem => existingItem.id === newItem.id)
          ) {
            store.items.push(newItem);
          }
        });
      })
      .addCase(fetchAllTweets.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })

      .addCase(fetchUpdateTweets.pending, store => {
        store.loading = true;
      })

      .addCase(fetchUpdateTweets.fulfilled, (store, { payload }) => {
        store.loading = false;
        const updatedTweet = payload;
        const index = store.items.findIndex(
          tweet => tweet.id === updatedTweet.id
        );
        if (index !== -1) {
          store.items[index] = updatedTweet;
        }
      })
      .addCase(fetchUpdateTweets.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },
});

export default tweetsSlice.reducer;
