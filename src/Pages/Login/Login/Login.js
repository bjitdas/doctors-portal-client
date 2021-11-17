import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import img from '../../../images/login.png'

const Login = () => {
    const [loginData, setLoginData] = useState('');
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    };

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }


    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body2" gutterBottom>
                        Login
                    </Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', mt: 2 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onBlur={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', mt: 2 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnChange}
                            variant="standard" />
                        <Button type="submit" sx={{ width: '75%', mt: 2 }} variant="contained">Login</Button>
                        <Link style={{ textDecoration: "none" }} to="/register">
                            <Button variant="text">New User? Please Register </Button>
                        </Link>

                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Congrats! Successfully user logged in</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}

                    </form>}
                    <p>-------------------</p>
                    <Button onClick={handleGoogleSignIn} sx={{ width: '75%', mt: 2 }} variant="contained">Google Sign In</Button>



                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={img} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;