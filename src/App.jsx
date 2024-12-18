import React, { useState } from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';

const App = () => {
  const [refresh, setRefresh] = useState(false);
  const [employeeToEdit, setEmployeeToEdit] = useState(null);

  const handleFormSubmit = () => {
    setRefresh(!refresh); 
    setEmployeeToEdit(null); 
  };

  return (
    <div>
      <h1>Employee Directory</h1>
      <EmployeeForm 
        onSubmit={handleFormSubmit} 
        employee={employeeToEdit} 
      />
      <EmployeeList 
        setEmployeeToEdit={setEmployeeToEdit} 
        key={refresh} 
      />
    </div>
  );
};

export default App;