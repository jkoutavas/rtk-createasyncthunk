import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {employeesAPI, Employee} from './employeesAPI';

// Requesting all employees, with loading state, and only one request at a time

interface EmployeesState {
  employees: Employee[];
  loading: 'idle' | 'pending';
  error: string | null;
}

export const fetchEmployees = createAsyncThunk('employees/fetch', async () => {
  async ({}, {getState}) => {
    const {loading} = getState().employees;
    if (loading !== 'pending') {
      return;
    }
  };
  const response = await employeesAPI.getEmployees();
  return response.employees;
});

export const employeesSlice = createSlice({
  name: 'employees',
  initialState: {employees: [], loading: 'idle', error: null},
  reducers: {},
  extraReducers: {
    [fetchEmployees.pending]: (state: EmployeesState) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    },
    [fetchEmployees.fulfilled]: (
      state: EmployeesState,
      action: {payload: Employee[]},
    ) => {
      if (state.loading === 'pending') {
        state.loading = 'idle';
      }
      state.employees = action.payload;
    },
    [fetchEmployees.rejected]: (
      state: EmployeesState,
      action: {payload: Employee[]},
    ) => {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.error = action.error;
      }
    },
  },
});
