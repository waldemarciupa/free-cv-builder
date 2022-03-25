import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Arthur',
  surname: 'Wilson',
  position: 'Software Engineer',
  email: 'artur@example.com',
  phone: '777-666-555',
  location: 'London, England',
  skills: [
    {
      id: '1647958919539',
      title: 'HTML',
      level: 'Beginner',
    },
  ],
  employments: [
    {
      id: '1647958919539',
      position: 'Junior Frontend Developer',
      employer: 'ECorp',
      city: 'New York',
      startDate: '11.11.11',
      endDate: '22.22.22',
    },
  ],
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
    addSkill: (state) => {
      state.skills.push({
        id: Date.now(),
        title: '',
        level: '',
      });
    },
    updateSkill: (state, action) => {
      state.skills = state.skills.map((skill) => {
        return skill.id === action.payload.id
          ? {
              ...skill,
              title: action.payload.title,
              level: action.payload.level,
            }
          : skill;
      });
    },
    deleteSkill: (state, action) => {
      state.skills = state.skills.filter((skill) => {
        return skill.id !== action.payload.id;
      });
    },
    addEmployment: (state) => {
      state.employments.push({
        id: Date.now(),
        position: '',
        employer: '',
        startDate: '',
        endDate: '',
      });
    },
    deleteEmployment: (state, action) => {
      state.employments = state.employments.filter((skill) => {
        return skill.id !== action.payload.id;
      });
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
  addSkill,
  updateSkill,
  deleteSkill,
  addEmployment,
  deleteEmployment,
} = profileSlice.actions;

export default profileSlice.reducer;
