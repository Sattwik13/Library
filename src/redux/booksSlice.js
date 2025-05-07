import { createSlice } from '@reduxjs/toolkit';
import dummyBooks from '../data/dummyData';

const initialState = {
  list: dummyBooks,
  loading: false,
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
