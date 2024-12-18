import axios from 'axios';

const API_URL = 'http://localhost:8080/api/employees';
const headers = { 'Content-Type': 'application/json' };

export const getEmployees = async () => {
  try {
    const response = await axios.get(API_URL, {headers});
    return response.data; 
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error; 
  }
};

export const getEmployeeById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`,{headers});
    return response.data; 
  } catch (error) {
    console.error(`Error fetching employee with ID ${id}:`, error);
    throw error;
  }
};

export const addEmployee = async (employeeData) => {
  try {
    const response = await axios.post(API_URL, employeeData,{headers});
    return response.data; 
  } catch (error) {
    console.error('Error adding employee:', error);
    throw error;
  }
};

export const updateEmployee = async (id, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedData,{headers});
    return response.data; 
  } catch (error) {
    console.error(`Error updating employee with ID ${id}:`, error);
    throw error;
  }
};

export const deleteEmployee = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`,{headers});
    return { message: 'Employee deleted successfully', data: response.data };
  } catch (error) {
    console.error(`Error deleting employee with ID ${id}:`, error);
    throw error;
  }
};