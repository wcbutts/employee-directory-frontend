import React, { useState } from 'react';
import { addEmployee, updateEmployee } from '../services/employeeService';

const EmployeeForm = ({ employee, onSubmit }) => {
  
  const [name, setName] = useState(employee ? employee.name : '');
  const [position, setPosition] = useState(employee ? employee.position : '');
  const [department, setDepartment] = useState(employee ? employee.department : '');
  const [email, setEmail] = useState(employee ? employee.email : '');
  const [number, setNumber] = useState(employee ? employee.number : '');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const employeeData = { name, position, department, email, number };

    try {
      if (employee) {
        await updateEmployee(employee.id, employeeData);
      } else {
        await addEmployee(employeeData);
      }

      setName('');
      setPosition('');
      setDepartment('');
      setEmail('');
      setNumber('');

      onSubmit();
    } catch (err) {
      console.error("Error submitting employee data:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="text"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        placeholder="Position"
        required
      />
      <input
        type="text"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        placeholder="Department"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email (Optional)"
      />
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Number (Optional)"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmployeeForm;