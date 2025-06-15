import React from "react";// ← import js-cookie

function Profile() {
  
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [role, setRole] = useState(localStorage.getItem('role'));

  useEffect(() => {
    if (token) localStorage.setItem('token', token);
    if (role) localStorage.setItem('role', role);
    console.log('Token:', token);
    console.log('Role:', role);
  }, [token, role]);
    return (
        <div className='auth_card'>
            <p>Logging in...</p>
        </div>
    );
}

export default Profile;
