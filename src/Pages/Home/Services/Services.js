import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import flourideImg from '../../../images/fluoride.png'
import cavityImg from '../../../images/cavity.png'
import whiteImg from '../../../images/whitening.png'
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';


const services = [
    {
        name: "Flouride Treatment",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam beatae enim saepe sint blanditiis! Voluptatem eaque amet eius nisi dolorum?",
        img: flourideImg
    },
    {
        name: "Cavity Filling",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam beatae enim saepe sint blanditiis! Voluptatem eaque amet eius nisi dolorum?",
        img: cavityImg
    },
    {
        name: "Teeth Whitening",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam beatae enim saepe sint blanditiis! Voluptatem eaque amet eius nisi dolorum?",
        img: whiteImg
    }
]


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 4, color: 'success.main' }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 2 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;