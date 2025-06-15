import { Logout } from '@mui/icons-material';
import { Avatar, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useGeneral from '../hooks/useGeneral.js';
import axios from 'axios';

function Profile() {
  const { navigate } = useGeneral();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get('token');
    localStorage.setItem('token', token);
    console.log("Token saved to localStorage:", token);
  });

  // Step 2: Call API using token from localStorage
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        console.warn("No token in localStorage.");
        navigate('/login');
        return;
      }

      console.log("Token being used:", token);

      try {
           const response = await axios.get('https://baggagebugs-1.onrender.com/api/v1/user/getUser', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });

        console.log("User data fetched:", response.data);
        


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
      <Avatar sx={{ width: 64, height: 64, marginBottom: 2 }}>
        {user?.user?.name?.charAt(0)?.toUpperCase() || 'U'}
      </Avatar>
      <h2>{user?.user?.name}</h2>
      <p>Email: {user?.user?.email}</p>
      <p>Role: {user?.user?.role}</p>

      <Button
        variant='contained'
        color='error'
        startIcon={<Logout />}
        onClick={() => {
          localStorage.clear();
          navigate('/dashboard');
        }}
        style={{ marginTop: '1rem' }}
      >
        Logout
      </Button>
    </div>
  );
}

export default Profile;
