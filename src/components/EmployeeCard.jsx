import React from 'react';

const EmployeeCard = ({ employee, setEmployeeToEdit, handleDelete }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
      <h3>{employee.name}</h3>
      <p><strong>Position:</strong> {employee.position}</p>
      <p><strong>Department:</strong> {employee.department}</p>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Number:</strong> {employee.number}</p>
      <button onClick={() => setEmployeeToEdit(employee)}>Edit</button>
      <button onClick={() => handleDelete(employee.id)}>Delete</button>
    </div>
  );
};

export default EmployeeCard;

