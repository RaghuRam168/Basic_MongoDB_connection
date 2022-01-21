import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/UI/Button'
const Dashboard = () => {
  const navigate = useNavigate()
  if(!localStorage.getItem('userInfo'))
  {
    navigate('/')
  }
  const Logout = async() =>{
  await  localStorage.clear()
    navigate('/')
  }
  return <div><h1>Dashboard</h1>
  <button onClick={Logout}></button>
  </div>;
};

export default Dashboard;
