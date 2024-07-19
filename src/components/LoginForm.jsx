import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PasswordIcon from '@mui/icons-material/Password';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const LoginForm = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Username is required'),
            password: Yup.string()
                .required('Password is required')
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character'
                ),
        }),
        onSubmit: (values) => {
            navigate('/dashboard', { state: { username: values.username } });
        },
    });

    return (
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
                id="username"
                name="username"
                label="Enter the username"
                variant="outlined"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.username && Boolean(formik.errors.username)}
                helperText={formik.touched.username && formik.errors.username}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircleIcon />
                        </InputAdornment>
                    ),
                }}
                fullWidth
            />
            <TextField
                id="password"
                name="password"
                label="Enter the password"
                type="password"
                variant="outlined"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <PasswordIcon />
                        </InputAdornment>
                    ),
                }}
                fullWidth
            />
            <Button color="primary" variant="contained" type="submit">
                Login
            </Button>
        </Box>
    );
};

export default LoginForm;
