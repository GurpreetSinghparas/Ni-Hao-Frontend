import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  token: null,
};

const authSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.data;
      state.token = action.payload.token;
    },
  },
});

export const { loginSuccess } = authSlice.actions;

export default authSlice.reducer;
