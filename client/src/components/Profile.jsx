import { Logout } from '@mui/icons-material'
import { Avatar, Button } from '@mui/material'
import React from 'react'
import useGeneral from '../hooks/useGeneral.js'
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

function Profile() {
    const {navigate} = useGeneral();

    const [searchParams] = useSearchParams();

    // React.useEffect(() => {
    //     const token = searchParams.get('token');
    //     const role = searchParams.get('role');

    //     if (token && role) {
    //         axios.post(
    //             'https://baggagebugs-1.onrender.com/api/v1/user/setCookies',
    //             { token, role },
    //             { withCredentials: true }
    //         ).then(() => {
    //             window.history.replaceState(null, "", "/landingpage");
    //         }).catch((err) => {
    //             console.error("Cookie setting failed", err);
    //         });
    //     }
    // }, []);

    React.useEffect(() => {
        // Wait a moment if needed to ensure cookies are available
        const callPostLoginAPI = async () => {
            try {
                const token = searchParams.get('token');
                const role = searchParams.get('role');
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
        callPostLoginAPI();
    }, []);

    return (
        <div className='auth_card'>
            Logging in ...
        </div>
    )
}

export default Profile