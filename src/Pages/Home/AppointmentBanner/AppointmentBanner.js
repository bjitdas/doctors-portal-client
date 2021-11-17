import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Container, Typography } from '@mui/material';
import Button from '@mui/material/Button';


const appointmentBg = {
    background: `url(${bg})`,
    marginTop: "200px",
    backgroundColor: "rgba(33, 47, 73, 0.85)",
    backgroundBlendMode: "darken, luminosity"
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: "400px", marginTop: "-110px" }} src={doctor} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        textAlign: 'left'
                    }}>
                        <Box>
                            <Typography variant="h5" sx={{ mb: 5 }} style={{ color: "#59F4EB" }}>
                                Appointment
                            </Typography>
                            <Typography variant="h4" style={{ color: "white" }}>
                                Make an Appointment Today
                            </Typography>
                            <Typography variant="h6" sx={{ my: 5 }} style={{ color: "white", fontSize: "13px", fontWeight: 300 }}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores possimus fugit dicta impedit enim quam eius laudantium sunt rem laboriosam!
                            </Typography>
                            <Button variant="contained">Learn More</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AppointmentBanner;