import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckOutform from './CheckutForm';


const stripePromise = loadStripe('pk_test_51JvzZiAxsF65Leh2OgzUUsv6iy0hIgfBXNFRiYbDXvdn7Glvelb8hMYEViCIG3cyrMJAUL1YRd9mLcEfqmzelyTs00DWO5aD49')

const Payment = () => {
    const { appointmentId } = useParams()
    const [appointment, setAppointment] = useState({})

    useEffect(() => {
        fetch(`https://stormy-island-38545.herokuapp.com/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [appointmentId])
    return (
        <div>
            <h2>Please pay for: {appointment.patientName} for {appointment.serviceName} </h2>
            <h3>Payable-Amount: ${appointment.price}</h3>

            {appointment.price && <Elements stripe={stripePromise}>
                <CheckOutform appointment={appointment} />
            </Elements>}
        </div>
    );
};

export default Payment;