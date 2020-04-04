import {combineReducers} from '@reduxjs/toolkit';

import {employeesSlice} from '../features/employees/employeesSlice';

const rootReducer = combineReducers({
  employees: employeesSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
