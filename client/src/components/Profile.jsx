import { Logout } from '@mui/icons-material';
import { Avatar, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useGeneral from '../hooks/useGeneral.js';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie'; // ← import js-cookie

function Profile() {
    const { navigate } = useGeneral();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    const role = params.get('role');

    if (token && role) {
      // Save token and role to localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      // Optional: navigate to dashboard
      navigate('/browse');
    } else {
      // Handle error or fallback
      navigate('/login');
    }
  }, [navigate]);

    return (
        <div className='auth_card'>
            <p>Logging in...</p>
        </div>
    );
}

export default Profile;
