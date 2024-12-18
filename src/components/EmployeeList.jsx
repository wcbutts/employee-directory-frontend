import React, { useState, useEffect } from 'react';
import { getEmployees, deleteEmployee } from '../services/employeeService';
import EmployeeCard from './EmployeeCard';

const EmployeeList = ({ setEmployeeToEdit }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getEmployees();
        setEmployees(data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };
    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteEmployee(id); 
      setEmployees((prevEmployees) =>
        prevEmployees.filter((employee) => employee.id !== id) 
      );
    } catch (error) {
      console.error(`Error deleting employee with ID ${id}:`, error);
    }
  };

  return (
    <div>
      <h2>List of Employees</h2>
      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <div>
          {employees.map((employee) => (
            <EmployeeCard
              key={employee.id}
              employee={employee}
              setEmployeeToEdit={setEmployeeToEdit}
              handleDelete={handleDelete} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EmployeeList;
