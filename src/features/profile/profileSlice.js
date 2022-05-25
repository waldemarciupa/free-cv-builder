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
  languages: [
    {
      id: '1647958919531',
      name: 'Polish',
      level: 'Native',
    },
  ],
  employments: [
    {
      id: '1647958919539',
      position: 'Junior Frontend Developer',
      employer: 'ECorp',
      startDate: '2017-06-25',
      endDate: '2021-10-10',
      present: false,
      city: 'New York',
      description:
        'I was responsible for implementing the front-end logic that defines the behavior of the visual elements of a web application',
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
        present: false,
        city: '',
        description: '',
      });
    },
    updateEmployment: (state, action) => {
      state.employments = state.employments.map((employment) => {
        return employment.id === action.payload.id
          ? {
              ...employment,
              ...action.payload,
            }
          : employment;
      });
    },
    deleteEmployment: (state, action) => {
      state.employments = state.employments.filter((employment) => {
        return employment.id !== action.payload.id;
      });
    },
    addLanguage: (state) => {
      state.languages.push({
        id: Date.now(),
        name: '',
        level: '',
      });
    },
    updateLanguage: (state, action) => {
      state.languages = state.languages.map((language) => {
        return language.id === action.payload.id
          ? {
              ...language,
              name: action.payload.name,
              level: action.payload.level,
            }
          : language;
      });
    },
    deleteLanguage: (state, action) => {
      state.languages = state.languages.filter((language) => {
        return language.id !== action.payload.id;
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
  updateEmployment,
  deleteEmployment,
  addLanguage,
  updateLanguage,
  deleteLanguage,
} = profileSlice.actions;

export default profileSlice.reducer;
