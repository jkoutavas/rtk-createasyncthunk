import {useSelector, useDispatch} from 'react-redux';

import {RootState} from './src/app/rootReducer';
import {fetchEmployees} from './src/features/employees/employeesSlice';

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

declare var global: {HermesInternal: null | {}};

const App = () => {
  const dispatch = useDispatch();

  const {employees, isLoading} = useSelector(
    (state: RootState) => state.employees,
  );

  let renderedList = isLoading ? (
    <Text>Loading...</Text>
  ) : (
    employees !== undefined &&
    employees.map((employee) => (
      <View style={styles.employeeWrapper} key={employee.id}>
        <Text style={styles.textCenter}>Employee_id : {employee.id}</Text>
        <Text style={styles.textCenter}>
          Employee Name : {employee.employee_name}
        </Text>
        <Text style={styles.textCenter}>
          Employee Salary : {employee.employee_salary}
        </Text>
        <Text style={styles.textCenter}>
          Employee Age : {employee.employee_age}
        </Text>
      </View>
    ))
  );

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {global.HermesInternal == null ? null : (
          <View style={styles.engine}>
            <Text style={styles.footer}>Engine: Hermes</Text>
          </View>
        )}
        <Button
          title="Get Employees"
          onPress={() => dispatch(fetchEmployees())}
        />
        {renderedList}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  textCenter: {
    textAlign: 'center',
  },
  employeeWrapper: {
    padding: 10,
    borderBottomWidth: 1,
  },
});

export default App;
