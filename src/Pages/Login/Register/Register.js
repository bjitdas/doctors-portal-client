import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import img from '../../../images/login.png'

const Register = () => {
    const [loginData, setLoginData] = useState()
    const { user, registerUser, isLoading, authError } = useAuth();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData)
    };

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('password did not match')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)

        e.preventDefault()
    }


    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body" gutterBottom>
                        Register
                    </Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', mt: 2 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', mt: 2 }}
                            id="standard-basic"
                            label="Your Email"
                            type="email"
                            name="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', mt: 2 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', mt: 2 }}
                            id="standard-basic"
                            label="Re-enter Your Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <Button sx={{ width: '75%', mt: 2 }} variant="contained" type="submit">Register</Button>
                        <Link style={{ textDecoration: "none" }} to="/login">
                            <Button variant="text">Already Registered? Please Login </Button>
                        </Link>
                    </form>}



                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Congrats! Successfully created user</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={img} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;