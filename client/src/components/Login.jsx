import React from 'react';
import { IoIosLogIn } from "react-icons/io";
import { TextField, Button, InputAdornment, IconButton, Divider } from "@mui/material";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { ArrowBack, Google, Visibility, VisibilityOff } from "@mui/icons-material"
import useGeneral from "../hooks/useGeneral.js";

function Login() {
    const [visible, setVisible] = React.useState(false);
    const visibleHandler = () => {
        setVisible(!visible);
    };

    const { navigate } = useGeneral();

    const initialState = {
        email: "",
        password: "",
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
    });

    const submitHandler = (values) => {
        console.log("Form Submitted:", values);
    };

    const loginWithGoogle = () => {
        window.location.href = 'https://baggagebugs-1.onrender.com/api/v1/user/auth/google', {
            withCredentials: true,
        };
    };

    return (
        <div className='auth_card'>
            <Formik
                onSubmit={submitHandler}
                validationSchema={validationSchema}
                initialValues={initialState}
            >
                {({ handleBlur, handleChange, values, touched, errors }) => (
                    <Form>
                        <div className='container-fluid'>
                            <div className='row g-3'>
                                <div className='col-12 auth_header'>
                                    <IoIosLogIn />
                                    <p>Welcome Back</p>
                                    <span>Login To Continue</span>
                                </div>
                                <div className='col-12'>
                                    <TextField
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.email && Boolean(errors.email)}
                                        helperText={touched.email && errors.email}
                                        label="Email"
                                        fullWidth
                                        size='small'
                                    />
                                </div>
                                <div className='col-12'>
                                    <TextField
                                        name="password"
                                        type={visible ? "text" : "password"}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment>
                                                    <IconButton onClick={visibleHandler} edge="end">
                                                        {visible ? <Visibility/> : <VisibilityOff/>}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.password && Boolean(errors.password)}
                                        helperText={touched.password && errors.password}
                                        label="Password"
                                        fullWidth
                                        size='small'
                                    />
                                </div>
                                <div className='col-12'>
                                    <Button type="submit" variant="contained" fullWidth>
                                        Login
                                    </Button>
                                </div>
                                <div className='col-12'>
                                    <Divider>
                                        OR
                                    </Divider>
                                </div>
                                <div className='col-12'>
                                    <Button onClick={loginWithGoogle} endIcon={<Google/>} variant="outlined" fullWidth>
                                        Google
                                    </Button>
                                </div>
                                <div className='col-12'>
                                    <Button onClick={() => navigate('/register')} startIcon={<ArrowBack />} variant='outlined' fullWidth>
                                        Create New Account
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}  
            </Formik>
        </div>
    );
}

export default Login;
