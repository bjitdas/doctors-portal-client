import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Button, Container, Typography, Box } from '@mui/material';


const bannerBg = {
    background: `url(${bg})`

}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: '400px'
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{ ...verticalCenter, textAlign: 'left' }}>
                    <Box>
                        <Typography variant="h4">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" style={{ fontSize: "13px", fontWeight: 300 }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident temporibus, neque odio deleniti vel nulla!
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: "#73F7F0" }}>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid style={verticalCenter} item xs={12} md={6}>
                    <img style={{ width: '450px' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;