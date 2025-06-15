import { Logout } from '@mui/icons-material';
import { Avatar, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useGeneral from '../hooks/useGeneral.js';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie'; // ← import js-cookie

function Profile() {
    const { navigate } = useGeneral();
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
        <div className='auth_card'>
            <p>Logging in...</p>
        </div>
    );
}

export default Profile;
