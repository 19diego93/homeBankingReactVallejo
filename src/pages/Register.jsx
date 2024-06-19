import React, { useState } from 'react';
import { Button, Label, TextInput } from "flowbite-react";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'; // Add this line to import axios library

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorRepeatPassword, setErrorRepeatPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => { // Change the function declaration to async
        event.preventDefault();
        if (password !== repeatPassword) {
            setErrorRepeatPassword(true);
            toast.warn('Passwords do not match');
            return;
        }

        if (!isValidEmail(email)) {
            setErrorEmail(true);
            toast.warn('Invalid email');
            return;
        }

        if (!isValidPassword(password)) {
            setErrorPassword(true);
            toast.warn('Password must be at least 6 characters');
            return;
        }

        try {
            const response = await axios.post('https://homebanking-app-2u3u.onrender.com/api/auth/signup', {
                firstName: name,
                lastName: lastName,
                email: email,
                password: repeatPassword
            });
            toast.success(response.data);
            navigate('/login');

        } catch (error) {
            console.log(error);
            toast.error(error.response.data);
        }
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidPassword = (password) => {
        return password.length >= 6;
    };

    return (
        <div className="flex flex-col items-center ">
            <h2 className='text-center font-bold pt-5 text-4xl'>Register</h2>
            <form className="flex flex-col gap-4 border border-gray-200 rounded-xl bg-gray-200 p-5 min-w-[300px] md:w-[600px] mt-5 mb-5" onSubmit={handleSubmit}>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="name" value="Your name" />
                    </div>
                    <TextInput id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="your name" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="lastname" value="Your lastname" />
                    </div>
                    <TextInput id="lastname" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="your lastname" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email2" value="Your email" />
                    </div>
                    <TextInput id="email2" type="email" value={email} onChange={(e) => {
                        setErrorEmail(false);
                        setEmail(e.target.value);
                    }} placeholder="name@flowbite.com" required shadow error={errorEmail} helpText="Invalid email" />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password2" value="Your password" />
                    </div>
                    <TextInput id="password2" type="password" value={password} onChange={(e) => {
                        setErrorPassword(false);
                        setPassword(e.target.value);
                    }} required shadow error={errorPassword} helpText="Password must be at least 6 characters" />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="repeat-password" value="Repeat password" />
                    </div>
                    <TextInput id="repeat-password" type="password" value={repeatPassword} onChange={(e) => {
                        setErrorRepeatPassword(false);
                        setRepeatPassword(e.target.value);
                    }} required shadow error={errorRepeatPassword} helpText="Passwords do not match" />
                </div>

                <Button type="submit"> Register </Button>
            </form>
            <ToastContainer position='bottom-right' theme='dark' />
        </div>
    );
}

export default Register;
