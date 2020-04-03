import axios from 'axios';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppThunk} from 'app/store';

interface Employee {
  id: string;
  employee_name: string;
  employee_salary: string;
  employee_age: string;
}

interface EmployeesState {
  employees: Employee[];
  isLoading: boolean;
  error: string | null;
}

let initialState: EmployeesState = {
  employees: [],
  isLoading: false,
  error: null,
};

interface EmployeesResult {
  employees: Employee[];
}

async function getEmployees(): Promise<EmployeesResult> {
  const url = 'http://dummy.restapiexample.com/api/v1/employees';
  try {
    const employeesResponse = await axios.get<{data: Employee[]}>(url);
    return {
      employees: employeesResponse.data.data,
    };
  } catch (err) {
    throw err;
  }
}

function startLoading(state: EmployeesState) {
  state.isLoading = true;
}

function loadingFailed(state: EmployeesState, action: PayloadAction<string>) {
  state.isLoading = false;
  state.error = action.payload;
}

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    getEmployeesStart: startLoading,
    getEmployeesSuccess(
      state: EmployeesState,
      {payload}: PayloadAction<EmployeesResult>,
    ) {
      const {employees} = payload;
      state.isLoading = false;
      state.error = null;
      state.employees = employees;
    },
    getEmployeesFailure: loadingFailed,
  },
});

export const {
  getEmployeesStart,
  getEmployeesSuccess,
  getEmployeesFailure,
} = employeesSlice.actions;

export default employeesSlice.reducer;

export const fetchEmployees = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getEmployeesStart());
    const employees = await getEmployees();
    dispatch(getEmployeesSuccess(employees));
  } catch (err) {
    dispatch(getEmployeesFailure(err.toString()));
  }
};
