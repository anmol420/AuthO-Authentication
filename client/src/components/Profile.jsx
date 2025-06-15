import { Logout } from '@mui/icons-material';
import { Avatar, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useGeneral from '../hooks/useGeneral.js';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useSearchParams } from 'react-router-dom';

function Profile() {
  const { navigate } = useGeneral();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // track loading

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    const role = params.get('role');

    if (token && role) {
      // Save token and role to localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      // Optional: navigate to dashboard
      // navigate('/browse'); ← if you want redirect, move API call elsewhere
    } else {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await axios.get('https://baggagebugs-1.onrender.com/api/v1/user/getUser', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setUser(response.data);
      } catch (error) {
        console.error('Failed to fetch user:', error);
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  if (loading) {
    return <div className='auth_card'><p>Loading user data...</p></div>;
  }

  return (
    <div className='auth_card'>
 
      

      <Button
        variant='contained'
        color='error'
        startIcon={<Logout />}
        onClick={() => {
          localStorage.clear();
          
          navigate('/dashboard'); // Redirect to dashboard after logout
        }}
        style={{ marginTop: '1rem' }}
      >
        Logout
      </Button>
    </div>
  );
}

export default Profile;
