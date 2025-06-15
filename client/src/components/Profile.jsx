import { Logout } from '@mui/icons-material';
import { Avatar, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useGeneral from '../hooks/useGeneral.js';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie'; // ← import js-cookie

function Profile() {
    const { navigate } = useGeneral();




    return (
        <div className='auth_card'>
            <p>Logging in...</p>
        </div>
    );
}

export default Profile;
