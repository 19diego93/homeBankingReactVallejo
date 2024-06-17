import { useState } from 'react';
import { Button, Label, TextInput } from "flowbite-react";
import { useNavigate } from 'react-router-dom';

import axios from 'axios'; // Add this line to import axios library

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => { // Change the function declaration to async
        event.preventDefault();
        if (password !== repeatPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/auth/signup', { // Change the axios call to use await
                firstName: name,
                lastName: lastName,
                email: email,
                password: repeatPassword
            });
            alert(response.data);
            navigate('/login');

        } catch (error) {
            console.log(error);
            alert(error.response.data);
        }
    };

    return (
        <div className="flex flex-col items-center ">
            <h2 className='text-center pt-5 text-4xl'>Register</h2>
            <form className="flex flex-col gap-4 border border-gray-200 rounded-xl bg-gray-200 p-5 min-w-[300px] md:w-[600px] mt-5" onSubmit={handleSubmit}>
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
                    <TextInput id="email2" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@flowbite.com" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password2" value="Your password" />
                    </div>
                    <TextInput id="password2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="repeat-password" value="Repeat password" />
                    </div>
                    <TextInput id="repeat-password" type="password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} required shadow />
                </div>

                <Button type="submit"> Register </Button>
            </form>
        </div>
    );
}
export default Register;
