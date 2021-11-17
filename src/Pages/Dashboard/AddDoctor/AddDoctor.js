import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState(null)
    const [success, setSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault()

        const formData = new FormData();
        formData.append('name', name)
        formData.append('email', email)
        formData.append('image', image)

        fetch('https://stormy-island-38545.herokuapp.com/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('Doctor added successful')
                    setSuccess(true)
                }
            })

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Name"
                    name="name"
                    onBlur={e => setName(e.target.value)}
                    variant="standard"
                    required
                />
                <br />
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    name="email"
                    variant="standard"
                    onBlur={e => setEmail(e.target.value)}
                    required
                />
                <br />
                <Input sx={{ width: '50%' }}
                    accept="image/*"
                    multiple type="file"
                    required
                    onChange={e => setImage(e.target.files[0])} />
                <br /> <br />
                <Button variant="contained" type="submit">
                    Add
                </Button>
            </form>
            {success && <p style={{ color: 'green' }}>Doctor Added Successful</p>}
        </div>
    );
};

export default AddDoctor;