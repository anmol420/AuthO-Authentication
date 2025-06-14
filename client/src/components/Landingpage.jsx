import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const Landingpage = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const localToken = localStorage.getItem('token');
  const localRole = localStorage.getItem('role');

  useEffect(() => {
    if (localToken && localRole) {
      // ✅ Set cookies before calling API
      Cookies.set('token', localToken);
      Cookies.set('role', localRole);

      console.log('Cookies set:', Cookies.get('token'), Cookies.get('role'));

      // ✅ Call API using credentials
    
    } else {
      setError('Token or role missing from localStorage');
    }
  }, [localToken, localRole]);

  return (
    <div>
      <h1>Landing Page</h1>
      {userData && <pre>{JSON.stringify(userData, null, 2)}</pre>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Landingpage;
