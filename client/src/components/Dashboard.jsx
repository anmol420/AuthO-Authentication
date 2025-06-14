import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

function Dashboard() {
  // Step 1: Read from localStorage
  const localToken = localStorage.getItem('token');
  const localRole = localStorage.getItem('role');

  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  // Step 2 & 3: Set cookies and call API
  useEffect(() => {
    if (localToken && localRole) {
    //   // Set cookies
    //   Cookies.set('token', localToken);
    //   Cookies.set('role', localRole);

      // Optional: Log to verify
      console.log('Cookies set:', Cookies.get('token'), Cookies.get('role'));

      // Call API
      const fetchData = async () => {
        try {
          const res = await axios.get(
            'https://baggagebugs-1.onrender.com/api/v1/user/getUser',
           { withCredentials: true,}
          );
          console.log('API Response:', res.data);
          setUserData(res.data);
        } catch (err) {
          console.error('API Error:', err);
          setError('Failed to authenticate or fetch user data');
        }
        
      };

      fetchData();
    } else {
      setError('Token or role missing from localStorage');
    }
  }, [localToken, localRole]);

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

