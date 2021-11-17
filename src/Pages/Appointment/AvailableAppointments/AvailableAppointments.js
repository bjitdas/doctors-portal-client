import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: "Teeth Orthodontics",
        time: "8.00 AM - 9.00 PM",
        price: 20,
        space: 10
    },
    {
        id: 2,
        name: "Cosmetic Dentistry",
        time: "10.05 AM - 11.30 PM",
        price: 15,
        space: 10
    },
    {
        id: 3,
        name: "Teeth Cleaning",
        time: "5.00 PM - 6.30 PM",
        price: 25,
        space: 10
    },
    {
        id: 4,
        name: "Cavity Protection",
        time: "5.00 PM - 6.30 PM",
        price: 27,
        space: 10
    },
    {
        id: 5,
        name: "Teeth Ordontics",
        time: "7.00 AM - 8.30 PM",
        price: 30,
        space: 10
    },
    {
        id: 6,
        name: "Teeth Cleaning",
        time: "8.00 AM - 8.30 PM",
        price: 18,
        space: 10
    },
]

const AvailableAppointments = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);

    return (
        <Container>
            <Typography variant="h5" sx={{ color: "success.main", fontWeight: 600, my: 4 }} >Available Appoinments {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Congrats! Booked Successfully</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;