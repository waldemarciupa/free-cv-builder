import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Arthur',
  surname: 'Wilson',
  position: 'Software Engineer',
  email: 'artur@example.com',
  phone: '777-666-555',
  location: 'London, England',
  image: null,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setSurname: (state, action) => {
      state.surname = action.payload;
    },
    setPosition: (state, action) => {
      state.position = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
  },
});

export const {
  setName,
  setSurname,
  setPosition,
  setEmail,
  setPhone,
  setLocation,
  setImage,
} = profileSlice.actions;

export default profileSlice.reducer;
