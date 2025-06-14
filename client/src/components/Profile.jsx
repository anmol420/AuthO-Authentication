import { Logout } from '@mui/icons-material'
import { Avatar, Button } from '@mui/material'
import React from 'react'
import useGeneral from '../hooks/useGeneral.js'
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

function Profile() {
    const {navigate} = useGeneral();

    const [searchParams] = useSearchParams();

    React.useEffect(() => {
        const token = searchParams.get('token');
        const role = searchParams.get('role');

        if (token && role) {
            axios.post(
                'https://baggagebugs-1.onrender.com/api/v1/user/setCookies',
                { token, role },
                { withCredentials: true }
            ).then(() => {
                window.history.replaceState(null, "", "/landingpage");
            }).catch((err) => {
                console.error("Cookie setting failed", err);
            });
        }
    }, []);

    return (
        <div className='auth_card'>
            <div className='profile_container'>
                <span className='name'>
                    <Avatar sx={{backgroundColor: 'orangered', textTransform: 'capitalize'}}>A</Avatar>
                </span>
                <span className='full_name'>
                    name
                </span>
                <span className='email'>
                    email@email.com
                </span>
            </div>
            <div className='action'>
                <Button endIcon={<Logout />} variant='contained' fullWidth onClick={() => navigate('/login')}>
                    Logout
                </Button>
            </div>
        </div>
    )
}

export default Profile