import React, { useEffect, useState } from 'react';
import './App.scss';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Dashboard from './Components/Dashboard/dashboard';
import Login from './Components/Login/login';
import Header from './Layout/header';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    setIsLogged(localStorage.getItem('isLogged'));
  }, [localStorage.getItem('isLogged')])

  useEffect(() => {
    if (localStorage.getItem('isLogged')) {
      window.location.pathname === '/' && (
        navigate('/dashboard')
      )
    } else {
      navigate('/login')
    }
  }, [])

  return (
    <div >
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route element={<Header />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
