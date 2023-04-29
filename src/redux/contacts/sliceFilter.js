import { createSlice } from '@reduxjs/toolkit';

const filterInitState = {
  query: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitState,
  reducers: {
    changeFilter: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;