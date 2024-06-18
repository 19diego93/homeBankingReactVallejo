import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';



const Login = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();

        const user = {
            email: email,
            password: password
        }
        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', user);
            let token = response.data;
            if (response.status !== 200) {

                return null;
            }
            const responseCurrent = await axios.get('http://localhost:8080/api/auth/current', { headers: { Authorization: `Bearer ${token}` } });

            let client = responseCurrent.data;
            client.token = token;
            dispatch(login(client));
            navigate("/clientHome");
            console.log(client);
            console.log(client.token);



        } catch (error) {
            console.log(error);
        }

    };



    return (
        <div className="flex flex-col items-center bg-gray-200 mt-4 p-7 rounded-2xl">
            <h2 className='text-center font-bold pt-2 text-4xl'>Login</h2>
            <form className="w-[300px] mt-5 flex flex-col gap-4" >
                <div className='flex flex-col'>
                    <label htmlFor="email" className='font-semibold'>Email</label>
                    <input className='rounded-lg' placeholder="Email" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="password" className='font-semibold'>Password</label>
                    <input className='rounded-lg' placeholder="Password" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className='mt-5 bg-[#AB9144] rounded-lg p-2 hover:bg-[#add8e6] font-semibold' type="submit" size="lg" onClick={handleLogin} >Login</button>
            </form>
        </div>
    );
}

export default Login;

