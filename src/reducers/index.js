import { combineReducers } from '@reduxjs/toolkit';

import authUser from './authUserReducer';

const rootReducer = combineReducers({
  authUser,
});

export default rootReducer;
