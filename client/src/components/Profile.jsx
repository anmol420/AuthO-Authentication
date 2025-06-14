import { Logout } from '@mui/icons-material';
import { Avatar, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useGeneral from '../hooks/useGeneral.js';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie'; // ← import js-cookie

function Profile() {
    const { navigate } = useGeneral();
    const [searchParams] = useSearchParams();

    const [token, setToken] = useState(null);
    const [role, setRole] = useState(null);

    // Extract token and role from URL and store in cookies
    

    // Get token and role from cookies
    useEffect(() => {
        const token = searchParams.get('token');
        const role = searchParams.get('role');
         setToken(token);
        setRole(role);
    }, []);

    // When token and role are ready, make the API call
    useEffect(() => {
        if (token && role) {
            callPostLoginAPI();
        }
    }, [token, role]);

    const callPostLoginAPI = async () => {
        try {
            // const res = await axios.post(
            //     'https://baggagebugs-1.onrender.com/api/v1/user/setCookies',
            //     { token, role },
            //     { withCredentials: true }
            // );
            // console.log('User session verified:', res.data);
            console.log('bhai mai nhi dikhunga mr india hue',token, role);
            localStorage.setItem("token", token);
            localStorage.setItem("role", role);
            navigate('/dashboard');
        } catch (err) {
            console.error('Session check failed:', err);
            navigate('/login');
        }
    };

    return (
        <div className='auth_card'>
            <p>Logging in...</p>
        </div>
    );
}

export default Profile;
