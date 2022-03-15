import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Your name',
  image: null,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
  },
});

export const { setName, setImage } = profileSlice.actions;

export default profileSlice.reducer;
