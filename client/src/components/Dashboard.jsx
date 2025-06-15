import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

function Dashboard() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [role, setRole] = useState(localStorage.getItem('role'));

  useEffect(() => {
    if (token) localStorage.setItem('token', token);
    if (role) localStorage.setItem('role', role);
  }, [token, role]);

  const clearAuth = () => {
    setToken(null);
    setRole(null);
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  };
  return (
    <div>
      <h1 >Dashboard </h1>
      <p>Welcome to your dashboard!</p>
      {userData && <pre>{JSON.stringify(userData, null, 2)}</pre>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Dashboard;

