import { createAsyncThunk } from '@reduxjs/toolkit';

import * as API from '../../services/API';

export const fetchAllTweets = createAsyncThunk(
  'tweets/fetch-all',
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const data = await API.getAllTweets(page, limit);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const fetchUpdateTweets = createAsyncThunk(
  'tweets/update-tweet',
  async ({ id, newData }, { rejectWithValue }) => {
    try {
      const data = await API.updateTweets(id, newData);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);
