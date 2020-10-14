import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import fetch from 'isomorphic-unfetch'

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleSignup = async () => {
        // console.log(email, password)
        const resp = await fetch('http://localhost:3000/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        });
        const json = await resp.json();
        console.log(json)
    }

    return (<>
        <Container>
            <div>
                <h1>Signup Form</h1>
            </div>
            <div>
                <TextField placeholder='Name' onChange={(e) => { setName(e.target.value) }} />
            </div>
            <div>
                <TextField placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            <div>
                <TextField type='password' placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} />
            </div>
            <div>
                <Button onClick={handleSignup}>Signup</Button>
            </div>
        </Container>
    </>
    )
}

export default Signup