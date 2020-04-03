import {combineReducers} from '@reduxjs/toolkit';

import employeesReducer from '../features/employees/employeesSlice';

const rootReducer = combineReducers({
  employees: employeesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
