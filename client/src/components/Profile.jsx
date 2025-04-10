import { Logout } from '@mui/icons-material'
import { Avatar, Button } from '@mui/material'
import React from 'react'
import useGeneral from '../hooks/useGeneral.js'

function Profile() {
    const {navigate} = useGeneral()

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