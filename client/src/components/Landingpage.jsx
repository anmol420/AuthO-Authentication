import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const Landingpage = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  

  

  return (
    <div>
      <h1>Landing Page</h1>
      {userData && <pre>{JSON.stringify(userData, null, 2)}</pre>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Landingpage;
