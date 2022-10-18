import React from 'react';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = "https://newsapi.org/v2/everything?q=indonesia&apiKey=3556be9b02964e4e89bef53639128911"

const initialState = {
    dataArticles: [],
    loading: false
  }
  export const fetchArticles = createAsyncThunk('users/fetchArticles',
    async() => {
    const response = await axios.get(URL)
      // return response.data.articles;
      console.log('response', response);
  })
  export const IndonesiaSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {},
    extraReducers(builder) {
      builder.addCase(fetchArticles.fulfilled, (state, action) => {
        state.dataArticles.push(...action.payload)
        state.loading = false
      })
      builder.addCase(fetchArticles.pending, (state, action) => {
        state.loading = true
      })
      builder.addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false
        alert('Kesalahan dari sisi user');
      })
    }
  })

export default IndonesiaSlice.reducer;