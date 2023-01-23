import { Button, TextField } from '@mui/material'
import axios from 'axios';
import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';


export default function LoginEMS() {
    const [data, setdata] = useState({
        email: "",
        password: ""
    });
    const myNav = useNavigate()

    const myHandler = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }
    const myLogin = (e) => {
        e.preventDefault()

        axios.post("http://localhost:4000/accounts/authenticate", data)
            .then(y => {
                console.log(y);
                localStorage.setItem("EMSdata", JSON.stringify(y.data))
                myNav("/dashboard")
                // toast("Login Successfully.....")
            }).catch(() => {
                // toast("Email and password invalid")
            })
    }




    return (
        <div >
            <form onSubmit={myLogin} className='w-50 mx-auto m-5 border p-4 rounded bg-white'>
                <h3 className='text-center'>Login Form</h3>

                <TextField
                    type='email'
                    label='Email'
                    variant='filled'
                    fullWidth
                    onChange={myHandler}
                    name='email'>
                </TextField><br /><br />
                <TextField
                    type='password'
                    label='Password'
                    variant='filled'
                    fullWidth
                    onChange={myHandler}
                    name='password'>
                </TextField><br /><br />
                <input type="submit" value="Login" className='form-control btn btn-outline-primary' /><br /><br />

                <div className='text-center'>
                    <Link to={"/registration"} style={{ textDecoration: "none" }}>Create a new account</Link>
                </div>
            </form>


        </div>
    )
}
