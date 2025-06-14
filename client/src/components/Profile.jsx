import { Logout } from '@mui/icons-material';
import { Avatar, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useGeneral from '../hooks/useGeneral.js';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

function Profile() {
    const { navigate } = useGeneral();
    const [searchParams] = useSearchParams();

    // Store token and role in state
    const [token, setToken] = useState(null);
    const [role, setRole] = useState(null);

    // On initial load, get token and role from URL
    useEffect(() => {
        const urlToken = searchParams.get('token');
        const urlRole = searchParams.get('role');

        if (urlToken && urlRole) {
            setToken(urlToken);
            setRole(urlRole);
        }
    }, [searchParams]);

    const callPostLoginAPI = async () => {
        if (!token || !role) {
            console.warn('Missing token or role');
            return;
        }

        try {
            const res = await axios.post(
                'https://baggagebugs-1.onrender.com/api/v1/user/setCookies',
                { token, role },
                { withCredentials: true }
            );
            console.log('User session verified:', res.data);
            navigate('/dashboard');
        } catch (err) {
            console.error('Session check failed:', err);
            navigate('/login');
        }
    };

    return (
        <div className='auth_card'>
            <button onClick={callPostLoginAPI}>Login</button>
            Logging in ...
        </div>
    );
}

export default Profile;
