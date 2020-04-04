import axios from 'axios';

export interface Employee {
  id: string;
  employee_name: string;
  employee_salary: string;
  employee_age: string;
}

interface GetEmployeesResult {
  employees: Employee[];
}

export namespace employeesAPI {
  export async function getEmployees(): Promise<GetEmployeesResult> {
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
}
